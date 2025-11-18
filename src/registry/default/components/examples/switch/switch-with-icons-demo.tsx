import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/registry/default/components/ui/switch";
import { Label } from "@/registry/default/components/ui/label";

export function SwitchWithIconsDemo() {
  return (
    <Label className="cursor-pointer">
      <Switch />
      <span>Dark Mode</span>
    </Label>
  );
}
