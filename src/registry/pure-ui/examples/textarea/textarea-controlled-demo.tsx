"use client";

import { useState } from "react";
import { Textarea } from "@/registry/pure-ui/ui/textarea";

export function TextareaControlledDemo() {
  const [value, setValue] = useState("Type your message here");

  return (
    <div className="flex w-80 flex-col gap-2">
      <Textarea
        aria-label="Message"
        placeholder="Type your message here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="text-muted-foreground px-1 text-sm">Value: {value}</span>
    </div>
  );
}
