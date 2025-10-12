import { Array, Effect, pipe } from "effect";

import { pureUISidebarConfig } from "@/core/components/composed/sidebar/data";
import type {
  SidebarGroupItem,
  SidebarItem,
  SidebarLinkItem,
} from "@/types/sidebar.types";

/**
 * Static path configuration type for Next.js generateStaticParams
 */
export interface StaticPath {
  path: string[];
}

/**
 * Extracts the href from a SidebarLinkItem
 */
const extractLinkHref = (item: SidebarLinkItem): string => item.href;

/**
 * Extracts all hrefs from a SidebarGroupItem by mapping over its children
 */
const extractGroupHrefs = (item: SidebarGroupItem): readonly string[] =>
  item.children.map(extractLinkHref);

/**
 * Extracts all hrefs from a single SidebarItem (either link or group)
 * Returns an array of hrefs to handle groups with multiple children
 */
const extractHrefsFromItem = (item: SidebarItem): readonly string[] =>
  item.type === "link" ? [extractLinkHref(item)] : extractGroupHrefs(item);

/**
 * Converts a href path (e.g., "/docs/installation/nextjs") to a StaticPath
 * by removing the leading slash and splitting by "/"
 */
const hrefToStaticPath = (href: string): StaticPath => ({
  path: href.replace(/^\//, "").split("/").filter(Boolean),
});

/**
 * Extracts all hrefs from an array of SidebarItems
 * Flattens the results since groups can have multiple children
 */
const extractAllHrefs = (items: readonly SidebarItem[]): readonly string[] =>
  pipe(
    items,
    Array.flatMap(extractHrefsFromItem),
    Array.dedupe // Remove any potential duplicates
  );

/**
 * Converts an array of hrefs to an array of StaticPaths
 */
const convertHrefsToStaticPaths = (
  hrefs: readonly string[]
): readonly StaticPath[] => hrefs.map(hrefToStaticPath);

/**
 * Generates all static paths from the sidebar configuration
 * This combines docs, components, and any future sections
 *
 * @returns Effect that resolves to an array of StaticPath objects
 */
export const generateStaticPaths = (): Effect.Effect<
  readonly StaticPath[],
  never,
  never
> =>
  pipe(
    Effect.sync(() => {
      // Collect all sidebar items from different sections
      const allSidebarItems = [
        ...pureUISidebarConfig.docs,
        ...pureUISidebarConfig.components,
        // Add future sections here (e.g., blocks, examples, etc.)
      ];
      return allSidebarItems;
    }),
    Effect.map(extractAllHrefs),
    Effect.map(convertHrefsToStaticPaths)
  );

/**
 * Helper function to run generateStaticPaths and return a Promise
 * This is convenient for Next.js generateStaticParams which expects a Promise
 *
 * @example
 * ```ts
 * export async function generateStaticParams() {
 *   return await getStaticPaths();
 * }
 * ```
 */
export const getStaticPaths = (): Promise<readonly StaticPath[]> =>
  Effect.runPromise(generateStaticPaths());
