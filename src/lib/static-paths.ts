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
 * Removes "index" from the path since index.mdx files map to the directory path
 * Also filters to only include docs paths and removes the 'docs' prefix
 * Example:
 * - "docs/index" -> [] (for /docs route)
 * - "docs/get-started" -> ["get-started"]
 * - "docs/installation/nextjs" -> ["installation", "nextjs"]
 * - "components/button" -> (filtered out, not a docs path)
 */
const relativePathToStaticPath = (relativePath: string): StaticPath | null => {
  const parts = relativePath.split("/").filter(Boolean);

  // Only process paths that start with 'docs'
  if (parts[0] !== "docs") {
    return null;
  }

  // Remove 'docs' prefix
  const withoutDocs = parts.slice(1);

  // Remove "index" from the end if present (e.g., ["index"] -> [])
  const filteredParts =
    withoutDocs.length > 0 && withoutDocs[withoutDocs.length - 1] === "index"
      ? withoutDocs.slice(0, -1)
      : withoutDocs;

  return {
    path: filteredParts,
  };
};

/**
 * Generates all static paths by reading .mdx files from the content directory
 * This ensures all actual content files are included, regardless of sidebar configuration
 *
 * @returns Effect that resolves to an array of StaticPath objects
 */
export const generateStaticPaths = (): Effect.Effect<
  readonly StaticPath[],
  DirectoryReadError,
  never
> =>
  Effect.gen(function* () {
    const contentDir = join(process.cwd(), "src/content");

    const entries = yield* readContentDirectory(contentDir);

    const mdxFiles = filterMdxFiles(entries);

    const relativePaths = mdxFiles.map((entry) =>
      fileToRelativePath(entry, contentDir)
    );

    const staticPaths = pipe(
      relativePaths,
      Array.map(relativePathToStaticPath),
      Array.filter((path): path is StaticPath => path !== null), // Filter out nulls
      Array.dedupe // Remove any potential duplicates
    );

    return staticPaths;
  });

/**
 * Helper function to run generateStaticPaths and return a Promise
 * This is convenient for Next.js generateStaticParams which expects a Promise
 *
 * @example
 *
 * export async function generateStaticParams() {
 *   return await getStaticPaths();
 * }
 *  */
export const getStaticPaths = async (): Promise<StaticPath[]> => {
  const paths = await Effect.runPromise(generateStaticPaths());
  // Convert readonly array to mutable array for Next.js compatibility
  return [...paths];
};
