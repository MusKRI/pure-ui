import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/pure-ui/ui/tooltip";
import { Button } from "@/registry/pure-ui/ui/button";

export const TooltipDelayDemo = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            delay={1000}
            render={<Button size="sm" variant="outline" radius="none" />}
          >
            Delay Open (1000ms)
          </TooltipTrigger>
          <TooltipPopup>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            closeDelay={1000000000}
            render={<Button size="sm" variant="outline" radius="none" />}
          >
            Delay Close (1000ms)
          </TooltipTrigger>
          <TooltipPopup>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
