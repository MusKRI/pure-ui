import { DefaultSpinner } from "@/registry/default/components/ui/spinner";

export function SpinnerSizesDemo() {
  return (
    <div className="flex items-center gap-4">
      <DefaultSpinner size="sm" />
      <DefaultSpinner size="md" />
      <DefaultSpinner size="lg" />
    </div>
  );
}
