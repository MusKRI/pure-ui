import { Checkbox } from "@/registry/pure-ui/ui/checkbox";
import { CheckIcon, Map, Settings } from "lucide-react";

export function CheckboxIconsDemo() {
  return (
    <div className="flex flex-col gap-5">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg">
          <CheckIcon />
        </Checkbox>
        <span>Make a choice</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg">
          <Map />
        </Checkbox>
        <span>Would you like to visit?</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox size="lg">
          <Settings />
        </Checkbox>
        <span>Would you like to configure?</span>
      </label>
    </div>
  );
}
