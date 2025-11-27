import { Button } from "@/registry/pure-ui/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/pure-ui/ui/button-group";

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
