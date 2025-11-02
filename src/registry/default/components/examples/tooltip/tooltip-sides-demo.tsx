import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/default/components/ui/tooltip";

export const TooltipSidesDemo = () => {
  const sides = [
    "top",
    "right",
    "bottom",
    "left",
    "inline-start",
    "inline-end",
  ] as const;

  return (
    <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
      {sides.map((side) => {
        return (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-border/40 bg-secondary/50 hover:bg-secondary cursor-pointer">
                <span className="text-secondary-foreground text-sm capitalize">
                  {side.replace("-", " ")}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipPopup showArrow side={side} sideOffset={8}>
              <p className="text-xs text-muted-foreground">
                8:51 PM - Oct 22, 2025
              </p>
            </TooltipPopup>
          </Tooltip>
        );
      })}
    </div>
  );
};
