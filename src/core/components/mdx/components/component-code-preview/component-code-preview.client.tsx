"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { Tabs } from "@base-ui/react/tabs";

import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { ExtendedRegistryItem } from "@/lib/registry/process-registry";
import { ComponentCodePreviewHeader } from "./component-code-peview-header";
import { SourcePreview } from "../component-showcase/source-preview";

interface ComponentCodePreviewClientProps {
  processedFiles: ExtendedPureUIFile[];
  item: ExtendedRegistryItem;
  name: string;
}

export function ComponentCodePreviewClient({
  processedFiles,
  item,
  name,
}: ComponentCodePreviewClientProps) {
  const [activeTab, setActiveTab] = useState<string>("0");

  // Convert active tab string to index for backward compatibility
  const activeFileIndex = useMemo(() => {
    return parseInt(activeTab) || 0;
  }, [activeTab]);

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  // Generate tab values based on file index
  const tabValues = useMemo(() => {
    return processedFiles.map((_, index) => index.toString());
  }, [processedFiles]);

  if (!processedFiles || processedFiles.length === 0) {
    return null;
  }

  // If there's only one file, render without tabs
  if (processedFiles.length === 1) {
    return (
      <div className="mt-3 rounded-2xl bg-code/50 border border-border relative bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding">
        <div
          className="showcase overflow-hidden rounded-2xl"
          style={{
            maxHeight: "min(80vh, 900px)",
            overflowY: "auto",
          }}
        >
          <SourcePreview currentFile={processedFiles[0]} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative border border-border bg-muted mt-3 rounded-xl overflow-hidden">
      <LayoutGroup>
        <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
          <div className="flex flex-col">
            {/* Header with tabs */}
            <ComponentCodePreviewHeader
              componentSources={processedFiles}
              activeFileIndex={activeFileIndex}
            />

            {/* Content area - Using base UI tabs for proper height management */}
            <div className="border-t border-border relative -top-px">
              <MotionConfig
                transition={{
                  duration: 0.3,
                  ease: [0.55, 0.055, 0.675, 0.19],
                }}
              >
                <AnimatePresence mode="wait">
                  {tabValues.map((tabValue) => {
                    const fileIndex = parseInt(tabValue);
                    const file = processedFiles[fileIndex];

                    return (
                      <Tabs.Panel key={tabValue} value={tabValue} keepMounted>
                        {activeTab === tabValue && (
                          <motion.div
                            key={`${name}-${tabValue}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.55, 0.055, 0.675, 0.19],
                            }}
                            className="relative"
                            style={{ willChange: "transform, opacity" }}
                          >
                            <div
                              className="showcase"
                              style={{
                                maxHeight: "min(80vh, 900px)",
                                overflowY: "auto",
                              }}
                            >
                              <SourcePreview currentFile={file} />
                            </div>
                          </motion.div>
                        )}
                      </Tabs.Panel>
                    );
                  })}
                </AnimatePresence>
              </MotionConfig>
            </div>
          </div>
        </Tabs.Root>
      </LayoutGroup>
    </div>
  );
}
