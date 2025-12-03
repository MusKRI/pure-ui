import { Badge } from "@/registry/pure-ui/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge shape="simple" variant="default">
        Badge
      </Badge>
    </div>
  );
}
