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
      <NumberField defaultValue={10} min={5} id="minimum">
        <NumberFieldScrubArea>
          <Label htmlFor="minimum" className="cursor-ew-resize">
            Minimum
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={10} max={25} id="maximum">
        <NumberFieldScrubArea>
          <Label htmlFor="maximum" className="cursor-ew-resize">
            Maximum
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={10} min={5} max={25} id="range">
        <NumberFieldScrubArea>
          <Label htmlFor="range" className="cursor-ew-resize">
            Range
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
