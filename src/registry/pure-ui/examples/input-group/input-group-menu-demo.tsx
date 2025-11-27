import { ChevronDownIcon, MoreHorizontal } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/pure-ui/ui/input-group";

import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/pure-ui/ui/menu";

export function InputGroupMenuDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Enter file name" />
        <InputGroupAddon align="inline-end">
          <Menu>
            <MenuTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="More"
                  size="icon-xs"
                />
              }
            >
              <MoreHorizontal />
            </MenuTrigger>
            <MenuPopup align="end">
              <MenuItem>Settings</MenuItem>
              <MenuItem>Copy path</MenuItem>
              <MenuItem>Open location</MenuItem>
            </MenuPopup>
          </Menu>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="[--radius:1rem]">
        <InputGroupInput placeholder="Enter search query" />
        <InputGroupAddon align="inline-end">
          <Menu>
            <MenuTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  className="pr-1.5! text-xs active:scale-100"
                />
              }
            >
              Search In... <ChevronDownIcon className="size-3" />
            </MenuTrigger>
            <MenuPopup align="end" className="[--radius:0.95rem]">
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Blog Posts</MenuItem>
              <MenuItem>Changelog</MenuItem>
            </MenuPopup>
          </Menu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
