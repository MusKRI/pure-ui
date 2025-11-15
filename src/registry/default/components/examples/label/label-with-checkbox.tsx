import { Checkbox } from "@/registry/default/components/ui/checkbox";
import { Label } from "@/registry/default/components/ui/label";

export function LabelWithCheckbox() {
  return (
    <Label>
      <Checkbox />
      Accept terms and conditions
    </Label>
  );
}
