"use client";

import { useState } from "react";

import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/pure-ui/ui/number-field";
import { Label } from "@/registry/pure-ui/ui/label";

export function NumberFieldControlledDemo() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <NumberField
        value={value}
        onValueChange={(value) => setValue(value ?? 0)}
        id="controlled"
      >
        <NumberFieldScrubArea>
          <Label htmlFor="controlled" className="cursor-ew-resize">
            Controlled
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <span className="text-muted-foreground px-1 text-sm">Value: {value}</span>
    </div>
  );
}
