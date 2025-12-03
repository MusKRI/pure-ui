import { Badge } from "@/registry/pure-ui/ui/badge";

export function BadgeOutlineVariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge variant="outline" shape="bar">
        Outline
      </Badge>
    </div>
  );
}
