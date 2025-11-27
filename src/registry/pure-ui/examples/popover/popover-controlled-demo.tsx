"use client";

import { useState, useTransition } from "react";

import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/pure-ui/ui/popover";
import { Button } from "@/registry/pure-ui/ui/button";
import { Input } from "@/registry/pure-ui/ui/input";

export const PopoverControlledDemo = () => {
  const [open, setOpen] = useState(false);

  const [isSubmitting, startSubmitting] = useTransition();

  const handleSubmit = () => {
    startSubmitting(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpen(false);
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-muted-foreground text-sm">
        State: {open ? "Open" : "Close"}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button size="sm" radius="none" />}>
          <span>Receive News</span>
        </PopoverTrigger>
        <PopoverPopup>
          <div className="flex flex-col gap-2">
            <Input disabled={isSubmitting} placeholder="Your Email" />
            <Button
              className="w-full"
              size="sm"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </PopoverPopup>
      </Popover>
    </div>
  );
};
