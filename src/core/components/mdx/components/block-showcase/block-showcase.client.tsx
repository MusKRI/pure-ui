"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Collapsible } from "@base-ui-components/react/collapsible";

import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { ExtendedRegistryItem } from "@/lib/registry/process-registry";

import { Index } from "@/registry/pure-ui/__index__";
import { SourcePreview } from "./source-preview";
import { Button } from "@/registry/pure-ui/ui/button";
import { cn } from "@/lib/classes";
import { BlockShowcaseFiles } from "./block-showcase-files";

interface BlockShowcaseClientProps {
  processedFiles: ExtendedPureUIFile[];
  item: ExtendedRegistryItem;
  name: string;
}

export function BlockShowcaseClient({
  processedFiles,
  item,
  name,
}: BlockShowcaseClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const FoundComponent = Index[name];

  const ComponentDemo = useMemo(
    () => FoundComponent?.component,
    [FoundComponent]
  );

  const [showCode, setShowCode] = useState(false);

  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const handleFileTabChange = useCallback((index: number) => {
    setActiveFileIndex(index);
  }, []);

  const currentFile = useMemo(() => {
    return processedFiles?.[activeFileIndex];
  }, [processedFiles, activeFileIndex]);

  return (
    <div className="PureUIBlockShowcase relative mb-12">
      <div className="flex flex-col bg-[#fafafa] dark:bg-muted rounded-2xl shadow-sm border border-border">
        <div className="relative bg-background rounded-2xl rounded-b-none border-b-[0.5px] border-border">
          {ComponentDemo ? (
            <ComponentDemo />
          ) : (
            <div className="text-center p-8">
              <p className="text-white font-medium">Demo Loading...</p>
            </div>
          )}
        </div>

        <Collapsible.Root open={showCode} onOpenChange={setShowCode}>
          <div
            className={cn(
              "border-y border-border border-t-background/70 dark:border-t-background/30 px-3 py-2 bg-sidebar",
              showCode && "sticky top-[64px] z-15"
            )}
            ref={containerRef}
          >
            <div className="flex items-center justify-between relative">
              <BlockShowcaseFiles
                handleFileChange={handleFileTabChange}
                activeFileIndex={activeFileIndex}
                processedFiles={processedFiles}
                containerRef={containerRef}
                showCode={showCode}
              />
              <div className="flex items-center gap-2">
                <Collapsible.Trigger
                  render={
                    <button
                      className={cn(
                        "text-sm px-3 py-1 rounded-full bg-background dark:bg-muted border-[0.5px] border-border transition-all duration-300 ease-out cursor-pointer",
                        showCode ? "shadow-inner" : "shadow-xs"
                      )}
                    />
                  }
                >
                  {showCode ? "Hide Code" : "Show Code"}
                </Collapsible.Trigger>
              </div>
            </div>
          </div>
          <Collapsible.Panel
            keepMounted
            hidden={false}
            className={cn(
              "border-t border-t-background/70 dark:border-t-background/30 rounded-b-2xl overflow-hidden [&[hidden]:not([hidden='until-found'])]:hidden data-closed:h-[100px] h-(--collapsible-panel-height) relative",
              !showCode &&
                "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-full after:z-1 after:pointer-events-none after:backdrop-blur-[1.6px] select-none"
            )}
          >
            <SourcePreview currentFile={currentFile} showCode={showCode} />
          </Collapsible.Panel>
        </Collapsible.Root>
      </div>
    </div>
  );
}
