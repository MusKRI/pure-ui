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
        "flex flex-col gap-2",
        className,
        orientation === "horizontal" && "flex-row flex-wrap gap-4",
        orientation === "vertical" && "flex-col"
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
      className={cn(
        "peer relativee flex size-5 cursor-pointer justify-center",
        className
      )}
      {...props}
    />
  );
}
