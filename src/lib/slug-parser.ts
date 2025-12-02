import { Effect } from "effect";

export const pureUITypes = {
  docs: "Docs",
  components: "Components",
} as const;

export type PureUIType = (typeof pureUITypes)[keyof typeof pureUITypes];

export interface ParsedSlug {
  type: "docs" | "components";
  name?: string;
  isValidPath: boolean;
  validPath?: string;
}

export const parseSlug = (slug: string[]) =>
  Effect.suspend<ParsedSlug, never, never>(() => {
    // Since we're in /docs/[[...path]], empty path means /docs -> /docs/index.mdx
    if (slug.length === 0) {
      return Effect.succeed({
        type: "docs",
        name: "index",
        isValidPath: true,
        validPath: "/docs/index.mdx",
      });
    }

    // Determine type based on first segment
    // If first segment is "components", it's a component page, otherwise it's a docs page
    const [firstSegment] = slug;
    const type: "docs" | "components" =
      firstSegment === "components" ? "components" : "docs";

    // All paths map to /docs/*.mdx in content directory
    // Examples:
    // ["installation"] -> /docs/installation.mdx
    // ["components"] -> /docs/components/index.mdx (directory with index file)
    // ["components", "button"] -> /docs/components/button.mdx
    const path = slug.join("/");

    // If slug is exactly ["components"], it maps to a directory index file
    const validPath =
      slug.length === 1 && firstSegment === "components"
        ? `/docs/components/index.mdx`
        : `/docs/${path}.mdx`;

    return Effect.succeed({
      type,
      isValidPath: true,
      validPath,
    });
  });
