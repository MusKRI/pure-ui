import { Button } from "@/registry/default/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/default/components/ui/button-group";

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}
