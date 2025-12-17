"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { XIcon } from "lucide-react";
import { createContext, SVGProps, useContext, useRef } from "react";

import { Input } from "@/registry/pure-ui/ui/input";
import { ScrollArea } from "@/registry/pure-ui/ui/scroll-area";
import { cn } from "@/lib/classes";

interface ComboboxContextType {
  chipsRef: React.RefObject<HTMLDivElement | null> | null;
  multiple: boolean;
}

const ComboboxContext = createContext<ComboboxContextType>({
  chipsRef: null,
  multiple: false,
});

interface ComboboxProps<Value, Multiple extends boolean | undefined = false>
  extends ComboboxPrimitive.Root.Props<Value, Multiple> {}

function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxProps<Value, Multiple>
) {
  const chipsRef = useRef<HTMLDivElement | null>(null);

  return (
    <ComboboxContext.Provider value={{ chipsRef, multiple: !!props.multiple }}>
      <ComboboxPrimitive.Root data-slot="combobox" {...props} />
    </ComboboxContext.Provider>
  );
}

interface ComboboxValueProps extends ComboboxPrimitive.Value.Props {}

function ComboboxValue(props: ComboboxValueProps) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

export function ChevronsUpDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.53 2.72a.75.75 0 0 0-1.06 0L5.22 6.97a.75.75 0 0 0 1.06 1.06L10 4.31l3.72 3.72a.75.75 0 1 0 1.06-1.06zm4.25 10.31l-4.25 4.25a.75.75 0 0 1-1.06 0l-4.25-4.25a.75.75 0 1 1 1.06-1.06L10 15.69l3.72-3.72a.75.75 0 1 1 1.06 1.06"
      />
    </svg>
  );
}

interface ComboboxInputProps extends ComboboxPrimitive.Input.Props {
  isClearable?: boolean;
}

function ComboboxInput({
  isClearable = true,
  className,
  ...props
}: ComboboxInputProps) {
  const { multiple } = useContext(ComboboxContext);

  if (multiple) {
    return (
      <ComboboxPrimitive.Input
        className={cn(
          "min-w-12 flex-1 text-base outline-none sm:text-sm [[data-slot=combobox-chip]+&]:pl-0.5 pl-2",
          className
        )}
        data-slot="combobox-input"
        {...props}
      />
    );
  }

  return (
    <div className="relative w-full z-20" data-slot="combobox-input-wrapper">
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        className={cn("relative", className)}
        render={<Input />}
        {...props}
      />
      <ComboboxTrigger
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-2 inline-flex size-8 sm:size-7 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden in-data-[slot=combobox-chips]:hidden [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
        )}
      >
        <ChevronsUpDownIcon />
      </ComboboxTrigger>
      {isClearable && (
        <ComboboxClear
          className={cn(
            "absolute top-1/2 -translate-y-1/2 right-2 inline-flex size-8 sm:size-7 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden in-data-[slot=combobox-chips]:hidden [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            "data-starting-style:opacity-0 data-ending-style:opacity-100 data-starting-style:scale-98 data-ending-style:scale-98"
          )}
        >
          <XIcon />
        </ComboboxClear>
      )}
    </div>
  );
}

interface ComboboxClearProps extends ComboboxPrimitive.Clear.Props {}

function ComboboxClear({ className, ...props }: ComboboxClearProps) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(className)}
      {...props}
    />
  );
}

interface ComboboxTriggerProps extends ComboboxPrimitive.Trigger.Props {}

function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

interface ComboboxChipsProps extends ComboboxPrimitive.Chips.Props {}

function ComboboxChips({ className, ...props }: ComboboxChipsProps) {
  const { chipsRef } = useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Chips
      className={cn(
        "relative inline-flex min-h-9 w-full flex-wrap gap-1 rounded-[12px] outline-none ring-ring/24 transition-shadow border border-input px-1 py-1 shadow-xs text-base/5 sm:text-sm focus-within:border-ring focus-within:ring-[1px] focus-within:ring-border",
        className
      )}
      data-slot="combobox-chips"
      ref={chipsRef}
      {...props}
    />
  );
}

