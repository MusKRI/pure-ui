import {
  ArchiveIcon,
  EditIcon,
  EllipsisIcon,
  FilesIcon,
  FilmIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react";

import { Button } from "@/registry/pure-ui/ui/button";
import { ButtonGroup } from "@/registry/pure-ui/ui/button-group";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/pure-ui/ui/menu";

export function ButtonGroupBasicDemo() {
  return (
    <ButtonGroup aria-label="File actions">
      <Button variant="outline">
        <FilesIcon />
        Files
      </Button>
      <Button variant="outline">
        <FilmIcon />
        Media
      </Button>
      <Menu>
        <MenuTrigger
          render={<Button aria-label="Menu" size="icon" variant="outline" />}
        >
          <EllipsisIcon className="size-4" />
        </MenuTrigger>
        <MenuPopup align="end">
          <MenuItem>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem>
            <ShareIcon />
            Share
          </MenuItem>
          <MenuItem>
            <TrashIcon />
            Delete
          </MenuItem>
        </MenuPopup>
      </Menu>
    </ButtonGroup>
  );
}
