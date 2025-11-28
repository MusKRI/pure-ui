import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/pure-ui/ui/number-field";
import { Label } from "@/registry/pure-ui/ui/label";

export function NumberFieldRangeDemo() {
  return (
    <div className="flex flex-col gap-5">
      <NumberField defaultValue={0} step={20} id="step-20">
        <NumberFieldScrubArea>
          <Label htmlFor="step-20" className="cursor-ew-resize">
            Step 20
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
