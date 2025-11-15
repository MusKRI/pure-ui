import { Textarea } from "@/registry/default/components/ui/textarea";

export function TextareaLargeSizeDemo() {
  return (
    <Textarea
      size="lg"
      placeholder="Type your message here"
      className="max-w-72"
    />
  );
}
