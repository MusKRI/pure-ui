import { Input } from "@/registry/default/components/ui/input";

export default function InputSmallDemo() {
  return (
    <Input
      type="text"
      size="sm"
      placeholder="Enter text"
      aria-label="Enter text"
      className="w-full max-w-sm"
    />
  );
}
