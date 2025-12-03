import { Badge } from "@/registry/pure-ui/ui/badge";

export function BadgeDestructiveVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge variant="destructive" shape="bar">
        Destructive
      </Badge>
    </div>
  );
}
