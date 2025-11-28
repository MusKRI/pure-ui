import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/registry/pure-ui/ui/number-field";
import { Label } from "@/registry/pure-ui/ui/label";
import { cn } from "@/lib/classes";

export function NumberFieldWithScrubDemo() {
  return (
    <div className="flex flex-col gap-5">
      <NumberField defaultValue={0} id="marks">
        <NumberFieldScrubArea>
          <Label htmlFor="marks" className="cursor-ew-resize">
            Marks
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={0} id="quantity">
        <NumberFieldScrubArea>
          <Label htmlFor="quantity" className="cursor-ew-resize">
            Quantity
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup className="[&>[data-slot=number-field-input]+[data-slot=number-field-decrement]]:rounded-none [&>[data-slot=number-field-input]+[data-slot=number-field-increment]]:rounded-none [&>[data-slot=number-field-decrement]+[data-slot=number-field-increment]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-l-none">
          <NumberFieldInput className="text-left" />
          <NumberFieldDecrement />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={0} id="price">
        <NumberFieldScrubArea>
          <Label htmlFor="price" className="cursor-ew-resize">
            Price
          </Label>
        </NumberFieldScrubArea>
        <NumberFieldGroup>
          <NumberFieldInput className="text-left py-3" />
          <div
            className={cn(
              "flex flex-col ml-auto border-l *:data-[slot=number-field-decrement]:flex-1 *:data-[slot=number-field-increment]:flex-1",
              // When decrement is first
              "*:data-[slot=number-field-decrement]:first:rounded-tr-lg *:data-[slot=number-field-decrement]:first:rounded-b-none *:data-[slot=number-field-decrement]:first:border-b *:data-[slot=number-field-increment]:last:rounded-br-lg *:data-[slot=number-field-increment]:last:rounded-t-none",

              // When increment is last
              "*:data-[slot=number-field-increment]:first:rounded-tr-lg *:data-[slot=number-field-increment]:first:rounded-b-none *:data-[slot=number-field-increment]:first:border-b *:data-[slot=number-field-decrement]:last:rounded-br-lg *:data-[slot=number-field-decrement]:last:rounded-t-none",

              /* Reset all radii */
              "*:rounded-none"
            )}
          >
            <NumberFieldIncrement />
            <NumberFieldDecrement />
          </div>
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
