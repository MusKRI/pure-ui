import { CircleFadingArrowUpIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";

export function ButtonIconDemo() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}
