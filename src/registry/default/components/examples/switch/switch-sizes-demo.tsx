import { Switch } from "@/registry/default/components/ui/switch";

export function SwitchSizesDemo() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <label key={size} className="flex items-center gap-2 cursor-pointer">
          <Switch size={size} />
          <span>Enable Polar Payments</span>
        </label>
      ))}
    </div>
  );
}
