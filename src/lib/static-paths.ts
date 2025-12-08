import { Array, Effect, pipe, Data } from "effect";
import { readdir } from "fs/promises";
import { join, relative, parse } from "path";

/**
 * Static path configuration type for Next.js generateStaticParams
 */
export interface StaticPath {
  path: string[];
}

export class DirectoryReadError extends Data.TaggedError("DirectoryReadError")<{
  path: string;
  cause: unknown;
}> {}

/**
 * Recursively reads directory contents and filters for .mdx files
 */
const readContentDirectory = (contentDir: string) =>
  Effect.tryPromise({
    try: () =>
      readdir(contentDir, {
        recursive: true,
        withFileTypes: true,
      }) as Promise<Array<import("fs").Dirent>>,
    catch: (cause) =>
      new DirectoryReadError({
        path: contentDir,
        cause,
      }),
  });

/**
 * Filters for .mdx files only
 */
const filterMdxFiles = (
  entries: Array<import("fs").Dirent>
): Array<import("fs").Dirent> =>
  entries.filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"));

/**
 * Converts a file path to a relative path from the content directory
 * and removes the .mdx extension
 * Example: "src/content/docs/index.mdx" -> "docs/index.mdx" -> "docs/index"
 */
const fileToRelativePath = (
  entry: import("fs").Dirent,
  contentDir: string
): string => {
  const fullPath = join(entry.parentPath || contentDir, entry.name);
  const relativePath = relative(contentDir, fullPath);

  // Normalize path separators to forward slashes for URLs
  const normalizedPath = relativePath.replace(/\\/g, "/");

  const { dir, name } = parse(normalizedPath);
  return dir ? `${dir}/${name}` : name;
};

/**
 * Converts a relative file path to a Next.js static path array
 * Filters to only include paths with the specified prefix and removes the prefix
 * Removes "index" from the path since index.mdx files map to the directory path
 *
 * @param relativePath - The relative path from content directory (e.g., "docs/index", "blocks/calendar")
 * @param prefix - The content type prefix to filter by (e.g., "docs", "blocks")
 * @returns StaticPath object or null if path doesn't match the prefix
 *
 * Examples for prefix "docs":
 * - "docs/index" -> [] (for /docs route)
 * - "docs/get-started" -> ["get-started"]
 * - "docs/installation/nextjs" -> ["installation", "nextjs"]
 * - "blocks/calendar" -> null (filtered out, not a docs path)
 *
 * Examples for prefix "blocks":
 * - "blocks/calendar" -> ["calendar"]
 * - "blocks/forms" -> ["forms"]
 * - "docs/index" -> null (filtered out, not a blocks path)
 */
const relativePathToStaticPath = (
  relativePath: string,
  prefix: string
): StaticPath | null => {
  const parts = relativePath.split("/").filter(Boolean);

  // Only process paths that start with the specified prefix
  if (parts[0] !== prefix) {
    return null;
  }

  // Remove prefix
  const withoutPrefix = parts.slice(1);

  // Remove "index" from the end if present (e.g., ["index"] -> [])
  const filteredParts =
    withoutPrefix.length > 0 &&
    withoutPrefix[withoutPrefix.length - 1] === "index"
      ? withoutPrefix.slice(0, -1)
      : withoutPrefix;

  return {
    path: filteredParts,
  };
};

/**
 * Generates all static paths by reading .mdx files from the content directory
 * for a specific content type prefix (e.g., "docs", "blocks")
 * This ensures all actual content files are included, regardless of sidebar configuration
 *
 * @param prefix - The content type prefix to filter by (e.g., "docs", "blocks")
 * @returns Effect that resolves to an array of StaticPath objects
 */
const generateStaticPathsForPrefix = (
  prefix: string
): Effect.Effect<readonly StaticPath[], DirectoryReadError, never> =>
  Effect.gen(function* () {
    const contentDir = join(process.cwd(), "src/content");

    const entries = yield* readContentDirectory(contentDir);

    const mdxFiles = filterMdxFiles(entries);

    const relativePaths = mdxFiles.map((entry) =>
      fileToRelativePath(entry, contentDir)
    );

    const staticPaths = pipe(
      relativePaths,
      Array.map((path) => relativePathToStaticPath(path, prefix)),
      Array.filter((path): path is StaticPath => path !== null), // Filter out nulls
      Array.dedupe // Remove any potential duplicates
    );

    return staticPaths;
  });

/**
 * Generates all static paths for docs by reading .mdx files from the content directory
 * This ensures all actual content files are included, regardless of sidebar configuration
 *
 * @returns Effect that resolves to an array of StaticPath objects
 */
export const generateStaticPaths = (): Effect.Effect<
  readonly StaticPath[],
  DirectoryReadError,
  never
> => generateStaticPathsForPrefix("docs");

/**
 * Generates all static paths for blocks by reading .mdx files from the content directory
 * This ensures all actual content files are included, regardless of sidebar configuration
 *
 * @returns Effect that resolves to an array of StaticPath objects
 */
export const generateBlockStaticPaths = (): Effect.Effect<
  readonly StaticPath[],
  DirectoryReadError,
  never
> => generateStaticPathsForPrefix("blocks");

/**
 * Helper function to run generateStaticPaths and return a Promise
 * This is convenient for Next.js generateStaticParams which expects a Promise
 *
 * @example
 *
 * export async function generateStaticParams() {
 *   return await getStaticPaths();
 * }
 */
export const getStaticPaths = async (): Promise<StaticPath[]> => {
  const paths = await Effect.runPromise(generateStaticPaths());
  // Convert readonly array to mutable array for Next.js compatibility
  return [...paths];
};

/**
 * Helper function to run generateBlockStaticPaths and return a Promise
 * This is convenient for Next.js generateStaticParams which expects a Promise
 *
 * @example
 *
 * export async function generateStaticParams() {
 *   return await getBlockStaticPaths();
 * }
 */
export const getBlockStaticPaths = async (): Promise<StaticPath[]> => {
  const paths = await Effect.runPromise(generateBlockStaticPaths());
  // Convert readonly array to mutable array for Next.js compatibility
  return [...paths];
};
