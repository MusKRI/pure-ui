import React from "react";
import { cn } from "@/lib/classes";

interface StepProps {
  children: React.ReactNode;
  stepNumber: number;
  title?: string;
  className?: string;
  isLast?: boolean;
}

export function Step({
  children,
  stepNumber,
  title,
  className,
  isLast,
}: StepProps) {
  return (
    <div className={cn("relative flex gap-4", className)}>
      {/* Step indicator with connecting line */}
      <div className="flex flex-col items-center">
        {/* Step number circle */}
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background text-muted-foreground text-sm font-medium shrink-0">
          {stepNumber}
        </div>

        {/* Connecting line */}
        {!isLast && (
          <div className="h-full w-px bg-border bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
        )}
      </div>

      {/* Step content */}
      <div className="flex-1 pb-12">
        {title && (
          <h3 className="mb-2 text-foreground font-mono text-sm md:text-base font-medium tracking-normal">
            {title}
          </h3>
        )}
        <div className="text-sm text-foreground mt-4 -ml-10 md:ml-0">
          {children}
        </div>
      </div>
    </div>
  );
}
