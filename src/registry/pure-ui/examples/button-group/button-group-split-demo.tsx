import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/pure-ui/ui/button-group";

export function ButtonGroupSplitDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
