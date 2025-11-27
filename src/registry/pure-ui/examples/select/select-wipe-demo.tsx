import { CheckCheck } from "lucide-react";

import {
  Select,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/pure-ui/ui/select";

const fonts = [
  { label: "Sans-serif", value: "sans" },
  { label: "Serif", value: "serif" },
  { label: "Monospace", value: "mono" },
  { label: "Cursive", value: "cursive" },
];

export const SelectWipeDemo = () => {
  const sides = [
    "right",
    "top",
    "bottom",
    "left",
    "inline-start",
    "inline-end",
  ] as const;

  const alignments = ["start", "center", "end"] as const;

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {sides.map((side) => {
        return (
          <div
            className="flex flex-col gap-1 border-b border-border/40 last:border-b-0 pb-5 last:pb-0"
            key={side}
          >
            <p>
              Side:{" "}
              <span className="text-muted-foreground capitalize">{side}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              {alignments.map((alignment) => {
                return (
                  <Select key={alignment + side} items={fonts}>
                    <SelectTrigger className="h-7 w-fit">
                      <SelectIcon>
                        <CheckCheck className="size-3.5 text-secondary-foreground" />
                      </SelectIcon>
                      <SelectValue
                        placeholder={`${alignment}`}
                        className="capitalize"
                      />
                    </SelectTrigger>
                    <SelectPopup
                      side={side}
                      align={alignment}
                      animationPreset="wipe"
                      className="min-w-45"
                    >
                      <SelectList>
                        {fonts.map((font) => {
                          return (
                            <SelectItem key={font.value} value={font.value}>
                              <SelectItemText>{font.label}</SelectItemText>
                            </SelectItem>
                          );
                        })}
                      </SelectList>
                    </SelectPopup>
                  </Select>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
