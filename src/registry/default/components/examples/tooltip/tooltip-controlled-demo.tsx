"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/default/components/ui/tooltip";

export const TooltipControlledDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <TooltipProvider>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger>
            <p>Hover me</p>
          </TooltipTrigger>
          <TooltipPopup>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>
      </TooltipProvider>

      <div className="text-muted-foreground text-sm">
        State: {open ? "Open" : "Close"}
      </div>
    </div>
  );
};
