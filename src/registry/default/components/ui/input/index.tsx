"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/classes";

const inputStyles = cva(
  [
    // base slot
    `group flex flex-col data-[hidden=true]:hidden`,
    // label slot
    `absolute z-5 pointer-events-none origin-top-left shrink-0 subpixel-antialiased block text-sm text-muted-foreground`,
    // main wrapper slot
  ]
)
