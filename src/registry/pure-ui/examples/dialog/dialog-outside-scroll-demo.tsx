"use client";

import { useRef } from "react";

import {
  Dialog,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/pure-ui/ui/dialog";

import { Button } from "@/registry/pure-ui/ui/button";

export function DialogOutsideScrollDemo() {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Open</DialogTrigger>
    </Dialog>
  );
}
