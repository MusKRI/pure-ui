"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { ChevronsUpDownIcon, XIcon } from "lucide-react";

import { Input } from "@/registry/pure-ui/ui/input";
import { cn } from "@/lib/classes";

interface ComboboxProps<Value, Multiple extends boolean | undefined = false>
  extends ComboboxPrimitive.Root.Props<Value, Multiple> {}

function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>
) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
}

interface ComboboxInputProps extends ComboboxPrimitive.Input.Props {
  isClearable?: boolean;
}

function ComboboxInput({
  isClearable = true,
  className,
  ...props
}: ComboboxInputProps) {
  return (
    <div className="relative w-full" data-slot="combobox-input-wrapper">
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        className={cn(className)}
        render={<Input />}
        {...props}
      />
    </div>
  );
}

interface ComboboxTriggerProps extends ComboboxPrimitive.Trigger.Props {}

function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(className)}
      {...props}
    />
  );
}
