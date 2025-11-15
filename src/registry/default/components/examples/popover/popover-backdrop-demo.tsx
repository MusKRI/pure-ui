import { GripHorizontal, Plus } from "lucide-react";

import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";
import { Button } from "@/registry/default/components/ui/button";
import { Switch } from "@/registry/default/components/ui/switch";

export const PopoverBackdropDemo = () => {
  const backdrops = ["opaque", "blur", "transparent"] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => {
        return (
          <Popover key={backdrop} backdrop={backdrop}>
            <PopoverTrigger
              render={<Button size="sm" radius="none" variant="outline" />}
            >
              <span className="text-secondary-foreground text-sm capitalize">
                {backdrop.replace("-", " ")}
              </span>
            </PopoverTrigger>
            <PopoverPopup
              showArrow
              className="p-0 min-w-[280px] w-full"
              sideOffset={8}
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between p-[9px] border-b border-border/50">
                  <p className="text-sm">Visible Columns</p>
                  <p className="text-sm text-blue-500 hover:underline cursor-pointer">
                    Show all
                  </p>
                </div>
                <label className="flex items-center justify-between p-[9px] border-b border-border/50 cursor-pointer hover:bg-secondary/50">
                  <p className="text-sm">Show no status</p>
                  <Switch size="sm" id="show-no-status" />
                </label>
                <div className="flex flex-col gap-1 border-b border-border/50">
                  <label className="flex items-center justify-between p-[9px] cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <GripHorizontal className="size-4 cursor-grab active:cursor-grabbing" />
                      <p className="text-sm">Screening</p>
                    </div>
                    <Switch size="sm" id="screening" />
                  </label>
                  <label className="flex items-center justify-between p-[9px] cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <GripHorizontal className="size-4 cursor-grab active:cursor-grabbing" />
                      <p className="text-sm">Interview</p>
                    </div>
                    <Switch size="sm" id="interview" />
                  </label>
                  <label className="flex items-center justify-between p-[9px] cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <GripHorizontal className="size-4 cursor-grab active:cursor-grabbing" />
                      <p className="text-sm">Invited</p>
                    </div>
                    <Switch size="sm" id="invited" />
                  </label>
                  <label className="flex items-center justify-between p-[9px] cursor-pointer hover:bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <GripHorizontal className="size-4 cursor-grab active:cursor-grabbing" />
                      <p className="text-sm">Rejected</p>
                    </div>
                    <Switch size="sm" id="rejected" />
                  </label>
                </div>
                <button className="flex items-center gap-2 p-[9px] cursor-pointer w-full hover:bg-secondary/50 rounded-b-lg">
                  <Plus className="size-4" />
                  <p className="text-sm">Create new stage</p>
                </button>
              </div>
            </PopoverPopup>
          </Popover>
        );
      })}
    </div>
  );
};
