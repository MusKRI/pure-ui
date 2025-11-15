import { Input } from "@/registry/default/components/ui/input";

export default function InputDisabledDemo() {
  return (
    <Input
      type="text"
      placeholder="Disabled"
      disabled
      aria-label="Disabled"
      className="w-full max-w-sm"
    />
  );
}
