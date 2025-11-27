"use client";

import {
  SettingsIcon,
  PenLine,
  Link,
  CirclePlus,
  ListChecks,
  FileCheck,
  NotepadText,
  Presentation,
  Folder,
  FolderSymlink,
  Sparkles,
  FileOutput,
  FileText,
  Sheet,
  Droplet,
  Palette,
  Smile,
  Image,
  Paintbrush,
  Settings,
  Lock,
  Bell,
  Users,
  FileText as FileTextIcon,
  Archive,
  WandSparkles,
  LayoutTemplate,
  Star,
  Save,
  Library,
  HeartPlus,
  EyeOff,
  Layers2,
  Package2,
  Trash2,
} from "lucide-react";

import {
  MenuTrigger,
  Menu,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
} from "@/registry/pure-ui/ui/menu";
import { Button } from "@/registry/pure-ui/ui/button";

export const DropdownMenuBasicDemo = () => {
  return (
    <Menu backdrop="blur">
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
      <MenuPopup className="w-64">
        <MenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <PenLine size={16} color="#7b7a80" />
            <span className="flex-1">Rename</span>
          </div>
        </MenuItem>
        <MenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Link size={16} color="#7b7a80" />
            <span className="flex-1">Copy Link</span>
          </div>
        </MenuItem>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <CirclePlus size={16} color="#7b7a80" />
              <span className="flex-1">Create New</span>
            </div>
          </MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem className="cursor-pointer">
              <ListChecks size={16} color="#7b7a80" />
              <span className="flex-1">List</span>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FileCheck size={16} color="#7b7a80" />
                <span className="flex-1">Doc</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <NotepadText size={16} color="#7b7a80" />
                <span className="flex-1">Form</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Presentation size={16} color="#7b7a80" />
                <span className="flex-1">Whiteboard</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Folder size={16} color="#7b7a80" />
                <span className="flex-1">Folder</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FolderSymlink size={16} color="#7b7a80" />
                <span className="flex-1">Sprint Folder</span>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Sparkles size={16} color="#7b7a80" />
                <span className="flex-1">From Template</span>
              </div>
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger className="cursor-pointer">
                <div className="flex items-center gap-3 w-full">
                  <FileOutput size={16} color="#7b7a80" />
                  <span className="flex-1">Import</span>
                </div>
              </MenuSubTrigger>
              <MenuSubPopup>
                <MenuItem className="cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <FileText size={16} color="#7b7a80" />
                    <span className="flex-1">As PDF</span>
                  </div>
                </MenuItem>
                <MenuItem className="cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <Sheet size={16} color="#7b7a80" />
                    <span className="flex-1">As Excel Sheet</span>
                  </div>
                </MenuItem>
              </MenuSubPopup>
            </MenuSub>
          </MenuSubPopup>
        </MenuSub>
        <MenuSub>
          <MenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <Droplet size={16} color="#7b7a80" />
              <span className="flex-1">Color & Icon</span>
            </div>
          </MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Palette size={16} color="#7b7a80" />
                <span className="flex-1">Custom Color</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Paintbrush size={16} color="#7b7a80" />
                <span className="flex-1">Color Themes</span>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Image size={16} color="#7b7a80" />
                <span className="flex-1">Change Icon</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Smile size={16} color="#7b7a80" />
                <span className="flex-1">Add Emoji</span>
              </div>
            </MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSub>
          <MenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <Settings size={16} color="#7b7a80" />
              <span className="flex-1">Space Settings</span>
            </div>
          </MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Lock size={16} color="#7b7a80" />
                <span className="flex-1">Privacy & Permissions</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Bell size={16} color="#7b7a80" />
                <span className="flex-1">Notifications</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Users size={16} color="#7b7a80" />
                <span className="flex-1">Manage Members</span>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <FileTextIcon size={16} color="#7b7a80" />
                <span className="flex-1">General Settings</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Archive size={16} color="#7b7a80" />
                <span className="flex-1">Archive Space</span>
              </div>
            </MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSub>
          <MenuSubTrigger className="cursor-pointer">
            <div className="flex items-center gap-3 w-full">
              <WandSparkles size={16} color="#7b7a80" />
              <span className="flex-1">Templates</span>
            </div>
          </MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Library size={16} color="#7b7a80" />
                <span className="flex-1">Browse Templates</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Star size={16} color="#7b7a80" />
                <span className="flex-1">Favorite Templates</span>
              </div>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <Save size={16} color="#7b7a80" />
                <span className="flex-1">Save as Template</span>
              </div>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <div className="flex items-center gap-3 w-full">
                <LayoutTemplate size={16} color="#7b7a80" />
                <span className="flex-1">My Templates</span>
              </div>
            </MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <HeartPlus size={16} color="#7b7a80" />
            <span className="flex-1">Add to Favorites</span>
          </div>
        </MenuItem>
        <MenuItem className="cursor-pointer">
          <div className="flex items-start gap-3 w-full">
            <EyeOff size={16} color="#7b7a80" className="shrink-0 h-lh" />
            <div className="flex flex-col">
              <span className="flex-1">Hide Space</span>
              <p className="text-[12px] font-light text-muted-foreground">
                Yo'll retain access to this Space, but it won't show in your
                sidebar
              </p>
            </div>
          </div>
        </MenuItem>
        <MenuSeparator />
        <MenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Layers2 size={16} color="#7b7a80" />
            <span className="flex-1">Duplicate</span>
          </div>
        </MenuItem>
        <MenuItem className="cursor-pointer">
          <div className="flex items-center gap-3 w-full">
            <Package2 size={16} color="#7b7a80" />
            <span className="flex-1">Archive</span>
          </div>
        </MenuItem>
        <MenuItem className="cursor-pointer text-red-500 data-highlighted:text-red-500 data-highlighted:before:bg-red-500/20! data-highlighted:before:border-red-500/10">
          <div className="flex items-center gap-3 w-full">
            <Trash2 size={16} />
            <span className="flex-1">Delete</span>
          </div>
        </MenuItem>
        <MenuSeparator />
        <div className="p-1">
          <Button className="w-full text-sm" size="sm">
            Manage Permissions
          </Button>
        </div>
      </MenuPopup>
    </Menu>
  );
};
