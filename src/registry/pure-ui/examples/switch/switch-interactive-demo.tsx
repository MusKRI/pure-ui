import { Switch } from "@/registry/pure-ui/ui/switch";
import { Label } from "@/registry/pure-ui/ui/label";

export function SwitchInteractiveDemo() {
  return (
    <Label className="cursor-pointer">
      <Switch isInteractive />
      <span>Enable notifications</span>
    </Label>
  );
}
