"use client";

import { Input } from "@/registry/default/components/ui/input";
import React from "react";

export function InputControlledDemo() {
  const [value, setValue] = React.useState("base-ui.com");

  return (
    <div className="flex w-80 flex-col gap-2">
      <Input
        aria-label="Domain"
        placeholder="domain"
        value={value}
        onValueChange={(value) => setValue(value)}
      />
      <span className="text-muted-foreground px-1 text-sm">
        https://{value || "your-domain"}
      </span>
    </div>
  );
}
