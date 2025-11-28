import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/pure-ui/ui/number-field";
import { Label } from "@/registry/pure-ui/ui/label";

export function NumberFieldFormattingDemo() {
  return (
    <div className="flex flex-col gap-5">
      <NumberField
        defaultValue={0}
        min={0}
        format={{ currency: "INR", style: "currency" }}
        id="price"
      >
        <NumberFieldScrubArea>
          <Label htmlFor="price" className="cursor-ew-resize">
            Price
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
