import { CheckIcon, PlusIcon } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPopup,
  SelectList,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from "@/registry/pure-ui/ui/select";

const items = [
  { value: "system", label: "System default" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export const SelectFormattingValueDemo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-sm">Raw value</p>

        <Select>
          <SelectTrigger className="min-w-46">
            <SelectValue />
            <SelectIcon>
              <PlusIcon className="size-4" />
            </SelectIcon>
          </SelectTrigger>
          <SelectPopup>
            <SelectList>
              {items.map(({ label, value }) => {
                return (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{label}</SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon className="size-3" />
                    </SelectItemIndicator>
                  </SelectItem>
                );
              })}
            </SelectList>
          </SelectPopup>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm">Formatted value</p>

        <Select items={items}>
          <SelectTrigger className="min-w-46">
            <SelectValue />
            <SelectIcon>
              <PlusIcon className="size-4" />
            </SelectIcon>
          </SelectTrigger>
          <SelectPopup>
            <SelectList>
              {items.map(({ label, value }) => {
                return (
                  <SelectItem key={value} value={value}>
                    <SelectItemText>{label}</SelectItemText>
                    <SelectItemIndicator>
                      <CheckIcon className="size-3" />
                    </SelectItemIndicator>
                  </SelectItem>
                );
              })}
            </SelectList>
          </SelectPopup>
        </Select>
      </div>
    </div>
  );
};
