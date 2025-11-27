import { Textarea } from "@/registry/pure-ui/ui/textarea";

export function TextareaSmallSizeDemo() {
  return (
    <Textarea
      size="sm"
      placeholder="Type your message here"
      className="max-w-72"
    />
  );
}
