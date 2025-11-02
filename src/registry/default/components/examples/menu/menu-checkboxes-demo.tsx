"use client";

import { useState } from "react";

import { Button } from "@/registry/default/components/ui/button";
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
} from "@/registry/default/components/ui/menu";

export const MenuCheckboxesDemo = () => {
  const [open, setOpen] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
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
