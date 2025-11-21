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
} from "@/registry/default/components/ui/dialog";

import { Button } from "@/registry/default/components/ui/button";

export function DialogOutsideScrollDemo() {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Open</DialogTrigger>
    </Dialog>
  );
}
