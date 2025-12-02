import { Effect, Data } from "effect";
import {
  highlightCode,
  detectLanguageFromFileName,
} from "@/lib/mdx/code-highlighter";
import { type RegistryItemFile } from "@/lib/registry/schemas";

// ============================================================================
// Types
// ============================================================================

export type ExtendedPureUIFile = RegistryItemFile & {
  highlightedCode: string;
  detectedLanguage: string;
};

// ============================================================================
// Errors (using Effect's Data.TaggedError)
// ============================================================================

export class ProcessingError extends Data.TaggedError("ProcessingError")<{
  readonly filePath: string;
  readonly error: unknown;
}> {}

export class ContentMissingError extends Data.TaggedError(
  "ContentMissingError"
)<{
  readonly filePath: string;
}> {}

// ============================================================================
// Processing Functions
// ============================================================================

/**
 * Process a single registry file by detecting language and highlighting code
 */
const processFile = (
  file: RegistryItemFile
): Effect.Effect<ExtendedPureUIFile, ProcessingError | ContentMissingError> =>
  Effect.gen(function* () {
    if (!file.content) {
      yield* Effect.fail(new ContentMissingError({ filePath: file.path }));
    }

    const content = file.content!;
    const detectedLanguage = detectLanguageFromFileName(file.path);

    const highlightedCode = yield* Effect.tryPromise({
      try: () =>
        highlightCode(content, {
          lang: detectedLanguage,
        }),
      catch: (error) =>
        new ProcessingError({
          filePath: file.path,
          error,
        }),
    });

    return {
      ...file,
      highlightedCode,
      detectedLanguage,
    } satisfies ExtendedPureUIFile;
  });

/**
 * Process multiple registry files with controlled concurrency
 */
export const processFiles = (
  files: RegistryItemFile[]
): Effect.Effect<ExtendedPureUIFile[], ProcessingError | ContentMissingError> =>
  Effect.gen(function* () {
    const processedFiles = yield* Effect.all(files.map(processFile), {
      concurrency: 5, // Limited concurrency to prevent resource exhaustion
    });

    return processedFiles;
  });

/**
 * Process files with error collection - continues processing even if some files fail
 */
export const processFilesWithErrorCollection = (
  files: RegistryItemFile[]
): Effect.Effect<{
  successful: ExtendedPureUIFile[];
  errors: Array<{
    file: RegistryItemFile;
    error: ProcessingError | ContentMissingError;
  }>;
}> =>
  Effect.gen(function* () {
    const results = yield* Effect.all(
      files.map((file) =>
        Effect.either(processFile(file)).pipe(
          Effect.map((either) => ({ file, result: either }))
        )
      ),
      { concurrency: 5 } // Limited concurrency to prevent resource exhaustion
    );

    const successful: ExtendedPureUIFile[] = [];
    const errors: Array<{
      file: RegistryItemFile;
      error: ProcessingError | ContentMissingError;
    }> = [];

    for (const { file, result } of results) {
      if (result._tag === "Right") {
        successful.push(result.right);
      } else {
        errors.push({ file, error: result.left });
      }
    }

    return { successful, errors };
  });
