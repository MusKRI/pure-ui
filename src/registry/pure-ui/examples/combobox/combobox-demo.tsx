"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/registry/pure-ui/ui/combobox";

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
  { label: "Blueberry", value: "blueberry" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Papaya", value: "papaya" },
  { label: "Cherry", value: "cherry" },
  { label: "Lemon", value: "lemon" },
  { label: "Lime", value: "lime" },
  { label: "Coconut", value: "coconut" },
  { label: "Pomegranate", value: "pomegranate" },
  { label: "Fig", value: "fig" },
  { label: "Plum", value: "plum" },
];

export function ComboboxDemo() {
  return (
    <Combobox items={items}>
      <div className="max-w-sm w-full">
        <ComboboxInput
          aria-label="Select a item"
          placeholder="Select a item…"
        />
      </div>
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
  );
}
