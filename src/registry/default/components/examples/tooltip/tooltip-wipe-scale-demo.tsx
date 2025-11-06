import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/default/components/ui/tooltip";

export const TooltipWipeScaleDemo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p>Hover me</p>
        </TooltipTrigger>
        <TooltipPopup animationPreset="wipeScale">
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  );
};
