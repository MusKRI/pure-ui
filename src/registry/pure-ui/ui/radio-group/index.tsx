"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/classes";

interface RadioGroupProps extends RadioGroupPrimitive.Props {
  orientation?: "horizontal" | "vertical";
}

function RadioGroup({
  className,
  orientation = "vertical",
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      className={cn(
        "flex",
        className,
        orientation === "horizontal" && "flex-row flex-wrap gap-4",
        orientation === "vertical" && "flex-col gap-4"
      )}
      data-slot="radio-group"
      {...props}
    />
  );
}

interface RadioProps extends RadioPrimitive.Root.Props {}

function Radio({ className, ...props }: RadioProps) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "relative isolate size-5 rounded-full inline-flex items-center justify-center shrink-0 overflow-hidden outline-hidden focus:outline-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-disabled:cursor-not-allowed data-disabled:grayscale data-disabled:scale-100 data-disabled:opacity-50",
        "before:content-[''] before:absolute before:rounded-full before:border-2 before:inset-0 before:border-border not-data-disabled:hover:before:bg-secondary/60",
        "after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-primary data-unchecked:after:scale-50 data-unchecked:after:opacity-0 after:origin-center data-checked:after:scale-100 data-checked:after:opacity-100",
        "before:transition-colors before:will-change-[scale,opacity] transition-transform after:[transition:0.2s_linear] after:[transition-property:opacity,scale,transform]",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        className="relative z-10 flex items-center justify-center data-unchecked:opacity-0 data-checked:opacity-100 data-unchecked:scale-60 data-checked:scale-100 bg-primary-foreground size-2 rounded-full text-primary-foreground [transition-property:opacity,scale] duration-200 ease-out pointer-events-none will-change-[opacity,scale]"
        data-slot="radio-indicator"
      />
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, Radio };
