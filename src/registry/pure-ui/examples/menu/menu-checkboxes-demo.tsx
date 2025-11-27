"use client";

import { useState } from "react";

import { Button } from "@/registry/pure-ui/ui/button";
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuGroup,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
  MenuLabel,
} from "@/registry/pure-ui/ui/menu";

export const MenuCheckboxesDemo = () => {
  const [open, setOpen] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

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
        <MenuSub>
          <MenuSubTrigger>Appearance</MenuSubTrigger>
          <MenuSubPopup>
            <MenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={(checked) => setShowStatusBar(checked)}
              onSelect={(event) => event.preventDefault()}
            >
              Status Bar
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showPanel}
              onCheckedChange={(checked) => setShowPanel(checked)}
              onSelect={(event) => event.preventDefault()}
            >
              Panel
            </MenuCheckboxItem>
          </MenuSubPopup>
        </MenuSub>
      </MenuPopup>
    </Menu>
  );
};