interface ComboboxChipProps extends ComboboxPrimitive.Chip.Props {}

function ComboboxChip({ className, children, ...props }: ComboboxChipProps) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "relative bg-secondary px-2 py-[3px] rounded-md text-xs flex items-center gap-1",
        className
      )}
      {...props}
    >
      {children}
      <ComboboxChipRemove />
    </ComboboxPrimitive.Chip>
  );
}

interface ComboboxChipRemoveProps extends ComboboxPrimitive.ChipRemove.Props {}

function ComboboxChipRemove({ className, ...props }: ComboboxChipRemoveProps) {
  return (
    <ComboboxPrimitive.ChipRemove
      aria-label="Remove"
      className={cn(
        "rounded-md p-1 text-inherit hover:bg-secondary [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5 cursor-pointer",
        className
      )}
      data-slot="combobox-chip-remove"
      {...props}
    >
      <XIcon />
    </ComboboxPrimitive.ChipRemove>
  );
}

interface ComboboxListProps extends ComboboxPrimitive.List.Props {}

function ComboboxList({ className, ...props }: ComboboxListProps) {
  return (
    <ScrollArea
      scrollShadow="vertical"
      className="border-0 flex-1 min-h-0 *:data-[slot=scroll-area-vertical-shadow]:before:rounded-none *:data-[slot=scroll-area-vertical-shadow]:after:rounded-none *:data-[slot=scroll-area-vertical-shadow]:[--bg:var(--popover)]"
    >
      <ComboboxPrimitive.List
        data-slot="combobox-list"
        className={cn("not-empty:scroll-py-1 not-empty:py-1", className)}
        {...props}
      />
    </ScrollArea>
  );
}

interface ComboboxPortalProps extends ComboboxPrimitive.Portal.Props {}

function ComboboxPortal({ className, ...props }: ComboboxPortalProps) {
  return (
    <ComboboxPrimitive.Portal
      data-slot="combobox-portal"
      className={cn(className)}
      {...props}
    />
  );
}

interface ComboboxPositionerProps extends ComboboxPrimitive.Positioner.Props {}

function ComboboxPositioner({ className, ...props }: ComboboxPositionerProps) {
  return (
    <ComboboxPrimitive.Positioner
      data-slot="combobox-positioner"
      className={cn(className)}
      {...props}
    />
  );
}

interface ComboboxPopupProps
  extends ComboboxPrimitive.Popup.Props,
    Pick<ComboboxPositionerProps, "sideOffset"> {}

