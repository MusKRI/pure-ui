import { Switch } from "@/registry/default/components/ui/switch";

export function SwitchWithLabel() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Switch />
      <span>Enable notifications</span>
    </label>
  );
}
