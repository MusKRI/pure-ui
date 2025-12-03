import { Badge } from "@/registry/pure-ui/ui/badge";

export function BadgeDefaultVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge variant="default" shape="bar">
        Default
      </Badge>
    </div>
  );
}
