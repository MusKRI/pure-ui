import { Switch } from "@/registry/default/components/ui/switch";
import { Label } from "@/registry/default/components/ui/label";

export function SwitchWithLabel() {
  return (
    <Label className="cursor-pointer">
      <Switch />
      <span>Enable notifications</span>
    </Label>
  );
}
