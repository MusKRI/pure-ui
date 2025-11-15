import { Input } from "@/registry/default/components/ui/input";

export default function InputLargeDemo() {
  return (
    <Input
      type="text"
      size="lg"
      placeholder="Enter text"
      aria-label="Enter text"
      className="w-full max-w-sm"
    />
  );
}
