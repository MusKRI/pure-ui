import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/registry/default/components/ui/tooltip";
import { Button } from "@/registry/default/components/ui/button";

export const TooltipOffsetDemo = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline" radius="none">
            Default Offset (4)
          </Button>
        </TooltipTrigger>
        <TooltipPopup sideOffset={4}>
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline" radius="none">
            15 Offset
          </Button>
        </TooltipTrigger>
        <TooltipPopup sideOffset={15}>
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline" radius="none">
            -15 Offset
          </Button>
        </TooltipTrigger>
        <TooltipPopup sideOffset={-15}>
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </div>
  );
};
