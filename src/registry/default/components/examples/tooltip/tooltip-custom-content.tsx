import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/registry/default/components/ui/tooltip";

export const TooltipCustomContent = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <p>Hover me</p>
      </TooltipTrigger>
      <TooltipPopup>
        <div className="px-1 py-2">
          <div className="text-sm font-bold">Custom Content</div>
          <div className="text-xs">This is a custom tooltip content</div>
        </div>
      </TooltipPopup>
    </Tooltip>
  );
};
