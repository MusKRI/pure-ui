"use client";

import { useState, useTransition } from "react";

import {
  Popover,
  PopoverPopup,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";
import { Button } from "@/registry/default/components/ui/button";
import { Input } from "@/registry/default/components/ui/input";

export const PopoverWithFormDemo = () => {
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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={<Button size="sm" radius="none" variant="outline" />}
        >
          <span>Customize</span>
        </PopoverTrigger>
        <PopoverPopup>
          <div className="flex flex-col gap-2">
            <Input defaultValue="100%" size="sm" />
            <Input defaultValue="300px" size="sm" />
            <Input defaultValue="24px" size="sm" />
            <Input defaultValue="30px" size="sm" />
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
