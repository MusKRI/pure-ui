import { Label } from "@/registry/pure-ui/ui/label";
import { Radio, RadioGroup } from "@/registry/pure-ui/ui/radio-group";

export function RadioGroupWithDescriptionDemo() {
  return (
    <RadioGroup defaultValue="all">
      <Label className="flex items-start gap-2">
        <Radio value="all" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">All Notifications</span>
          <span className="text-xs text-muted-foreground">
            Receive all notifications including system, marketing, and activity
            alerts.
          </span>
        </div>
      </Label>
      <Label className="flex items-start gap-2">
        <Radio value="mentions" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Only Mentions</span>
          <span className="text-xs text-muted-foreground">
            Get notified only when someone mentions you or replies to your
            posts.
          </span>
        </div>
      </Label>
      <Label className="flex items-start gap-2">
        <Radio value="direct" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Direct Messages</span>
          <span className="text-xs text-muted-foreground">
            Only receive notifications for direct messages.
          </span>
        </div>
      </Label>
      <Label className="flex items-start gap-2">
        <Radio value="none" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">None</span>
          <span className="text-xs text-muted-foreground">
            Do not receive any notifications.
          </span>
        </div>
      </Label>
    </RadioGroup>
  );
}
