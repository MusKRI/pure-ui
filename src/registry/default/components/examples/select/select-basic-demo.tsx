import { CheckIcon, ChevronDownIcon, ChevronsUpDownIcon } from "lucide-react";

import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/components/ui/select";

export const food = [
  {
    id: "1",
    value: "pizza",
    label: "Pizza 🍕",
  },
  {
    id: "2",
    value: "burger",
    label: "Burger 🍔",
  },
  {
    id: "3",
    value: "ramen",
    label: "Ramen 🍜",
  },
];

const fonts = [
  { label: "Sans-serif", value: "sans" },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "mono" },
  { label: "Cursive", value: "cursive" },
];

export const SelectBasicDemo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Select items={food}>
        <SelectTrigger>
          <SelectValue placeholder="Select a food" />
          <SelectIcon>
            <ChevronDownIcon className="size-4" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPopup alignItemWithTrigger>
          <SelectList>
            {food.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                <SelectItemText>{label}</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon className="size-3" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </Select>

      <Select items={fonts}>
        <SelectTrigger>
          <SelectValue placeholder="Select a font" />
          <SelectIcon>
            <ChevronsUpDownIcon className="size-4" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPopup>
          <SelectList>
            {fonts.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                <SelectItemText>{label}</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon className="size-3" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </Select>
    </div>
  );
};
