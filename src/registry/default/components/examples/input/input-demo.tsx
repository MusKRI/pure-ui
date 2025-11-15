import { Input } from "@/registry/default/components/ui/input";

export default function InputDemo() {
  return (
    <Input
      type="text"
      placeholder="Enter text"
      aria-label="Enter text"
      className="w-full max-w-sm"
    />
  );
}
