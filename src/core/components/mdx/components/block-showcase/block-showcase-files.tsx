import { Dialog as SheetPrimitive } from "@base-ui-components/react/dialog";

import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { useRef, useState } from "react";
import { cn } from "@/lib/classes";
import { ChevronDown, ChevronRight, Circle } from "lucide-react";

interface Props {
  handleFileChange: (index: number) => void;
  activeFileIndex: number;
  processedFiles: ExtendedPureUIFile[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  showCode: boolean;
}

export function BlockShowcaseFiles({
  handleFileChange,
  activeFileIndex,
  processedFiles,
  containerRef,
  showCode,
}: Props) {
  const [open, setOpen] = useState(false);

  const currentFile = processedFiles[activeFileIndex];

  // get the file name from the path
  const fileName = currentFile?.path?.split("/").pop() || "";

  return (
    <SheetPrimitive.Root
      open={open && showCode}
      onOpenChange={(newOpen) => {
        if (showCode) {
          setOpen(newOpen);
        }
      }}
    >
      <SheetPrimitive.Trigger
        className={cn(
          "px-2 py-1 rounded-md text-sm font-medium flex items-center gap-1",
          showCode && "cursor-pointer hover:bg-secondary"
        )}
      >
        {fileName}
        {showCode && <ChevronDown className="size-4" />}
      </SheetPrimitive.Trigger>
      <SheetPrimitive.Portal container={containerRef}>
        <SheetPrimitive.Popup
          className={cn("absolute top-full left-0 z-50 h-full w-full")}
        >
          <div className="flex flex-col shadow-lg p-3 bg-sidebar border">
            {processedFiles.map((file, index) => {
              const fileName = file.path.split("/").pop() || "";

              return (
                <div
                  key={file.path}
                  className={cn(
                    "tabular-nums py-2 flex items-center hover:text-current cursor-pointer text-sm font-medium",
                    activeFileIndex === index
                      ? "text-foreground"
                      : "text-muted-foreground/70"
                  )}
                  onClick={() => {
                    handleFileChange(index);
                    setOpen(false);
                  }}
                >
                  <span className="mr-2">{index + 1}.</span>
                  {fileName}
                  {activeFileIndex === index && (
                    <Circle className="size-2.5 text-primary fill-primary ml-auto" />
                  )}
                </div>
              );
            })}
          </div>
        </SheetPrimitive.Popup>
      </SheetPrimitive.Portal>
    </SheetPrimitive.Root>
  );
}
