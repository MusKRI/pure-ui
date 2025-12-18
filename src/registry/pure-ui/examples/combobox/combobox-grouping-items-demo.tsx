"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxSeparator,
} from "@/registry/pure-ui/ui/combobox";
import { Fragment, useState } from "react";

type ColorShade = {
  id: string;
  name: string;
  shade: string;
  hex: string;
  rgb: string;
  family:
    | "Gray"
    | "Red"
    | "Orange"
    | "Amber"
    | "Yellow"
    | "Lime"
    | "Green"
    | "Emerald"
    | "Teal"
    | "Cyan"
    | "Sky"
    | "Blue"
    | "Indigo"
    | "Violet"
    | "Purple"
    | "Fuchsia"
    | "Pink"
    | "Rose";
};

type ColorGroup = {
  value: string;
  items: ColorShade[];
};

const colorsData: ColorShade[] = [
  // Gray family
  {
    family: "Gray",
    id: "gray-50",
    name: "Gray 50",
    shade: "50",
    hex: "#fafafa",
    rgb: "250, 250, 250",
  },
  {
    family: "Gray",
    id: "gray-100",
    name: "Gray 100",
    shade: "100",
    hex: "#f4f4f5",
    rgb: "244, 244, 245",
  },
  {
    family: "Gray",
    id: "gray-200",
    name: "Gray 200",
    shade: "200",
    hex: "#e4e4e7",
    rgb: "228, 228, 231",
  },
  {
    family: "Gray",
    id: "gray-300",
    name: "Gray 300",
    shade: "300",
    hex: "#d4d4d8",
    rgb: "212, 212, 216",
  },
  {
    family: "Gray",
    id: "gray-400",
    name: "Gray 400",
    shade: "400",
    hex: "#a1a1aa",
    rgb: "161, 161, 170",
  },
  {
    family: "Gray",
    id: "gray-500",
    name: "Gray 500",
    shade: "500",
    hex: "#71717a",
    rgb: "113, 113, 122",
  },
  {
    family: "Gray",
    id: "gray-600",
    name: "Gray 600",
    shade: "600",
    hex: "#52525b",
    rgb: "82, 82, 91",
  },
  {
    family: "Gray",
    id: "gray-700",
    name: "Gray 700",
    shade: "700",
    hex: "#3f3f46",
    rgb: "63, 63, 70",
  },
  {
    family: "Gray",
    id: "gray-800",
    name: "Gray 800",
    shade: "800",
    hex: "#27272a",
    rgb: "39, 39, 42",
  },
  {
    family: "Gray",
    id: "gray-900",
    name: "Gray 900",
    shade: "900",
    hex: "#18181b",
    rgb: "24, 24, 27",
  },

  // Red family
  {
    family: "Red",
    id: "red-50",
    name: "Red 50",
    shade: "50",
    hex: "#fef2f2",
    rgb: "254, 242, 242",
  },
  {
    family: "Red",
    id: "red-100",
    name: "Red 100",
    shade: "100",
    hex: "#fee2e2",
    rgb: "254, 226, 226",
  },
  {
    family: "Red",
    id: "red-200",
    name: "Red 200",
    shade: "200",
    hex: "#fecaca",
    rgb: "254, 202, 202",
  },
  {
    family: "Red",
    id: "red-300",
    name: "Red 300",
    shade: "300",
    hex: "#fca5a5",
    rgb: "252, 165, 165",
  },
  {
    family: "Red",
    id: "red-400",
    name: "Red 400",
    shade: "400",
    hex: "#f87171",
    rgb: "248, 113, 113",
  },
  {
    family: "Red",
    id: "red-500",
    name: "Red 500",
    shade: "500",
    hex: "#ef4444",
    rgb: "239, 68, 68",
  },
  {
    family: "Red",
    id: "red-600",
    name: "Red 600",
    shade: "600",
    hex: "#dc2626",
    rgb: "220, 38, 38",
  },
  {
    family: "Red",
    id: "red-700",
    name: "Red 700",
    shade: "700",
    hex: "#b91c1c",
    rgb: "185, 28, 28",
  },
  {
    family: "Red",
    id: "red-800",
    name: "Red 800",
    shade: "800",
    hex: "#991b1b",
    rgb: "153, 27, 27",
  },
  {
    family: "Red",
    id: "red-900",
    name: "Red 900",
    shade: "900",
    hex: "#7f1d1d",
    rgb: "127, 29, 29",
  },

  // Blue family
  {
    family: "Blue",
    id: "blue-50",
    name: "Blue 50",
    shade: "50",
    hex: "#eff6ff",
    rgb: "239, 246, 255",
  },
  {
    family: "Blue",
    id: "blue-100",
    name: "Blue 100",
    shade: "100",
    hex: "#dbeafe",
    rgb: "219, 234, 254",
  },
  {
    family: "Blue",
    id: "blue-200",
    name: "Blue 200",
    shade: "200",
    hex: "#bfdbfe",
    rgb: "191, 219, 254",
  },
  {
    family: "Blue",
    id: "blue-300",
    name: "Blue 300",
    shade: "300",
    hex: "#93c5fd",
    rgb: "147, 197, 253",
  },
  {
    family: "Blue",
    id: "blue-400",
    name: "Blue 400",
    shade: "400",
    hex: "#60a5fa",
    rgb: "96, 165, 250",
  },
  {
    family: "Blue",
    id: "blue-500",
    name: "Blue 500",
    shade: "500",
    hex: "#3b82f6",
    rgb: "59, 130, 246",
  },
  {
    family: "Blue",
    id: "blue-600",
    name: "Blue 600",
    shade: "600",
    hex: "#2563eb",
    rgb: "37, 99, 235",
  },
  {
    family: "Blue",
    id: "blue-700",
    name: "Blue 700",
    shade: "700",
    hex: "#1d4ed8",
    rgb: "29, 78, 216",
  },
  {
    family: "Blue",
    id: "blue-800",
    name: "Blue 800",
    shade: "800",
    hex: "#1e40af",
    rgb: "30, 64, 175",
  },
  {
    family: "Blue",
    id: "blue-900",
    name: "Blue 900",
    shade: "900",
    hex: "#1e3a8a",
    rgb: "30, 58, 138",
  },

  // Green family
  {
    family: "Green",
    id: "green-50",
    name: "Green 50",
    shade: "50",
    hex: "#f0fdf4",
    rgb: "240, 253, 244",
  },
  {
    family: "Green",
    id: "green-100",
    name: "Green 100",
    shade: "100",
    hex: "#dcfce7",
    rgb: "220, 252, 231",
  },
  {
    family: "Green",
    id: "green-200",
    name: "Green 200",
    shade: "200",
    hex: "#bbf7d0",
    rgb: "187, 247, 208",
  },
  {
    family: "Green",
    id: "green-300",
    name: "Green 300",
    shade: "300",
    hex: "#86efac",
    rgb: "134, 239, 172",
  },
  {
    family: "Green",
    id: "green-400",
    name: "Green 400",
    shade: "400",
    hex: "#4ade80",
    rgb: "74, 222, 128",
  },
  {
    family: "Green",
    id: "green-500",
    name: "Green 500",
    shade: "500",
    hex: "#22c55e",
    rgb: "34, 197, 94",
  },
  {
    family: "Green",
    id: "green-600",
    name: "Green 600",
    shade: "600",
    hex: "#16a34a",
    rgb: "22, 163, 74",
  },
  {
    family: "Green",
    id: "green-700",
    name: "Green 700",
    shade: "700",
    hex: "#15803d",
    rgb: "21, 128, 61",
  },
  {
    family: "Green",
    id: "green-800",
    name: "Green 800",
    shade: "800",
    hex: "#166534",
    rgb: "22, 101, 52",
  },
  {
    family: "Green",
    id: "green-900",
    name: "Green 900",
    shade: "900",
    hex: "#14532d",
    rgb: "20, 83, 45",
  },

  // Purple family
  {
    family: "Purple",
    id: "purple-50",
    name: "Purple 50",
    shade: "50",
    hex: "#faf5ff",
    rgb: "250, 245, 255",
  },
  {
    family: "Purple",
    id: "purple-100",
    name: "Purple 100",
    shade: "100",
    hex: "#f3e8ff",
    rgb: "243, 232, 255",
  },
  {
    family: "Purple",
    id: "purple-200",
    name: "Purple 200",
    shade: "200",
    hex: "#e9d5ff",
    rgb: "233, 213, 255",
  },
  {
    family: "Purple",
    id: "purple-300",
    name: "Purple 300",
    shade: "300",
    hex: "#d8b4fe",
    rgb: "216, 180, 254",
  },
  {
    family: "Purple",
    id: "purple-400",
    name: "Purple 400",
    shade: "400",
    hex: "#c084fc",
    rgb: "192, 132, 252",
  },
  {
    family: "Purple",
    id: "purple-500",
    name: "Purple 500",
    shade: "500",
    hex: "#a855f7",
    rgb: "168, 85, 247",
  },
  {
    family: "Purple",
    id: "purple-600",
    name: "Purple 600",
    shade: "600",
    hex: "#9333ea",
    rgb: "147, 51, 234",
  },
  {
    family: "Purple",
    id: "purple-700",
    name: "Purple 700",
    shade: "700",
    hex: "#7e22ce",
    rgb: "126, 34, 206",
  },
  {
    family: "Purple",
    id: "purple-800",
    name: "Purple 800",
    shade: "800",
    hex: "#6b21a8",
    rgb: "107, 33, 168",
  },
  {
    family: "Purple",
    id: "purple-900",
    name: "Purple 900",
    shade: "900",
    hex: "#581c87",
    rgb: "88, 28, 135",
  },

  // Amber family
  {
    family: "Amber",
    id: "amber-50",
    name: "Amber 50",
    shade: "50",
    hex: "#fffbeb",
    rgb: "255, 251, 235",
  },
  {
    family: "Amber",
    id: "amber-100",
    name: "Amber 100",
    shade: "100",
    hex: "#fef3c7",
    rgb: "254, 243, 199",
  },
  {
    family: "Amber",
    id: "amber-200",
    name: "Amber 200",
    shade: "200",
    hex: "#fde68a",
    rgb: "253, 230, 138",
  },
  {
    family: "Amber",
    id: "amber-300",
    name: "Amber 300",
    shade: "300",
    hex: "#fcd34d",
    rgb: "252, 211, 77",
  },
  {
    family: "Amber",
    id: "amber-400",
    name: "Amber 400",
    shade: "400",
    hex: "#fbbf24",
    rgb: "251, 191, 36",
  },
  {
    family: "Amber",
    id: "amber-500",
    name: "Amber 500",
    shade: "500",
    hex: "#f59e0b",
    rgb: "245, 158, 11",
  },
  {
    family: "Amber",
    id: "amber-600",
    name: "Amber 600",
    shade: "600",
    hex: "#d97706",
    rgb: "217, 119, 6",
  },
  {
    family: "Amber",
    id: "amber-700",
    name: "Amber 700",
    shade: "700",
    hex: "#b45309",
    rgb: "180, 83, 9",
  },
  {
    family: "Amber",
    id: "amber-800",
    name: "Amber 800",
    shade: "800",
    hex: "#92400e",
    rgb: "146, 64, 14",
  },
  {
    family: "Amber",
    id: "amber-900",
    name: "Amber 900",
    shade: "900",
    hex: "#78350f",
    rgb: "120, 53, 15",
  },

  // Pink family
  {
    family: "Pink",
    id: "pink-50",
    name: "Pink 50",
    shade: "50",
    hex: "#fdf2f8",
    rgb: "253, 242, 248",
  },
  {
    family: "Pink",
    id: "pink-100",
    name: "Pink 100",
    shade: "100",
    hex: "#fce7f3",
    rgb: "252, 231, 243",
  },
  {
    family: "Pink",
    id: "pink-200",
    name: "Pink 200",
    shade: "200",
    hex: "#fbcfe8",
    rgb: "251, 207, 232",
  },
  {
    family: "Pink",
    id: "pink-300",
    name: "Pink 300",
    shade: "300",
    hex: "#f9a8d4",
    rgb: "249, 168, 212",
  },
  {
    family: "Pink",
    id: "pink-400",
    name: "Pink 400",
    shade: "400",
    hex: "#f472b6",
    rgb: "244, 114, 182",
  },
  {
    family: "Pink",
    id: "pink-500",
    name: "Pink 500",
    shade: "500",
    hex: "#ec4899",
    rgb: "236, 72, 153",
  },
  {
    family: "Pink",
    id: "pink-600",
    name: "Pink 600",
    shade: "600",
    hex: "#db2777",
    rgb: "219, 39, 119",
  },
  {
    family: "Pink",
    id: "pink-700",
    name: "Pink 700",
    shade: "700",
    hex: "#be185d",
    rgb: "190, 24, 93",
  },
  {
    family: "Pink",
    id: "pink-800",
    name: "Pink 800",
    shade: "800",
    hex: "#9d174d",
    rgb: "157, 23, 77",
  },
  {
    family: "Pink",
    id: "pink-900",
    name: "Pink 900",
    shade: "900",
    hex: "#831843",
    rgb: "131, 24, 67",
  },

  // Teal family
  {
    family: "Teal",
    id: "teal-50",
    name: "Teal 50",
    shade: "50",
    hex: "#f0fdfa",
    rgb: "240, 253, 250",
  },
  {
    family: "Teal",
    id: "teal-100",
    name: "Teal 100",
    shade: "100",
    hex: "#ccfbf1",
    rgb: "204, 251, 241",
  },
  {
    family: "Teal",
    id: "teal-200",
    name: "Teal 200",
    shade: "200",
    hex: "#99f6e4",
    rgb: "153, 246, 228",
  },
  {
    family: "Teal",
    id: "teal-300",
    name: "Teal 300",
    shade: "300",
    hex: "#5eead4",
    rgb: "94, 234, 212",
  },
  {
    family: "Teal",
    id: "teal-400",
    name: "Teal 400",
    shade: "400",
    hex: "#2dd4bf",
    rgb: "45, 212, 191",
  },
  {
    family: "Teal",
    id: "teal-500",
    name: "Teal 500",
    shade: "500",
    hex: "#14b8a6",
    rgb: "20, 184, 166",
  },
  {
    family: "Teal",
    id: "teal-600",
    name: "Teal 600",
    shade: "600",
    hex: "#0d9488",
    rgb: "13, 148, 136",
  },
  {
    family: "Teal",
    id: "teal-700",
    name: "Teal 700",
    shade: "700",
    hex: "#0f766e",
    rgb: "15, 118, 110",
  },
  {
    family: "Teal",
    id: "teal-800",
    name: "Teal 800",
    shade: "800",
    hex: "#115e59",
    rgb: "17, 94, 89",
  },
  {
    family: "Teal",
    id: "teal-900",
    name: "Teal 900",
    shade: "900",
    hex: "#134e4a",
    rgb: "19, 78, 74",
  },
];

