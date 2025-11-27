import { Input } from "@/registry/pure-ui/ui/input";

export function InputTypesDemo() {
  return (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="input-type-email"
          className="text-sm text-muted-foreground"
        >
          Email
        </label>
        <Input
          id="input-type-email"
          placeholder="jane@example.com"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="input-type-number"
          className="text-sm text-muted-foreground"
        >
          Age
        </label>
        <Input id="input-type-number" min={0} placeholder="30" type="number" />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="input-type-password"
          className="text-sm text-muted-foreground"
        >
          Password
        </label>
        <Input
          id="input-type-password"
          placeholder="••••••••"
          type="password"
        />
      </div>
    </div>
  );
}
