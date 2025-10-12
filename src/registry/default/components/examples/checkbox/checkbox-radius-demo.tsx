import { Checkbox } from "@/registry/default/components/ui/checkbox";

export function CheckboxRadiusDemo() {
  return (
    <div className="flex flex-col gap-5">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox radius="none" />
        <span>Sharp Corners</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox radius="sm" />
        <span>Subtle Rounding</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox radius="default" />
        <span>Standard Appearance</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox radius="lg" />
        <span>Softer Edges</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox radius="full" />
        <span>Completely Rounded</span>
      </label>
    </div>
  );
}
