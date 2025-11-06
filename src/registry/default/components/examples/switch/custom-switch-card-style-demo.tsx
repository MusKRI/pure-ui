import { cn } from "@/lib/classes";
import { Switch } from "@/registry/default/components/ui/switch";

export function CustomSwitchCardStyleDemo() {
  return (
    <label
      htmlFor="custom-switch-card-style-demo"
      className="flex items-center gap-6 rounded-lg border-2 p-3 bg-card hover:bg-accent/50 has-data-checked:border-primary/88 has-data-checked:bg-accent/50 cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-4">Enable notifications</p>
        <p className="text-xs text-muted-foreground">
          You can enable or disable notifications at any time.
        </p>
      </div>
      <Switch
        id="custom-switch-card-style-demo"
        defaultChecked
        isInteractive
        classNames={{
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn(
            "size-6 border-2 border-border shadow-lg",
            "group-hover:border-primary",
            "data-checked:ms-6",
            "group-active:w-7 data-checked:group-active:ml-5"
          ),
        }}
      />
    </label>
  );
}
