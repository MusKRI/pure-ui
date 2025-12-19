"use client";

import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";
import { useState } from "react";

export function RadioGroupControlledDemo() {
  const [value, setValue] = useState("virat");

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup
        value={value}
        onValueChange={(value) => setValue(value as string)}
      >
        <div className="text-sm font-medium">
          Choose your favorite cricket player
        </div>
        <Label>
          <Radio value="virat" /> Virat Kohli
        </Label>
        <Label>
          <Radio value="rohit" /> Rohit Sharma
        </Label>
        <Label>
          <Radio value="sachin" /> Sachin Tendulkar
        </Label>
        <Label>
          <Radio value="dhoni" /> MS Dhoni
        </Label>
      </RadioGroup>

      <span className="text-muted-foreground px-1 text-sm">
        Selected Value: {value}
      </span>
    </div>
  );
}
