import { Button } from "@/registry/default/components/ui/button";

export function ButtonSizeDemo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="xs">XS Button</Button>
        <Button size="sm">SM Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">LG Button</Button>
        <Button size="xl">XL Button</Button>
      </div>
    </div>
  );
}
