import { Switch } from "@/registry/default/components/ui/switch";

export function SwitchInteractiveDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Switch isInteractive />
      <span>Enable notifications</span>
    </label>
  );
}