function ComboboxPopup({
  className,
  sideOffset = 0,
  children,
  ...props
}: ComboboxPopupProps) {
  const { chipsRef, multiple } = useContext(ComboboxContext);

  return (
    <ComboboxPortal>
      <ComboboxPositioner
        {...(multiple && chipsRef?.current ? { anchor: chipsRef } : {})}
        sideOffset={sideOffset}
        className={cn("select-none outline-none z-20", className)}
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-popup"
          className={cn(
            "relative flex max-h-full origin-(--transform-origin) rounded-[16px] shadow-md border border-border transition-[scale,opacity] will-change-[scale,opacity] duration-100 overflow-hidden",
            // Animation states
            "data-starting-style:scale-98 data-ending-style:scale-98 data-starting-style:opacity-0 data-ending-style:opacity-0",
            // Safe offset
            "[--safe-offset:calc(var(--anchor-height)+7px)]",
            // WHEN INPUT IS OUTSIDE POPUP
            "[&:not(:has([data-slot=combobox-input]))]:pointer-events-none",
            // When popup opens DOWNWARD (data-side=bottom): input on top
            "data-[side=bottom]:not-has-data-[slot=combobox-input]:-translate-y-(--safe-offset) data-[side=bottom]:not-has-data-[slot=combobox-input]:pt-(--safe-offset) data-[side=bottom]:not-has-data-[slot=combobox-input]:bg-[linear-gradient(to_bottom,transparent_0px,transparent_var(--safe-offset),white_var(--safe-offset))] data-[side=bottom]:not-has-data-[slot=combobox-input]:dark:bg-[linear-gradient(to_bottom,transparent_0px,transparent_var(--safe-offset),var(--popover)_var(--safe-offset))]",

            // When popup opens UPWARD (data-side=top): input on bottom
            "data-[side=top]:not-has-data-[slot=combobox-input]:translate-y-(--safe-offset) data-[side=top]:not-has-data-[slot=combobox-input]:pb-(--safe-offset) data-[side=top]:not-has-data-[slot=combobox-input]:bg-[linear-gradient(to_top,transparent_0px,transparent_var(--safe-offset),white_var(--safe-offset))] data-[side=top]:not-has-data-[slot=combobox-input]:dark:bg-[linear-gradient(to_top,transparent_0px,transparent_var(--safe-offset),var(--popover)_var(--safe-offset))]",
            // When input is INSIDE popup: solid background
            "[&:has([data-slot=combobox-input])]:bg-popover",

            className
          )}
          {...props}
        >
          <span className="flex max-h-[min(var(--available-height),20rem)] w-[calc(var(--anchor-width)+10px)] max-w-[calc(var(--available-width)+10px)] flex-col overflow-hidden pointer-events-auto">
            {children}
          </span>
        </ComboboxPrimitive.Popup>
      </ComboboxPositioner>
    </ComboboxPortal>
  );
}

interface ComboboxEmptyProps extends ComboboxPrimitive.Empty.Props {}

function ComboboxEmpty({ className, ...props }: ComboboxEmptyProps) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "p-2 text-sm text-muted-foreground text-center empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  );
}

interface ComboboxCollectionProps extends ComboboxPrimitive.Collection.Props {}

function ComboboxCollection(props: ComboboxCollectionProps) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

interface ComboboxRowProps extends ComboboxPrimitive.Row.Props {}

function ComboboxRow(props: ComboboxRowProps) {
  return <ComboboxPrimitive.Row data-slot="combobox-row" {...props} />;
}

interface ComboboxItemProps extends ComboboxPrimitive.Item.Props {}

function ComboboxItem({ className, children, ...props }: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "px-3 py-1.5 text-sm cursor-pointer hover:bg-accent/70 data-highlighted:bg-accent grid grid-cols-[1rem_1fr] items-center gap-2",
        "data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <ComboboxPrimitive.ItemIndicator className="col-start-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m5 12l5 5L20 7"
          />
        </svg>
      </ComboboxPrimitive.ItemIndicator>
      <div className="col-start-2">{children}</div>
    </ComboboxPrimitive.Item>
  );
}

interface ComboboxGroupProps extends ComboboxPrimitive.Group.Props {}

function ComboboxGroup(props: ComboboxGroupProps) {
  return <ComboboxPrimitive.Group data-slot="combobox-group" {...props} />;
}

interface ComboboxGroupLabelProps extends ComboboxPrimitive.GroupLabel.Props {}

function ComboboxGroupLabel({ className, ...props }: ComboboxGroupLabelProps) {
  return (
    <ComboboxPrimitive.GroupLabel
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs sticky top-0 bg-popover",
        className
      )}
      data-slot="combobox-group-label"
      {...props}
    />
  );
}

interface ComboboxSeparatorProps extends ComboboxPrimitive.Separator.Props {}

function ComboboxSeparator({ className, ...props }: ComboboxSeparatorProps) {
  return (
    <ComboboxPrimitive.Separator
      className={cn("mx-2 my-1 h-px bg-border last:hidden", className)}
      data-slot="combobox-separator"
      {...props}
    />
  );
}

export {
  Combobox,
  ComboboxValue,
  ComboboxInput,
  ComboboxClear,
  ComboboxTrigger,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxList,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxEmpty,
  ComboboxCollection,
  ComboboxRow,
  ComboboxItem,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxSeparator,
};
