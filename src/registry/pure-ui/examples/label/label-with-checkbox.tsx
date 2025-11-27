import { Checkbox } from "@/registry/pure-ui/ui/checkbox";
import { Label } from "@/registry/pure-ui/ui/label";

export function LabelWithCheckbox() {
  return (
    <Label>
      <Checkbox />
      Accept terms and conditions
    </Label>
  );
}
