import { Checkbox } from "@/registry/pure-ui/ui/checkbox";

export function CheckboxDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox />
      <span>Enable Notifications</span>
    </label>
  );
}
