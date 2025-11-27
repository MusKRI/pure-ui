"use client";

import { useState } from "react";
import { BugIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
} from "@/registry/pure-ui/ui/menu";

export function MenuRadioGroupWithCustomIconDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("top");

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger render={<Button variant="outline" />}>
        <span>Open</span>
      </MenuTrigger>
      <MenuPopup className="w-56" align="center">
        <MenuLabel>My Account</MenuLabel>
        <MenuGroup>
          <MenuItem onSelect={(event) => event.preventDefault()}>
            Profile
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Teams</MenuLabel>
        <MenuRadioGroup
          value={position}
          onValueChange={setPosition}
          activeIcon={<BugIcon className="size-4" />}
        >
          <MenuRadioItem
            value="top"
            onSelect={(event) => event.preventDefault()}
          >
            Top
          </MenuRadioItem>
          <MenuRadioItem
            value="bottom"
            onSelect={(event) => event.preventDefault()}
          >
            Bottom
          </MenuRadioItem>
          <MenuRadioItem
            value="right"
            onSelect={(event) => event.preventDefault()}
          >
            Right
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  );
}
