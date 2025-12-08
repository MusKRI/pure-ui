"use client";

import { cn } from "@/lib/classes";
import { ExtendedPureUIFile } from "@/lib/registry/component-processor";

interface SourcePreviewProps {
  currentFile: ExtendedPureUIFile;
  showCode: boolean;
}

export function SourcePreview({ currentFile, showCode }: SourcePreviewProps) {
  const code = currentFile.content || "";
  const language = currentFile.detectedLanguage || "text";
  const highlightedCode = currentFile.highlightedCode || "";

  return (
    <div
      className={cn(
        "relative overflow-y-auto font-mono",
        // Progressive masking for horizontal scroll
        showCode && [
          "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-linear-to-r before:from-code before:to-transparent before:z-10 before:pointer-events-none",
          "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-linear-to-l after:from-code after:to-transparent after:z-10 after:pointer-events-none",
        ],
        // Custom scrollbar styles with proper overflow handling
        "[&>pre]:overflow-x-auto [&>pre]:scrollbar-thin [&>pre]:scrollbar-track-transparent [&>pre]:scrollbar-thumb-code-foreground",
        // Responsive text size
        "[&>pre]:text-sm [&>pre]:leading-relaxed",
        // Padding and spacing - increased horizontal padding to account for fade
        "[&>pre]:px-8 [&>pre]:py-4",
        // Preserve whitespace and prevent wrapping
        "[&>pre]:whitespace-pre [&>pre>code]:whitespace-pre",
        // Ensure code block takes full width and doesn't wrap
        "[&>pre>code]:inline-block [&>pre>code]:w-max [&>pre>code]:min-w-full",
        // Tab size for proper indentation
        "[&>pre]:tab-size-4 [&>pre>code]:tab-size-4"
        // Ensure proper theme variable inheritance
        // "[&>pre]:!bg-code [&>pre]:text-code-foreground"
      )}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
}
