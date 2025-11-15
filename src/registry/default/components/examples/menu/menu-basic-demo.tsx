"use client";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  BellIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

import {
  MenuTrigger,
  Menu,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
} from "@/registry/default/components/ui/menu";
import { Button } from "@/registry/default/components/ui/button";

import { cn } from "@/lib/classes";

const MENU_ITEMS = [
  { icon: <UserCircleIcon size={16} />, name: "Profile", shortcut: "⌘P" },
  { icon: <LayoutGridIcon size={16} />, name: "Applications", shortcut: "⌘A" },
  { icon: <Building2 size={16} />, name: "Teams", shortcut: "⌘T" },
  { icon: <BellIcon size={16} />, name: "Notifications", shortcut: "⌘N" },
];

const DANGER_ITEMS = [
  {
    icon: <LogOutIcon size={16} />,
    name: "Sign out",
    className: "text-muted-foreground hover:text-foreground",
  },
  {
    icon: <TrashIcon size={16} />,
    name: "Delete account",
    className:
      "text-red-400 data-highlighted:before:bg-red-500/20! data-highlighted:text-red-400! data-highlighted:before:border-red-400/30!",
  },
];

export const MenuBasicDemo = () => {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button
            variant="ghost"
            className="flex items-center gap-2 active:scale-100"
            size="sm"
          />
        }
      >
        <SettingsIcon size={16} />
        <span className="text-sm">Account settings</span>
      </MenuTrigger>
      <MenuPopup className="w-56">
        {MENU_ITEMS.map(({ icon, name, shortcut }, index) => (
          <MenuItem key={index} className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              {icon}
              <span className="flex-1">{name}</span>
              <MenuShortcut>{shortcut}</MenuShortcut>
            </div>
          </MenuItem>
        ))}
        <MenuSeparator />
        {DANGER_ITEMS.map(({ icon, name, className }, index) => (
          <MenuItem key={index} className={cn("cursor-pointer", className)}>
            <div className="flex items-center gap-3">
              {icon}
              <span>{name}</span>
            </div>
          </MenuItem>
        ))}
      </MenuPopup>
    </Menu>
  );
};
