import { useCallback, useMemo, useState } from "react";
import { Code2 } from "lucide-react";

import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { ExtendedRegistryItem } from "@/lib/registry/process-registry";
import { ComponentSourceFiles } from "./comopnent-source-files";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { SourcePreview } from "./source-preview";

interface ComponentSourcesProps {
  name: string;
  processedFiles: ExtendedPureUIFile[];
  item: ExtendedRegistryItem;
}

export function ComponentSources({
  name,
  processedFiles,
  item,
}: ComponentSourcesProps) {
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const currentFile = useMemo(() => {
    return processedFiles?.[activeFileIndex];
  }, [processedFiles, activeFileIndex]);

  const handleFileTabChange = useCallback((index: number) => {
    setActiveFileIndex(index);
  }, []);

  return (
    <div className="h-full flex flex-col rounded-2xl overflow-hidden">
      {processedFiles && processedFiles.length > 0 ? (
        <>
          {processedFiles.length > 1 && (
            <ComponentSourceFiles
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
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-8">
            <Code2 className="w-12 h-12 mx-auto mb-3 opacity-50 text-gray-400" />
            <p className="text-foreground font-medium">
              No source code available
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Source code for {name} not found
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
