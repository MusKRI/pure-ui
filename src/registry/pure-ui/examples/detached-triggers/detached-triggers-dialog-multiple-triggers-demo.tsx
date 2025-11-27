"use client";

import React, { useState } from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";

import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/registry/pure-ui/ui/dialog";
import { Button } from "@/registry/pure-ui/ui/button";

type DialogPayload = {
  player: string;
  description: string;
};

const demoDialog = DialogPrimitive.createHandle<DialogPayload>();

export const DetachedTriggersDialogMultipleTriggersDemo = () => {
  const [open, setOpen] = useState(false);
  const [triggerId, setTriggerId] = useState<string | null>(null);

  return (
    <React.Fragment>
      <div className="flex gap-2 flex-wrap justify-center">
        <DialogTrigger
          handle={demoDialog}
          render={<Button variant="outline" />}
          id="trigger-1"
          payload={{ player: "John", description: "John is a good player" }}
        >
          John
        </DialogTrigger>
        <DialogTrigger
          handle={demoDialog}
          render={<Button variant="outline" />}
          id="trigger-2"
          payload={{ player: "Jane", description: "Jane is a good player" }}
        >
          Jane
        </DialogTrigger>
        <DialogTrigger
          handle={demoDialog}
          render={<Button variant="outline" />}
          id="trigger-3"
          payload={{ player: "Jim", description: "Jim is a good player" }}
        >
          Jim
        </DialogTrigger>

        <Button
          onClick={() => {
            setTriggerId("trigger-1");
            setOpen(true);
          }}
        >
          Open Programmatically
        </Button>
      </div>

      <Dialog
        handle={demoDialog}
        open={open}
        onOpenChange={(isOpen, eventDetails) => {
          setOpen(isOpen);
          setTriggerId(eventDetails?.trigger?.id as string | null);
        }}
        triggerId={triggerId}
      >
        {({ payload }) => {
          const player = payload?.player ?? "";
          const description = payload?.description ?? "";

          return (
            <DialogPopup>
              <DialogTitle>{player}'s Profile</DialogTitle>
              <DialogDescription>{description}</DialogDescription>

              <DialogFooter className="flex justify-end gap-4">
                <DialogClose render={<Button variant="outline" />}>
                  Close
                </DialogClose>
              </DialogFooter>
            </DialogPopup>
          );
        }}
      </Dialog>
    </React.Fragment>
  );
};
