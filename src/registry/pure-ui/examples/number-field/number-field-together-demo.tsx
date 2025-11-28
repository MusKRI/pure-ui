import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/pure-ui/ui/number-field";

export function NumberFieldTogetherDemo() {
  return (
    <div className="flex flex-col gap-5">
      <NumberField defaultValue={0}>
        <NumberFieldGroup className="[&>[data-slot=number-field-input]+[data-slot=number-field-decrement]]:rounded-none [&>[data-slot=number-field-input]+[data-slot=number-field-increment]]:rounded-none [&>[data-slot=number-field-decrement]+[data-slot=number-field-increment]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-l-none">
          <NumberFieldInput className="text-left" />
          <NumberFieldDecrement />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>

      <NumberField defaultValue={0}>
        <NumberFieldGroup className="[&>[data-slot=number-field-input]+[data-slot=number-field-decrement]]:rounded-none [&>[data-slot=number-field-input]+[data-slot=number-field-increment]]:rounded-none [&>[data-slot=number-field-decrement]+[data-slot=number-field-increment]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-r-lg [&>[data-slot=number-field-increment]+[data-slot=number-field-decrement]]:rounded-l-none">
          <NumberFieldInput className="text-left" />
          <NumberFieldIncrement />
          <NumberFieldDecrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  );
}
