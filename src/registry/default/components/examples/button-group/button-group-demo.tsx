"use client";

import { useState } from "react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterPlusIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";

import {
  Menu,
  MenuGroup,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/default/components/ui/menu";

import { Button } from "@/registry/default/components/ui/button";
import { ButtonGroup } from "@/registry/default/components/ui/button-group";

export function ButtonGroupDemo() {
  const [label, setLabel] = useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="outline">Snooze</Button>

        <Menu>
          <MenuTrigger
            render={
              <Button variant="outline" size="icon" aria-label="More Options" />
            }
          >
            <MoreHorizontalIcon />
          </MenuTrigger>
          <MenuPopup align="end" className="w-52">
            <MenuGroup>
              <MenuItem>
                <MailCheckIcon />
                Mark as Read
              </MenuItem>
              <MenuItem>
                <ArchiveIcon />
                Archive
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem>
                <ClockIcon />
                Snooze
              </MenuItem>
              <MenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </MenuItem>
              <MenuItem>
                <ListFilterPlusIcon />
                Add to List
              </MenuItem>
              <MenuSub>
                <MenuSubTrigger>
                  <TagIcon />
                  Label As...
                </MenuSubTrigger>
                <MenuSubPopup>
                  <MenuRadioGroup value={label} onValueChange={setLabel}>
                    <MenuRadioItem value="personal">Personal</MenuRadioItem>
                    <MenuRadioItem value="work">Work</MenuRadioItem>
                    <MenuRadioItem value="other">Other</MenuRadioItem>
                  </MenuRadioGroup>
                </MenuSubPopup>
              </MenuSub>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuItem className="text-destructive hover:text-destructive">
                <Trash2Icon />
                Trash
              </MenuItem>
            </MenuGroup>
          </MenuPopup>
        </Menu>
      </ButtonGroup>
    </ButtonGroup>
  );
}
