import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/registry/default/components/ui/tooltip";

export const TooltipDemo = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <p>Hover me</p>
      </TooltipTrigger>
      <TooltipPopup>
        <p>Tooltip Content</p>
      </TooltipPopup>
    </Tooltip>
  );
};
