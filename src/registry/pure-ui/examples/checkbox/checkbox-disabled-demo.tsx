import { Checkbox } from "@/registry/pure-ui/ui/checkbox";

export function CheckboxDisabledDemo() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox disabled />
    </label>
  );
}
