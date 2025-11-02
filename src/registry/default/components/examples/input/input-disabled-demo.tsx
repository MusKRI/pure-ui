import { Input } from "@/registry/default/components/ui/input";

export const InputDisabledDemo = () => {
  return (
    <Input
      disabled
      className="max-w-xs"
      defaultValue="krishna@kam-ui.com"
      label="Email"
      type="email"
    />
  );
};
