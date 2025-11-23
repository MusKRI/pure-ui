import { SearchIcon } from "lucide-react";

import { Button } from "@/registry/default/components/ui/button";
import { ButtonGroup } from "@/registry/default/components/ui/button-group";
import { Input } from "@/registry/default/components/ui/input";

export function ButtonGroupInputDemo() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}
