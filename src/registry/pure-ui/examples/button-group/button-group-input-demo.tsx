import { SearchIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import { ButtonGroup } from "@/registry/pure-ui/ui/button-group";
import { Input } from "@/registry/pure-ui/ui/input";

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
