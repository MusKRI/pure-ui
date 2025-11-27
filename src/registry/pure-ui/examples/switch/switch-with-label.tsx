import { Switch } from "@/registry/pure-ui/ui/switch";
import { Label } from "@/registry/pure-ui/ui/label";

export function SwitchWithLabel() {
  return (
    <Label className="cursor-pointer">
      <Switch />
      <span>Enable notifications</span>
    </Label>
  );
}
