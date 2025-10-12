import {
  Effect,
  Cache,
  pipe,
  Array as EffectArray,
  Context,
  Layer,
} from "effect";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import * as path from "path";

import {
  RegistryItem,
  RegistryItemFile,
  registryItemSchema,
} from "@/lib/registry/schemas";

import { Index } from "@/registry/default/components/__index__";

export type ProcessedRegistryFile = RegistryItemFile & {
  content: string;
};

export interface ExtendedRegistryItem extends Omit<RegistryItem, "files"> {
  files: ProcessedRegistryFile[];
}

// Define our services and contexts
export interface ComponentRegistryService {
  readonly getItem: (
    name: string
  ) => Effect.Effect<ExtendedRegistryItem | null, RegistryError>;
  readonly getItemCached: (
    name: string
  ) => Effect.Effect<ExtendedRegistryItem | null, RegistryError>;
  readonly clearCache: () => Effect.Effect<void>;
}

export const ComponentRegistryService =
  Context.GenericTag<ComponentRegistryService>(
    "@services/ComponentRegistryService"
  );

// Define our error types
export class RegistryError extends Error {
  readonly _tag: string = "RegistryError";
  constructor(readonly message: string, readonly cause?: unknown) {
    super(message);
  }
}

export class FileNotFoundError extends RegistryError {
  readonly _tag = "FileNotFoundError";
  constructor(readonly filePath: string, cause?: unknown) {
    super(`File not found: ${filePath}`, cause);
  }
}

export class ComponentNotFoundError extends RegistryError {
  readonly _tag = "ComponentNotFoundError";
  constructor(readonly componentName: string) {
    super(`Component not found: ${componentName}`);
  }
}

// Process Import paths logic
const processImportPaths = (content: string) =>
  pipe(
    content,
    // Replace shadcn registry component imports
    (c) =>
      c.replace(
        /@\/registry\/default\/components\/ui\/([^"']+)/g,
        "@/components/ui/$1"
      ),
    // Replace react-aria registry component imports
    (c) =>
      c.replace(
        /@\/registry\/default\/components\/ui\/([^"']+)/g,
        "@/components/ui/$1"
      )
  );

// Effect based file reading with error handling
const readFileWithProcessing = (filePath: string, fs: FileSystem.FileSystem) =>
  pipe(
    Effect.gen(function* () {
      const absolutePath = path.join(process.cwd(), filePath);

      // Read file content
      const content = yield* fs
        .readFileString(absolutePath)
        .pipe(
          Effect.mapError((cause) => new FileNotFoundError(filePath, cause))
        );

      // Process import paths
      const processedContent = processImportPaths(content);

      return processedContent;
    })
  );

// Process a single registry file
const processRegistryFile = (
  file: RegistryItemFile,
  fs: FileSystem.FileSystem
): Effect.Effect<ProcessedRegistryFile, RegistryError> =>
  pipe(
    readFileWithProcessing(file.path, fs),
    Effect.map((content) => ({ ...file, content }))
  );

// Process all files in parallel for maximum performance
const processRegistryFiles = (
  files: readonly RegistryItemFile[],
  fs: FileSystem.FileSystem
): Effect.Effect<ProcessedRegistryFile[], RegistryError> =>
  pipe(
    files,
    EffectArray.map((file) => processRegistryFile(file, fs)),
    Effect.all, // This runs all file operations in parallel
    Effect.withConcurrency("unbounded")
  );

export const getComponentRegistryItem = (name: string) => {
  return Effect.gen(function* () {
    const foundItem = Index[name];

    if (!foundItem) {
      return yield* Effect.fail(new ComponentNotFoundError(name));
    }

    const parsedItem = registryItemSchema.parse(foundItem);

    if (!parsedItem) {
      return yield* Effect.fail(new ComponentNotFoundError(name));
    }

    const fs = yield* FileSystem.FileSystem;

    // Prcess all files in parallel
    const processedFiles = yield* processRegistryFiles(
      parsedItem.files ?? [],
      fs
    );

    const result = {
      ...parsedItem,
      files: processedFiles,
    };

    return result;
  });
};

// Implementation with caching
const makeComponentRegistryService = Effect.gen(function* () {
  // Create a cache that automaticlly handles memoization
  const cache = yield* Cache.make({
    capacity: 100, // Cache up to 100 components
    timeToLive: "10 seconds",
    lookup: (name: string) =>
      pipe(
        getComponentRegistryItem(name)
        // Effect.option // Convert failures to None for cache
      ),
  });

  const getItem = (
    name: string
  ): Effect.Effect<ExtendedRegistryItem | null, RegistryError> =>
    pipe(
      getComponentRegistryItem(name),
      Effect.provide(NodeFileSystem.layer),
      Effect.catchAll(() => Effect.succeed(null))
    );

  const getItemCached = (
    name: string
  ): Effect.Effect<ExtendedRegistryItem | null, RegistryError> =>
    pipe(
      cache.get(name),
      // Effect.map((option) => (option._tag === "Some" ? option.value : null)),
      Effect.catchAll(() =>
        Effect.fail(new ComponentNotFoundError("Component not found"))
      )
    );

  const clearCache = (): Effect.Effect<void> => cache.invalidateAll;

  return ComponentRegistryService.of({
    getItem,
    getItemCached,
    clearCache,
  });
});

// Layer for dependency injection
export const ComponentRegistryServiceLive = Layer.effect(
  ComponentRegistryService,
  makeComponentRegistryService
).pipe(
  Layer.provide(NodeFileSystem.layer) // Provide the Node.js FileSystem implementation
);

// Convenience functions for easier usage
export const getComponentRegistryItemRefined = (name: string) =>
  pipe(
    ComponentRegistryService,
    Effect.flatMap((service) => service.getItem(name))
  );

export const getComponentRegistryItemCachedRefined = (name: string) =>
  pipe(
    ComponentRegistryService,
    Effect.flatMap((service) => service.getItemCached(name))
  );

export const clearRegistryCacheRefined = () =>
  pipe(
    ComponentRegistryService,
    Effect.flatMap((service) => service.clearCache())
  );

// Runtime for executing effects
export const runtime = pipe(
  ComponentRegistryServiceLive,
  Layer.toRuntime,
  Effect.scoped
);
