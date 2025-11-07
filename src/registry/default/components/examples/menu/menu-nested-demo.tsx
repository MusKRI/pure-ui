import {
  MenuTrigger,
  Menu,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
} from "@/registry/default/components/ui/menu";
import { Button } from "@/registry/default/components/ui/button";

export const MenuNestedDemo = () => {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 active:scale-100"
          size="sm"
        >
          <span className="text-sm">Song</span>
        </Button>
      </MenuTrigger>
      <MenuPopup
        className="w-44 [&_[data-slot]]:text-xs"
        showArrow
        sideOffset={8}
      >
        <MenuItem className="cursor-pointer">
          <span>Add to Library</span>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger className="cursor-pointer">
            <span>Add to Playlist</span>
          </MenuSubTrigger>
          <MenuSubPopup className="[&_[data-slot]]:text-xs">
            <MenuItem className="cursor-pointer">
              <span>Get Up!</span>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <span>Dancin' Queen</span>
            </MenuItem>
            <MenuItem className="cursor-pointer">
              <span>Shape of You</span>
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="cursor-pointer">
              <span>Thinking Out Loud</span>
            </MenuItem>
          </MenuSubPopup>
        </MenuSub>
        <MenuSeparator />
        <MenuItem className="cursor-pointer">
          <span>Play Next</span>
        </MenuItem>
        <MenuItem className="cursor-pointer">
          <span>Play Last</span>
        </MenuItem>
        <MenuSeparator />
        <MenuItem className="cursor-pointer">
          <span>Favorite</span>
        </MenuItem>
        <MenuItem className="cursor-pointer">
          <span>Share</span>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
};