function groupColors(colors: ColorShade[]): ColorGroup[] {
  const groups: Record<string, ColorShade[]> = {};
  for (const color of colors) {
    if (!groups[color.family]) {
      groups[color.family] = [];
    }
    // biome-ignore lint/style/noNonNullAssertion: will never be null
    groups[color.family]!.push(color);
  }

  const order: Array<ColorGroup["value"]> = [
    "Gray",
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Amber",
    "Pink",
    "Teal",
  ];
  return order.map((value) => ({ items: groups[value] ?? [], value }));
}

const groupedColors: ColorGroup[] = groupColors(colorsData);

export function ComboboxGroupingItemsDemo() {
  const [selectedColor, setSelectedColor] = useState<ColorShade | null>(null);

  return (
    <div className="flex flex-col gap-4 max-w-sm w-full">
      <Combobox
        items={groupedColors}
        value={selectedColor}
        onValueChange={(color: ColorShade | null) => {
          setSelectedColor(color);
        }}
        itemToStringLabel={(color: ColorShade) => color.name}
      >
        <div className="flex flex-col items-start gap-2 ">
          <ComboboxInput
            aria-label="Search colors"
            placeholder="Search color palette..."
            className="w-full"
          />
        </div>
        <ComboboxPopup>
          <ComboboxEmpty>No colors found.</ComboboxEmpty>
          <ComboboxList>
            {(group: ColorGroup) => (
              <Fragment key={group.value}>
                <ComboboxGroup items={group.items}>
                  <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
                  <ComboboxCollection>
                    {(color: ColorShade) => (
                      <ComboboxItem key={color.id} value={color}>
                        <div className="flex items-center justify-between gap-3 w-full">
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div
                              className="h-6 w-6 rounded border shrink-0 shadow-sm"
                              style={{ backgroundColor: color.hex }}
                              aria-hidden="true"
                            />
                            <div className="flex flex-col min-w-0">
                              <span className="font-medium truncate">
                                {color.name}
                              </span>
                              <span className="text-xs opacity-60 truncate font-mono">
                                {color.hex}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs opacity-50 font-medium shrink-0">
                            {color.shade}
                          </span>
                        </div>
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                </ComboboxGroup>
                {group.value !== "Teal" && <ComboboxSeparator />}
              </Fragment>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>

      {selectedColor && (
        <div className="rounded-lg border p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-lg border shadow-sm shrink-0"
              style={{ backgroundColor: selectedColor.hex }}
              aria-hidden="true"
            />
            <div className="flex flex-col min-w-0">
              <p className="font-semibold text-sm">{selectedColor.name}</p>
              <p className="text-xs text-muted-foreground">
                {selectedColor.family} family
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="space-y-1">
              <p className="text-muted-foreground">HEX</p>
              <p className="font-mono font-medium">{selectedColor.hex}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground">RGB</p>
              <p className="font-mono font-medium">{selectedColor.rgb}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
