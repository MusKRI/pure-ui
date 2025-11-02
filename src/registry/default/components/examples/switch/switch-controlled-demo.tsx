"use client";

import { useState } from "react";
import { Switch } from "@/registry/default/components/ui/switch";

export function SwitchControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <Switch isInteractive checked={checked} onCheckedChange={setChecked} />
        <span>Airplane Mode</span>
      </label>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Checked: {checked ? "Yes" : "No"}</span>
      </div>
    </div>
  );
}
