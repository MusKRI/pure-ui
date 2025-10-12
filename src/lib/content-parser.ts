import matter from "gray-matter";
import { join } from "path";
import { Effect, Data } from "effect";
import { readFile } from "fs/promises";

export class FileReadError extends Data.TaggedError("FileReadError")<{
  path: string;
  cause: unknown;
}> {}

export class FrontmatterParseError extends Data.TaggedError(
  "FrontmatterParseError"
)<{
  cause: unknown;
}> {}

export type ContentReadError = FileReadError | FrontmatterParseError;

const readFileEffect = (path: string) =>
  Effect.tryPromise({
    try: () => readFile(path, "utf-8"),
    catch: (cause) => new FileReadError({ path, cause }),
  });

const matterEffect = (content: string) =>
  Effect.try({
    try: () => matter(content),
    catch: (cause) => new FrontmatterParseError({ cause }),
  });

export type Heading = {
  id: string;
  title: string;
  level: number;
};

export interface ParsedContent {
  source: string;
  frontmatter: Record<string, any>;
  headings: Array<Heading>;
}

export const getContentByPath = (relativePath: string) =>
  Effect.gen(function* () {
    const contentDir = join(process.cwd(), "src/content");
    const fullPath = join(contentDir, relativePath);

    const fileContent = yield* readFileEffect(fullPath);
    const { content, data } = yield* matterEffect(fileContent);

    // Extract headings for table of contents
    const headings = extractHeadings(content);

    const result: ParsedContent = {
      source: content,
      frontmatter: data,
      headings,
    };

    return result;
  });

function extractHeadings(content: string) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Array<{
    id: string;
    title: string;
    level: number;
  }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .replace(/ /g, "-")
      .replace(/'/g, "")
      .replace(/\?/g, "")
      .replace(/&/g, "and")
      .replace(/[^\w\-]/g, "")
      .toLowerCase();

    headings.push({ id, title, level });
  }

  return headings;
}
