"use client";

import { useState, useTransition } from "react";

import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/registry/default/components/ui/dialog";

import { Button } from "@/registry/default/components/ui/button";
import { Input } from "@/registry/default/components/ui/input";
import { Label } from "@/registry/default/components/ui/label";
import { Spinner } from "@/registry/default/components/ui/spinner";

export const DialogControlledDemo = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, startSubmitting] = useTransition();

  const handleSubmit = async () => {
    startSubmitting(async () => {
      await submitData();
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>
        Edit profile
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="">
              <Label>Name</Label>
              <Input type="text" defaultValue="Krishna" />
            </div>
            <div className="">
              <Label>Username</Label>
              <Input type="text" defaultValue="@krishna" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Cancel
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Spinner size="sm" />}
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogPopup>
    </Dialog>
  );
};

async function submitData() {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
