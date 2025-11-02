import { ChevronDown } from "lucide-react";

import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/components/ui/popover";
import { Button } from "@/registry/default/components/ui/button";
import { Input } from "@/registry/default/components/ui/input";

export const PopoverDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" size="sm">
          <span>Open Popover</span>
        </Button>
      </PopoverTrigger>
      <PopoverPopup className="min-w-70">
        <div className="mb-4">
          <PopoverTitle className="text-base">
            Subscribe to our newsletter
          </PopoverTitle>
          <PopoverDescription>
            Get weekly updates, new product announcements, and exclusive offers
            delivered to your inbox.
          </PopoverDescription>
        </div>
        <div className="flex flex-col gap-2">
          <Input label="Email" type="email" />
          <Button className="w-full" variant="default" size="sm">
            Submit
          </Button>
        </div>
      </PopoverPopup>
    </Popover>
  );
};
