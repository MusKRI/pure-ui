import { Input } from "@/registry/default/components/ui/input";

export const InputReadOnlyDemo = () => {
  return (
    <Input
      readOnly
      className="max-w-xs"
      defaultValue="krishna@kam-ui.com"
      label="Email"
      type="email"
      variant="faded"
    />
  );
};
