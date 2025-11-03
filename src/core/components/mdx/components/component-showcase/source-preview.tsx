"use client";

import { cn } from "@/lib/classes";
import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { CopyButton } from "../copy-button";
// import { CopyButton } from "../copy-button";

interface SourcePreviewProps {
  currentFile: ExtendedPureUIFile;
}

export function SourcePreview({ currentFile }: SourcePreviewProps) {
  const code = currentFile.content || "";
  const language = currentFile.detectedLanguage || "text";
  const highlightedCode = currentFile.highlightedCode || "";

  // If no code content, show empty state
  if (!code.trim()) {
    return (
      <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
        No code content available
      </div>
    );
  }

  // For text or no highlighted code, show plain text
  if (language === "text" || !highlightedCode) {
    return (
      <div className="relative group h-full">
        <div className="rounded-xl w-full h-full bg-code border border-border overflow-y-auto backdrop-blur-sm transition-all duration-300 ease-out">
          <div className="relative">
            <div className="absolute top-3 right-3 z-10">
              <CopyButton value={code} />
            </div>
          </div>
          <pre
            className={cn(
              "px-6 py-5 text-[13px] font-mono leading-[1.7] overflow-auto h-full",
              "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border",
              "hover:scrollbar-thumb-muted-foreground/30"
            )}
            style={{
              fontFamily: "var(--font-noto-mono)",
              fontFeatureSettings: '"liga" 0, "calt" 0',
            }}
          >
            <code>{code}</code>
          </pre>
          <div className="h-px bg-linear-to-r from-transparent via-border/40 to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative group h-full">
      <div className="absolute top-3 right-8 z-10">
        <CopyButton value={code} />
      </div>

      <div className="w-full max-h-[600px] overflow-y-auto transition-all duration-300 ease-out">
        <div
          className={cn(
            "relative overflow-y-auto font-mono",
            // Progressive masking for horizontal scroll
            "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-linear-to-r before:from-code before:to-transparent before:z-10 before:pointer-events-none",
            "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-linear-to-l after:from-code after:to-transparent after:z-10 after:pointer-events-none",
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
      </div>
    </div>
  );
}
