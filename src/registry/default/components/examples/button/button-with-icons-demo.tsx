import { GlobeIcon, MailIcon, PlusIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/registry/default/components/ui/button";

export function ButtonWithIconsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button radius="full">
        <GlobeIcon />
        Search
      </Button>
      <Button variant="outline" radius="full">
        <PlusIcon />
        Add Member
      </Button>
      <Button variant="secondary" radius="full">
        <MailIcon />
        Email
      </Button>
      <Button variant="destructive" radius="full">
        <Trash2Icon />
        Delete
      </Button>
    </div>
  );
}
