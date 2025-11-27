import { Separator } from "@/registry/pure-ui/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="max-w-72">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Pure UI</h4>
        <p className="text-sm text-muted-foreground">
          Unstyled, accessible primitives for fast product UI and design
          systems.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Releases</div>
      </div>
    </div>
  );
}
