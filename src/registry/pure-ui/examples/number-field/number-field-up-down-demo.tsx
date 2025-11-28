import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/pure-ui/ui/number-field";
import { cn } from "@/lib/classes";

export function NumberFieldUpDownDemo() {
  return (
    <div className="flex flex-col gap-5">
      <NumberField defaultValue={0}>
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
            <NumberFieldDecrement />
            <NumberFieldIncrement />
          </div>
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={0}>
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

      <NumberField defaultValue={0}>
        <NumberFieldGroup>
          <div
            className={cn(
              "flex flex-col ml-auto border-r *:data-[slot=number-field-decrement]:flex-1 *:data-[slot=number-field-increment]:flex-1",
              // When decrement is first
              "*:data-[slot=number-field-decrement]:first:rounded-tl-lg *:data-[slot=number-field-decrement]:first:rounded-b-none *:data-[slot=number-field-decrement]:first:border-b *:data-[slot=number-field-increment]:last:rounded-bl-lg *:data-[slot=number-field-increment]:last:rounded-t-none",

              // When increment is last
              "*:data-[slot=number-field-increment]:first:rounded-tl-lg *:data-[slot=number-field-increment]:first:rounded-b-none *:data-[slot=number-field-increment]:first:border-b *:data-[slot=number-field-decrement]:last:rounded-bl-lg *:data-[slot=number-field-decrement]:last:rounded-t-none",

              /* Reset all radii */
              "*:rounded-none"
            )}
          >
            <NumberFieldIncrement />
            <NumberFieldDecrement />
          </div>
          <NumberFieldInput className="text-right py-3" />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={0}>
        <NumberFieldGroup>
          <div
            className={cn(
              "flex flex-col ml-auto border-r *:data-[slot=number-field-decrement]:flex-1 *:data-[slot=number-field-increment]:flex-1",
              // When decrement is first
              "*:data-[slot=number-field-decrement]:first:rounded-tl-lg *:data-[slot=number-field-decrement]:first:rounded-b-none *:data-[slot=number-field-decrement]:first:border-b *:data-[slot=number-field-increment]:last:rounded-bl-lg *:data-[slot=number-field-increment]:last:rounded-t-none",

              // When increment is last
              "*:data-[slot=number-field-increment]:first:rounded-tl-lg *:data-[slot=number-field-increment]:first:rounded-b-none *:data-[slot=number-field-increment]:first:border-b *:data-[slot=number-field-decrement]:last:rounded-bl-lg *:data-[slot=number-field-decrement]:last:rounded-t-none",

              /* Reset all radii */
              "*:rounded-none"
            )}
          >
            <NumberFieldDecrement />
            <NumberFieldIncrement />
          </div>
          <NumberFieldInput className="text-right py-3" />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
