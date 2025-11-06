import {
  DefaultSpinner,
  GradientSpinner,
  BarsSpinner,
  WaveSpinner,
  DotsSpinner,
} from "@/registry/default/components/ui/spinner";

export function SpinnerVariantsDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col gap-2">
        <DefaultSpinner />
        <p className="text-sm text-muted-foreground">Default</p>
      </div>
      <div className="flex flex-col gap-2">
        <GradientSpinner />
        <p className="text-sm text-muted-foreground">Gradient</p>
      </div>
      <div className="flex flex-col gap-2">
        <BarsSpinner />
        <p className="text-sm text-muted-foreground">Bars</p>
      </div>
      <div className="flex flex-col gap-2">
        <WaveSpinner />
        <p className="text-sm text-muted-foreground">Wave</p>
      </div>
      <div className="flex flex-col gap-2">
        <DotsSpinner />
        <p className="text-sm text-muted-foreground">Dots</p>
      </div>
    </div>
  );
}
