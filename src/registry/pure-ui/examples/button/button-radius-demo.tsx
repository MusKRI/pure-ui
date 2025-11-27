import { Button } from "@/registry/pure-ui/ui/button";

export function ButtonRadiusDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button radius="none">Pure UI Button</Button>
      <Button radius="sm">Pure UI Button</Button>
      <Button radius="default">Pure UI Button</Button>
      <Button radius="lg">Pure UI Button</Button>
      <Button radius="xl">Pure UI Button</Button>
      <Button radius="full">Pure UI Button</Button>
    </div>
  );
}
