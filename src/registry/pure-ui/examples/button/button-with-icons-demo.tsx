import {
  GlobeIcon,
  MailIcon,
  PlusIcon,
  Trash2Icon,
  GitBranchIcon,
} from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";

export function ButtonWithIconsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" size="sm">
        <GitBranchIcon />
        New Branch
      </Button>
    </div>
  );
}
