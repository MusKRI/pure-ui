import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/default/components/ui/tooltip";

export const TooltipSlideInsideDemo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p>Hover me</p>
        </TooltipTrigger>
        <TooltipPopup animationPreset="slideInside">
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  );
};
