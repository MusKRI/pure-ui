import { Effect, Data, pipe, Array as EffectArray } from "effect";
import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import * as path from "path";

import {
  RegistryItem,
  RegistryItemFile,
  registryItemSchema,
} from "@/lib/registry/schemas";
import { Index } from "@/registry/pure-ui/__index__";

// ============================================================================
// Types
// ============================================================================

export type ProcessedRegistryFile = RegistryItemFile & {
  content: string;
};

export interface ExtendedRegistryItem extends Omit<RegistryItem, "files"> {
  files: ProcessedRegistryFile[];
}

// ============================================================================
// Errors (using Effect's Data.TaggedError)
// ============================================================================

export class RegistryError extends Data.TaggedError("RegistryError")<{
  readonly message: string;
  readonly cause?: unknown;
}> {}

export class FileNotFoundError extends Data.TaggedError("FileNotFoundError")<{
  readonly filePath: string;
  readonly cause?: unknown;
}> {}

export class ComponentNotFoundError extends Data.TaggedError(
  "ComponentNotFoundError"
)<{
  readonly componentName: string;
}> {}

// ============================================================================
// Utilities
// ============================================================================

/**
 * Process import paths in file content
 */
function processImportPaths(content: string): string {
  return content
    .replace(/@\/registry\/pure-ui\/ui\/([^"']+)/g, "@/components/ui/$1")
    .replace(/@\/registry\/pure-ui\/lib\/([^"']+)/g, "@/lib/$1");
}

/**
 * Read and process a single registry file using Effect
 */
const readFileWithProcessing = (filePath: string, fs: FileSystem.FileSystem) =>
  Effect.gen(function* () {
    const absolutePath = path.join(process.cwd(), "src", filePath);

    const content = yield* fs.readFileString(absolutePath).pipe(
      Effect.mapError(
        (cause) =>
          new FileNotFoundError({
            filePath,
            cause,
          })
      )
    );

    return processImportPaths(content);
  });

/**
 * Process a single registry file
 */
const processRegistryFile = (
  file: RegistryItemFile,
  fs: FileSystem.FileSystem
): Effect.Effect<ProcessedRegistryFile, FileNotFoundError> =>
  pipe(
    readFileWithProcessing(file.path, fs),
    Effect.map((content) => ({ ...file, content }))
  );

/**
 * Process multiple registry files with controlled concurrency
 * Uses Effect's concurrency control (5 concurrent operations max)
 */
const processRegistryFiles = (
  files: readonly RegistryItemFile[],
  fs: FileSystem.FileSystem
): Effect.Effect<ProcessedRegistryFile[], FileNotFoundError> =>
  pipe(
    files,
    EffectArray.map((file) => processRegistryFile(file, fs)),
    Effect.all,
    Effect.withConcurrency(5) // Limited concurrency to prevent resource exhaustion
  );

/**
 * Get a component registry item by name
 * This is the core Effect that loads and processes a component
 */
const getComponentRegistryItem = (name: string) =>
  Effect.gen(function* () {
    const foundItem = Index[name];

    if (!foundItem) {
      return yield* Effect.fail(
        new ComponentNotFoundError({ componentName: name })
      );
    }

    const parsedItem = registryItemSchema.parse(foundItem);

    if (!parsedItem) {
      return yield* Effect.fail(
        new ComponentNotFoundError({ componentName: name })
      );
    }

    const fs = yield* FileSystem.FileSystem;

    const processedFiles = yield* processRegistryFiles(
      parsedItem.files ?? [],
      fs
    );

    return {
      ...parsedItem,
      files: processedFiles,
    } satisfies ExtendedRegistryItem;
  });

// ============================================================================
// Public API
// ============================================================================

/**
 * Get a component registry item by name
 * Simple async function - no caching, no runtime needed
 * Returns null if component not found, throws on other errors
 */
export async function getComponentRegistryItemCached(
  name: string
): Promise<ExtendedRegistryItem | null> {
  const result = await Effect.runPromiseExit(
    pipe(
      getComponentRegistryItem(name),
      Effect.provide(NodeFileSystem.layer),
      Effect.catchAll((error) => {
        // Return null for ComponentNotFoundError, rethrow others
        if (error._tag === "ComponentNotFoundError") {
          return Effect.succeed(null);
        }
        return Effect.fail(error);
      })
    )
  );

  if (result._tag === "Failure") {
    throw result.cause;
  }

  return result.value;
}

// Legacy export for backward compatibility
export const getComponentRegistryItemCachedRefined =
  getComponentRegistryItemCached;
