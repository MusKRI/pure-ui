import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/default/components/ui/tooltip";

export const TooltipMotionDemo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <p>Hover me</p>
        </TooltipTrigger>
        <TooltipPopup animationPreset="motion">
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  );
};
