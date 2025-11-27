import { Input } from "@/registry/pure-ui/ui/input";
import { Label } from "@/registry/pure-ui/ui/label";

export function LabelDemo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        aria-label="Email"
      />
    </div>
  );
}
