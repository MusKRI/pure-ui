"use client";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxValue,
} from "@/registry/pure-ui/ui/combobox";
import { useState } from "react";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

type Item = (typeof items)[number];

export function ComboboxMultipleSelectionDemo() {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  return (
    <div className="flex flex-col gap-5 max-w-xs w-full">
      <Combobox
        value={selectedItems}
        onValueChange={setSelectedItems}
        items={items}
        multiple
      >
        <ComboboxChips>
          <ComboboxValue>
            {(value: Item[]) => (
              <>
                {value?.map((item) => (
                  <ComboboxChip aria-label={item.label} key={item.value}>
                    {item.label}
                  </ComboboxChip>
                ))}
                <ComboboxInput
                  aria-label="Select a item"
                  placeholder={
                    value.length > 0 ? undefined : "Select a item..."
                  }
                />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>

        <ComboboxPopup>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Selected Items:</p>
        <div className="relative bg-muted p-4 rounded-md">
          <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
