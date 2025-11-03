"use client";

import React from "react";
import { cn } from "@/lib/classes";
import { LANGUAGE_FILE_ICONS } from "@/lib/mdx/file-icons";
import { CodeIcon, FolderIcon } from "@/core/icons/pack1";
import { CopyButton } from "./copy-button";

interface CodeBlockProps extends React.ComponentProps<"pre"> {
  "data-code"?: string;
  "data-language"?: string;
  "data-filename"?: string;
  "data-no-copy"?: true;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const code = props["data-code"];
  const language = props["data-language"];
  const filename = props["data-filename"];
  const noCopy = props["data-no-copy"];

  const filePaths = filename ? filename.split("/") : [];
  const LanguageIcon = language
    ? LANGUAGE_FILE_ICONS.get(language) ?? CodeIcon
    : CodeIcon;

  return (
    <div className="PureCodeBlockWrapper [&+.PureCodeBlockWrapper]:mt-6 mt-4 [.PureInstallationCommands+&]:mt-8 rounded-2xl bg-code border border-border relative bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding">
      {filePaths.length > 0 ? (
        <figcaption className="Files flex items-center justify-between rounded-t-xl bg-secondary px-3 py-2 text-xs text-secondary-foreground">
          <div className="flex items-center gap-x-1">
            {filePaths.map((name, index) => {
              const isLast = index === filePaths.length - 1;
              return (
                <span
                  key={`${name}-${index}`}
                  className={cn(
                    "inline-flex items-center gap-x-0.5 text-sm",
                    isLast ? "text-foreground" : ""
                  )}
                >
                  {filePaths.length > 1 &&
                    (!isLast ? (
                      <FolderIcon className="size-4.5 text-secondary-foreground" />
                    ) : null)}
                  {name}
                  {!isLast && <span>/</span>}
                </span>
              );
            })}
          </div>
          {language && <LanguageIcon className="size-4" />}
        </figcaption>
      ) : null}
      <pre {...props} className={cn(className, `px-4 py-3 rounded-2xl`)}>
        {children}
      </pre>

      {code && !noCopy ? (
        <CopyButton
          value={code}
          className={cn(filePaths.length > 0 && "top-10")}
        />
      ) : null}
    </div>
  );
}
