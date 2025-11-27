import { HelpCircle, InfoIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/pure-ui/ui/input-group";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  TooltipProvider,
} from "@/registry/pure-ui/ui/tooltip";

export function InputGroupTooltipDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Enter password" type="password" />
        <InputGroupAddon align="inline-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Info"
                    size="icon-xs"
                  />
                }
              >
                <InfoIcon />
              </TooltipTrigger>
              <TooltipPopup>
                <p>Password must be at least 8 characters</p>
              </TooltipPopup>
            </Tooltip>
          </TooltipProvider>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Your email address" />
        <InputGroupAddon align="inline-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  />
                }
              >
                <HelpCircle />
              </TooltipTrigger>
              <TooltipPopup>
                <p>We&apos;ll use this to send you notifications</p>
              </TooltipPopup>
            </Tooltip>
          </TooltipProvider>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Enter API key" />
        <InputGroupAddon>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    variant="ghost"
                    aria-label="Help"
                    size="icon-xs"
                  />
                }
              >
                <HelpCircle />
              </TooltipTrigger>
              <TooltipPopup side="left" sideOffset={10}>
                <p>Click for help with API keys</p>
              </TooltipPopup>
            </Tooltip>
          </TooltipProvider>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
