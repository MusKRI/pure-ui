import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/default/components/ui/tooltip";

export const TooltipWipeDemo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p>Hover me</p>
        </TooltipTrigger>
        <TooltipPopup animationPreset="wipe">
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  );
};
