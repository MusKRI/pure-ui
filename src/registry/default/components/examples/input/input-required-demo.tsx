import { Input } from "@/registry/default/components/ui/input";

export const InputRequiredDemo = () => {
  return (
    <Input
      required
      className="max-w-xs"
      defaultValue="krishna@kam-ui.com"
      label="Email"
      type="email"
    />
  );
};
