"use client";

import { useCopyToClipboard } from "@/core/hooks/use-copy-to-clipboard";
import { CopyIcon } from "@/core/icons/pack1";
import { Button } from "@/registry/default/components/ui/button";

type Props = {
  rawContent: string;
};

export const CopyMarkdownClient = ({ rawContent }: Props) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Button
      variant="outline"
      size="xs"
      onClick={() => copyToClipboard(rawContent)}
      className="flex items-center gap-1 text-[13px]"
    >
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
      Copy Page
    </Button>
  );
};
