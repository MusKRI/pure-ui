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

export const readFileEffect = (path: string) =>
  Effect.tryPromise({
    try: () => readFile(path, "utf-8"),
    catch: (cause) => new FileReadError({ path, cause }),
  });

const matterEffect = (content: string) =>
  Effect.try({
    try: () => matter(content),
    catch: (cause) => new FrontmatterParseError({ cause }),
  });

export interface ParsedBlockContent {
  source: string;
  frontmatter: Record<string, any>;
}

export const getBlockContentByPath = (relativePath: string) =>
  Effect.gen(function* () {
    const contentDir = join(process.cwd(), "src/content");
    const fullPath = join(contentDir, relativePath);

    const fileContent = yield* readFileEffect(fullPath);

    const { content, data } = yield* matterEffect(fileContent);

    const result: ParsedBlockContent = {
      source: content,
      frontmatter: data,
    };

    return result;
  });
