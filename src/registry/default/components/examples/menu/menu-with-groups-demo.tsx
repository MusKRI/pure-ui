"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuCheckboxItem,
} from "@/registry/default/components/ui/menu";
import { Button } from "@/registry/default/components/ui/button";

export function MenuWithGroupsDemo() {
  const [value, setValue] = useState("date");
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuPopup className="w-56" align="center">
        <MenuGroup>
          <MenuGroupLabel>Sort</MenuGroupLabel>
          <MenuRadioGroup
            value={value}
            onValueChange={setValue}
            activeIcon={<CheckIcon className="size-4" />}
          >
            <MenuRadioItem value="date">Date</MenuRadioItem>
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="type">Type</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>

        <MenuSeparator />

        <MenuGroup>
          <MenuGroupLabel>Workspace</MenuGroupLabel>
          <MenuCheckboxItem
            checked={showMinimap}
            onCheckedChange={(checked) => setShowMinimap(checked)}
            onSelect={(event) => event.preventDefault()}
          >
            Minimap
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSearch}
            onCheckedChange={(checked) => setShowSearch(checked)}
            onSelect={(event) => event.preventDefault()}
          >
            Search
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSidebar}
            onCheckedChange={(checked) => setShowSidebar(checked)}
            onSelect={(event) => event.preventDefault()}
          >
            Sidebar
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
