import * as React from "react";
import { MDXComponents } from "mdx/types";

import { cn } from "@/lib/classes";

import { CodeIcon, SourceCodeIcon } from "@/core/icons/pack1";

// Components
import { CodeBlock } from "./components/code-block";
import { ComponentShowcase } from "./components/component-showcase";
import { MagicLink } from "./components/magic-link";
import { LinkedCard } from "./components/linked-card";
import { ColorCard } from "./components/color-card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/mdx-tabs";
import { InstallationCommands } from "./components/installation-commands";
import { ComponentCodePreview } from "./components/component-code-preview";

// Blocks
import { BlockShowcase } from "./components/block-showcase";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "PureH1 font-chillax mt-8 mb-6 scroll-m-24 text-3xl font-bold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => {
    return (
      <h2
        id={props.children
          ?.toString()
          .replace(/ /g, "-")
          .replace(/'/g, "")
          .replace(/\?/g, "")
          .replace(/&/g, "and")
          .replace(/[^\w\-]/g, "")
          .toLowerCase()}
        className={cn(
          "PureH2 font-chillax mt-12 scroll-m-24 text-2xl font-[560] tracking-tight",
          className
        )}
        {...props}
      />
    );
  },
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      id={props.children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .replace(/&/g, "and")
        .replace(/[^\w\-]/g, "")
        .toLowerCase()}
      className={cn(
        "PureH3 font-chillax mt-6 mb-4 scroll-m-24 text-lg font-[560] tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn(
        "PureH4 font-chillax mt-10 mb-3 scroll-m-24 text-lg font-medium tracking-tight [.PureUIBlockShowcase+&]:mt-24",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn(
        "PureH5 font-chillax mt-8 mb-3 scroll-m-28 text-base font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn(
        "PureH6 font-mono mt-6 mb-2 scroll-m-28 text-sm font-medium tracking-tight uppercase",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(
        "PureP has-[+_.PureP]:mb-0 [.PureP+&]:mt-2 [.PureCodeBlockWrapper+&]:mt-10 !leading-[1.8] text-pretty text-muted-foreground text-base mb-6 last:mb-0 not-first:mt-6 [.PureUIComponentShowcase+&]:mt-0!",
        className
      )}
      {...props}
    />
  ),
  a: MagicLink,
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("PureStrong font-medium text-foreground", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn(
        "PureUL my-6 ml-6 list-disc space-y-2 [&>li]:mt-2 marker:text-muted-foreground text-muted-foreground text-sm UnorderedList ps-6 in-[.ListItem]:my-[1em]",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className={cn(
        "PureOL my-6 ml-6 list-decimal space-y-2 [&>li]:mt-2 marker:text-muted-foreground marker:font-medium text-muted-foreground text-sm",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("PureLI leading-[2]", className)} {...props} />
  ),
  MultiColumnListWrapper: ({
    className,
    ...props
  }: React.ComponentProps<"div">) => (
    <div
      className={cn(
        "PureUIMultiColumnListWrapper *:[ul]:columns-2 md:*:[ul]:columns-3 *:[ul]:my-4 *:[ul]:p-0 *:[ul]:gap-8 **:[li]:my-1",
        className
      )}
      {...props}
    />
  ),
  pre: CodeBlock,
  LinkedCard,
  ComponentShowcase,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  ColorCard,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn("mt-8 scroll-m-32 font-medium tracking-tight", className)}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="steps [&>h3]:step mb-12 [counter-reset:step] *:[h3]:first:mt-2.5!"
      {...props}
    />
  ),

  InstallationCommands,
  ComponentCodePreview,

  BlockShowcase,

  // Icons
  Code2: SourceCodeIcon,
  Terminal: CodeIcon,
};
