import { Effect } from "effect";

export interface ParsedBlockSlug {
  isValidPath: boolean;
  validPath?: string;
}

export const parseBlockSlug = (slug: string[]) =>
  Effect.suspend<ParsedBlockSlug, never, never>(() => {
    return Effect.succeed({
      isValidPath: true,
      validPath: `/blocks/${slug.join("/")}.mdx`,
    });
  });
