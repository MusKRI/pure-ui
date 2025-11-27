"use client";

import { useState } from "react";
import { Switch } from "@/registry/pure-ui/ui/switch";
import { Label } from "@/registry/pure-ui/ui/label";

export function SwitchControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Label className="cursor-pointer">
        <Switch isInteractive checked={checked} onCheckedChange={setChecked} />
        <span>Airplane Mode</span>
      </Label>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Checked: {checked ? "Yes" : "No"}</span>
      </div>
    </div>
  );
}
