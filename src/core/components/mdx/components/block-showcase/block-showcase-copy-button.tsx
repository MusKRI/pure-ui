"use client";

import { useEffect, useState } from "react";

import { CopyIcon } from "@/core/icons/pack1";

import { cn } from "@/lib/classes";
import { useCopyToClipboard } from "@/core/hooks/use-copy-to-clipboard";
import { Button } from "@/registry/pure-ui/ui/button";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/pure-ui/ui/tooltip";

export function BlockShowcaseCopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            data-slot="copy-button"
            size="icon"
            variant={variant}
            className={cn("size-9 sm:size-8", className)}
            onClick={() => {
              copyToClipboard(value);
            }}
            {...props}
          />
        }
      >
        <span className="sr-only">Copy</span>
        {isCopied ? (
          <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <CopyIcon className="size-3.5" />
        )}
      </TooltipTrigger>
      <TooltipPopup>{isCopied ? "Copied" : "Copy to Clipboard"}</TooltipPopup>
    </Tooltip>
  );
}
