import { Button } from "@/registry/default/components/ui/button";
import { ButtonGroup } from "@/registry/default/components/ui/button-group";
import { Kbd, KbdGroup } from "@/registry/default/components/ui/kbd";
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/components/ui/tooltip";

export function KbdTooltipDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<Button size="sm" variant="outline" />}>
              Save
            </TooltipTrigger>
            <TooltipPopup>
              <div className="flex items-center gap-2">
                Save Changes <Kbd>S</Kbd>
              </div>
            </TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button size="sm" variant="outline" />}>
              Print
            </TooltipTrigger>
            <TooltipPopup>
              <div className="flex items-center gap-2">
                Print Document{" "}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            </TooltipPopup>
          </Tooltip>
        </TooltipProvider>
      </ButtonGroup>
    </div>
  );
}
