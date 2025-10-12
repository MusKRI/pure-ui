"use client";

import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
} from "react";
import { useAnchorObserver } from "hooks/use-anchor-observer";

import { Heading } from "@/lib/content-parser";

type TOCItemType = Heading;

export type TableOfContents = TOCItemType[];

const ActiveAnchorContext = createContext<string[]>([]);

/**
 * The estimated active heading ID
 */
export function useActiveAnchor(): string | undefined {
  return useContext(ActiveAnchorContext).at(-1);
}

/**
 * The id of visible anchors
 */
export function useActiveAnchors(): string[] {
  return useContext(ActiveAnchorContext);
}

export interface AnchorProvideProps {
  toc: TableOfContents;
  /**
   * Only accept one active item at most
   *
   * @defaultValue true
   */
  single?: boolean;
  children?: ReactNode;
}

export interface ScrollProviderProps {
  /**
   * Scroll into the view of container when active
   */
  containerRef: RefObject<HTMLElement | null>;

  children?: ReactNode;
}

const ScrollContext = createContext<RefObject<HTMLElement | null>>({
  current: null,
});

export function ScrollProvider({
  containerRef,
  children,
}: ScrollProviderProps): React.ReactElement {
  return (
    <ScrollContext.Provider value={containerRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function AnchorProvider({
  children,
  toc,
  single = true,
}: AnchorProvideProps) {
  const headings = useMemo(() => {
    return toc.map((item) => item.id);
  }, [toc]);

  return (
    <ActiveAnchorContext.Provider value={useAnchorObserver(headings, single)}>
      {children}
    </ActiveAnchorContext.Provider>
  );
}

const TOCContext = createContext<TOCItemType[]>([]);

export function useTOCItems(): TOCItemType[] {
  return useContext(TOCContext);
}

export function TOCProvider({
  children,
  toc,
  ...props
}: React.ComponentProps<typeof AnchorProvider>) {
  return (
    <TOCContext value={toc}>
      <AnchorProvider toc={toc} {...props}>
        {children}
      </AnchorProvider>
    </TOCContext>
  );
}
