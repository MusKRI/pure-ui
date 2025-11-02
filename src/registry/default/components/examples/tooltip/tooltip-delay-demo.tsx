import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/registry/default/components/ui/tooltip";
import { Button } from "@/registry/default/components/ui/button";

export const TooltipDelayDemo = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <Tooltip delay={1000}>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline" radius="none">
            Delay Open (1000ms)
          </Button>
        </TooltipTrigger>
        <TooltipPopup>
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>

      <Tooltip closeDelay={1000}>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline" radius="none">
            Delay Close (1000ms)
          </Button>
        </TooltipTrigger>
        <TooltipPopup>
          <p>Tooltip Content</p>
        </TooltipPopup>
      </Tooltip>
    </div>
  );
};
