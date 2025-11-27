import { Input } from "@/registry/pure-ui/ui/input";

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
