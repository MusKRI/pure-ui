import { ChevronDown } from "lucide-react";

import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/pure-ui/ui/popover";
import { Button } from "@/registry/pure-ui/ui/button";
import { Input } from "@/registry/pure-ui/ui/input";

export const PopoverDemo = () => {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="default" size="sm" />}>
        <span>Open Popover</span>
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
          <Input placeholder="Enter your email" type="email" />
          <Button className="w-full" variant="default">
            Submit
          </Button>
        </div>
      </PopoverPopup>
    </Popover>
  );
};
