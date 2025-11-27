"use client";

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import { ButtonGroup } from "@/registry/pure-ui/ui/button-group";
import {
  Menu,
  MenuPopup,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/pure-ui/ui/menu";

export function ButtonGroupMenuDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Follow</Button>
      <Menu>
        <MenuTrigger render={<Button variant="outline" className="pl-2!" />}>
          <ChevronDownIcon />
        </MenuTrigger>
        <MenuPopup align="end" className="[--radius:1rem]">
          <MenuGroup>
            <MenuItem>
              <VolumeOffIcon />
              Mute Conversation
            </MenuItem>
            <MenuItem>
              <CheckIcon />
              Mark as Read
            </MenuItem>
            <MenuItem>
              <AlertTriangleIcon />
              Report Conversation
            </MenuItem>
            <MenuItem>
              <UserRoundXIcon />
              Block User
            </MenuItem>
            <MenuItem>
              <ShareIcon />
              Share Conversation
            </MenuItem>
            <MenuItem>
              <CopyIcon />
              Copy Conversation
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem className="text-destructive hover:text-destructive">
              <TrashIcon />
              Delete Conversation
            </MenuItem>
          </MenuGroup>
        </MenuPopup>
      </Menu>
    </ButtonGroup>
  );
}
