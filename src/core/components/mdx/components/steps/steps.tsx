import React from "react";
import { cn } from "@/lib/classes";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  return <div className={cn("relative mt-3", className)}>{children}</div>;
}
