import { MinusIcon, PlusIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react";

import { Button } from "@/registry/default/components/ui/button";
import { ButtonGroup } from "@/registry/default/components/ui/button-group";

export function ButtonGroupOrientationDemo() {
  return (
    <div className="flex gap-3">
      <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        className="h-fit"
      >
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Zoom controls" orientation="vertical">
        <Button aria-label="Zoom in" size="icon" variant="outline">
          <ZoomInIcon />
        </Button>
        <Button aria-label="Zoom Out" size="icon" variant="outline">
          <ZoomOutIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
