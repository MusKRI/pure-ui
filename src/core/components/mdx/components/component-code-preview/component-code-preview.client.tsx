"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useCallback, useMemo, useRef, useState } from "react";

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
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollY = useMotionValue(0);

  const fadeOpacity = useTransform(scrollY, [0, 15], [0, 1], {
    clamp: true,
  });

  const currentFile = useMemo(() => {
    return processedFiles?.[activeFileIndex];
  }, [processedFiles, activeFileIndex]);

  const handleFileTabChange = useCallback((index: number) => {
    setActiveFileIndex(index);
  }, []);

  // Handle scroll events
  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const scrollTop = e.currentTarget.scrollTop;
      scrollY.set(scrollTop);
    },
    [scrollY]
  );

  return (
    <div
      className="relative border border-border bg-muted mt-3 rounded-xl overflow-hidden"
      style={{
        height: `min(80vh, 900px)`,
      }}
    >
      <div className="h-full flex flex-col">
        {processedFiles && processedFiles.length > 0 && (
          <>
            {processedFiles.length > 1 && (
              <ComponentCodePreviewHeader
                componentSources={processedFiles}
                activeFileIndex={activeFileIndex}
                onFileChange={handleFileTabChange}
              />
            )}

            <MotionConfig
              transition={{
                duration: 0.3,
                ease: [0.55, 0.055, 0.675, 0.19],
              }}
            >
              <div className="flex-1 overflow-y-auto border-t border-border relative -top-px showcase">
                <AnimatePresence mode="wait">
                  {currentFile && (
                    <motion.div
                      key={`${name}-${activeFileIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.55, 0.055, 0.675, 0.19],
                      }}
                      layout
                      className="h-full overflow-y-auto"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <SourcePreview currentFile={currentFile} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </MotionConfig>
          </>
        )}
      </div>
    </div>
  );
}
