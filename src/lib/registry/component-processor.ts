import { Effect } from "effect";
import {
  highlightCode,
  detectLanguageFromFileName,
} from "@/lib/mdx/code-highlighter";
import { type RegistryItemFile } from "@/lib/registry/schemas";

// Extended file type with highlighted code
export type ExtendedPureUIFile = RegistryItemFile & {
  highlightedCode: string;
  detectedLanguage: string;
};

/**
 * Processing errors that can occur during file processing
 */
export class ProcessingError {
  readonly _tag = "ProcessingError";
  constructor(
    public readonly filePath: string,
    public readonly error: unknown
  ) {}
}

/**
 * Content error when file content is missing
 */
export class ContentMissingError {
  readonly _tag = "ContentMissingError";
  constructor(public readonly filePath: string) {}
}

/**
 * Process a single registry file by detecting language and highlighting code
 */
const processFile = (
  file: RegistryItemFile
): Effect.Effect<ExtendedPureUIFile, ProcessingError | ContentMissingError> =>
  Effect.gen(function* () {
    // Check if content exists
    if (!file.content) {
      yield* Effect.fail(new ContentMissingError(file.path));
    }

    const content = file.content!;
    const detectedLanguage = detectLanguageFromFileName(file.path);

    // Highlight the code with error handling
    const highlightedCode = yield* Effect.tryPromise({
      try: () =>
        highlightCode(content, {
          lang: detectedLanguage,
        }),
      catch: (error) => new ProcessingError(file.path, error),
    });

    return {
      ...file,
      highlightedCode,
      detectedLanguage,
    } satisfies ExtendedPureUIFile;
  });

/**
 * Process multiple registry files efficiently using Effect
 * Files are processed in parallel for optimal performance
 *
 * @param files Array of RegistryItemFile to process
 * @returns Effect that resolves to array of ExtendedPureUIFile
 */
export const processFiles = (
  files: RegistryItemFile[]
): Effect.Effect<ExtendedPureUIFile[], ProcessingError | ContentMissingError> =>
  Effect.gen(function* () {
    // Process all files in parallel using Effect.all
    const processedFiles = yield* Effect.all(files.map(processFile), {
      concurrency: "unbounded",
    });

    return processedFiles;
  });

/**
 * Process files with error collection - continues processing even if some files fail
 * Returns successful results and collects errors separately
 *
 * @param files Array of RegistryItemFile to process
 * @returns Effect that resolves to object with successful files and errors
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
    // Process all files and collect both successes and failures
    const results = yield* Effect.all(
      files.map((file) =>
        Effect.either(processFile(file)).pipe(
          Effect.map((either) => ({ file, result: either }))
        )
      ),
      { concurrency: "unbounded" }
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
