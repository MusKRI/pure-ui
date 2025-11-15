import { Textarea } from "@/registry/default/components/ui/textarea";

export function TextareaDisabledDemo() {
  return (
    <Textarea placeholder="Can't type here" disabled className="max-w-72" />
  );
}
