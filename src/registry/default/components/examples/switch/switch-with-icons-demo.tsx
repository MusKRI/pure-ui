import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/registry/default/components/ui/switch";

export function SwitchWithIconsDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Switch startContent={<SunIcon />} endContent={<MoonIcon />} />
      <span>Dark Mode</span>
    </label>
  );
}
