import { BellIcon } from "lucide-react";

import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";
import { Button } from "@/registry/default/components/ui/button";

export const PopoverWithArrowDemo = () => {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" />}>
        <BellIcon aria-label="Notifications" />
      </PopoverTrigger>
      <PopoverPopup showArrow className="w-full" sideOffset={8}>
        <PopoverTitle className="text-base font-medium">
          Notifications
        </PopoverTitle>
        <PopoverDescription className="text-base text-gray-600">
          You are all caught up. Good job!
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
};
