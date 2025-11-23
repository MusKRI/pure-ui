import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/default/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/components/ui/button-group";

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
