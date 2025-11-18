import { Switch } from "@/registry/default/components/ui/switch";
import { Label } from "@/registry/default/components/ui/label";

export function SwitchInteractiveDemo() {
  return (
    <Label className="cursor-pointer">
      <Switch isInteractive />
      <span>Enable notifications</span>
    </Label>
  );
}
