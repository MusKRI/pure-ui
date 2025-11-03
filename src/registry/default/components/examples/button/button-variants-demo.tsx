import { Button } from "@/registry/default/components/ui/button";

export function ButtonVariantsDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button variant="default">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="destructive-outline">Destructive Outline Button</Button>
    </div>
  );
}
