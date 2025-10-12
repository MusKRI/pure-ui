import { Effect } from "effect";

export const pureUITypes = {
  docs: "Docs",
  components: "Components",
  blocks: "Blocks",
} as const;

export type PureUIType = (typeof pureUITypes)[keyof typeof pureUITypes];

export interface ParsedSlug {
  type: "docs" | "components" | "blocks";
  name?: string;
  isValidPath: boolean;
  validPath?: string;
}

export const parseSlug = (slug: string[]) =>
  Effect.suspend<ParsedSlug, never, never>(() => {
    if (slug.length === 0) {
      return Effect.succeed({
        type: "docs",
        name: "index",
        isValidPath: true,
        validPath: "/docs/index.mdx",
      });
    }

    const [type, ...rest] = slug;

    // Handle docs routes: /docs, /docs/about, /docs/installation, etc.
    if (type === "docs") {
      if (rest.length === 0) {
        return Effect.succeed({
          type: "docs",
          name: "index",
          isValidPath: true,
          validPath: "/docs/index.mdx",
        });
      }

      return Effect.succeed({
        type: "docs",
        isValidPath: true,
        validPath: `/docs/${rest.join("/")}.mdx`,
      });
    }

    // Handle components routes: /components, /components/button, /components/dialog, etc.
    if (type === "components") {
      if (rest.length === 0) {
        return Effect.succeed({
          type: "components",
          name: "index",
          isValidPath: true,
          validPath: "/components/index.mdx",
        });
      }

      return Effect.succeed({
        type: "components",
        isValidPath: true,
        validPath: `/components/${rest.join("/")}.mdx`,
      });
    }

    // TODO: Implement block routes

    return Effect.succeed({
      type: "docs",
      isValidPath: false,
    });
  });
