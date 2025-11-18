import { Switch } from "@/registry/default/components/ui/switch";
import { Label } from "@/registry/default/components/ui/label";

export function SwitchSizesDemo() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Label key={size} className="cursor-pointer">
          <Switch size={size} />
          <span>Enable Polar Payments</span>
        </Label>
      ))}
    </div>
  );
}
