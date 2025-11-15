import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  BellIcon,
  LogOutIcon,
  CheckCheck,
} from "lucide-react";

import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/default/components/ui/menu";
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
      "text-red-400 data-highlighted:before:!bg-red-500/20! data-highlighted:!text-red-400! data-highlighted:before:border-red-400/30!",
  },
];

export const MenuMotionBlurDemo = () => {
  const sides = [
    "top",
    "right",
    "bottom",
    "left",
    "inline-start",
    "inline-end",
  ] as const;

  return (
    <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
      {sides.map((side) => {
        return (
          <Menu key={side}>
            <MenuTrigger
              render={
                <button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-border/40 bg-secondary/50 hover:bg-secondary cursor-pointer" />
              }
            >
              <CheckCheck className="size-3.5 text-secondary-foreground" />
              <span className="text-secondary-foreground text-sm capitalize">
                {side.replace("-", " ")}
              </span>
            </MenuTrigger>
            <MenuPopup
              showArrow
              side={side}
              sideOffset={8}
              animationPreset="motionBlur"
            >
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
                <MenuItem
                  key={index}
                  className={cn("cursor-pointer", className)}
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <span>{name}</span>
                  </div>
                </MenuItem>
              ))}
            </MenuPopup>
          </Menu>
        );
      })}
    </div>
  );
};
