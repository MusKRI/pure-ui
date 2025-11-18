import { cn } from "@/lib/classes";
import { Switch } from "@/registry/default/components/ui/switch";
import { Label } from "@/registry/default/components/ui/label";

export function CustomSwitchCardStyleDemo() {
  return (
    <Label
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
        className="p-0 h-4 overflow-visible *:data-[slot=switch-thumb]:size-6 *:data-[slot=switch-thumb]:border-2 *:data-[slot=switch-thumb]:border-border *:data-[slot=switch-thumb]:shadow-lg hover:*:data-[slot=switch-thumb]:border-primary data-checked:*:data-[slot=switch-thumb]:ms-6.5 active:*:data-[slot=switch-thumb]:w-7 data-checked:active:*:data-[slot=switch-thumb]:ml-5"
      />
    </Label>
  );
}
