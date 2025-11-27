import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/pure-ui/ui/tooltip";
import { Button } from "@/registry/pure-ui/ui/button";

export const TooltipOffsetDemo = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            render={<Button size="sm" variant="outline" radius="none" />}
          >
            Default Offset (4)
          </TooltipTrigger>
          <TooltipPopup sideOffset={4}>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={<Button size="sm" variant="outline" radius="none" />}
          >
            15 Offset
          </TooltipTrigger>
          <TooltipPopup sideOffset={15}>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={<Button size="sm" variant="outline" radius="none" />}
          >
            -15 Offset
          </TooltipTrigger>
          <TooltipPopup sideOffset={-15}>
            <p>Tooltip Content</p>
          </TooltipPopup>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
