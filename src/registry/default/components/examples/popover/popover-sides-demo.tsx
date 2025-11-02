import { CheckCheck } from "lucide-react";

import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";

export const PopoverSidesDemo = () => {
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
          <Popover key={side}>
            <PopoverTrigger asChild>
              <button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-border/40 bg-secondary/50 hover:bg-secondary cursor-pointer">
                <CheckCheck className="size-3.5 text-secondary-foreground" />
                <span className="text-secondary-foreground text-sm capitalize">
                  {side.replace("-", " ")}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverPopup showArrow side={side} sideOffset={8}>
              <PopoverDescription>Opened 4 times</PopoverDescription>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs ">Luke Andrews</p>
                  <p className="text-xs text-muted-foreground">just now</p>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs ">Brooklyn Simmons</p>
                  <p className="text-xs text-muted-foreground">
                    2d ago, 12:04 PM
                  </p>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs ">Jenny Wilson</p>
                  <p className="text-xs text-muted-foreground">
                    Dec 24, 10:44 AM
                  </p>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <p className="text-xs ">Floyd Miles</p>
                  <p className="text-xs text-muted-foreground">
                    Dec 21, 04:14 PM
                  </p>
                </div>
              </div>
            </PopoverPopup>
          </Popover>
        );
      })}
    </div>
  );
};
