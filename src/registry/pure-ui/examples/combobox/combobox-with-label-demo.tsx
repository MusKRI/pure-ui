"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxLabel,
} from "@/registry/pure-ui/ui/combobox";

export function ComboboxWithLabelDemo() {
  return (
    <Combobox items={fruits}>
      <div className="max-w-xs w-full">
        <ComboboxLabel>Select a fruit</ComboboxLabel>
        <ComboboxInput placeholder="Select a fruit..." />
      </div>
      <ComboboxPopup>
        <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        <ComboboxList>
          {(fruit: string) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Pineapple",
  "Grape",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Kiwi",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Papaya",
  "Guava",
  "Lychee",
  "Pomegranate",
  "Apricot",
  "Grapefruit",
  "Passionfruit",
];
