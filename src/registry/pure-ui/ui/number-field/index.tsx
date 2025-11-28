"use client";

import { NumberField as NumberFieldPrimitive } from "@base-ui-components/react/number-field";

import { cn } from "@/lib/classes";

interface NumberFieldProps extends NumberFieldPrimitive.Root.Props {}

function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <NumberFieldPrimitive.Root
      className={cn(
        "flex w-full flex-col items-start gap-2 max-w-[200px]",
        className
      )}
      data-slot="number-field"
      {...props}
    />
  );
}

interface NumberFieldGroupProps extends NumberFieldPrimitive.Group.Props {}

function NumberFieldGroup({ className, ...props }: NumberFieldGroupProps) {
  return (
    <NumberFieldPrimitive.Group
      className={cn(
        "relative flex w-full rounded-lg border border-input bg-background dark:bg-input/32 text-sm shadow-xs transition-colors focus-within:border-ring focus-within:ring-[1px] focus-within:ring-ring data-disabled:pointer-events-none data-disabled:opacity-64",
        className
      )}
      data-slot="number-field-group"
      {...props}
    />
  );
}

interface NumberFieldInputProps extends NumberFieldPrimitive.Input.Props {}

function NumberFieldInput({ className, ...props }: NumberFieldInputProps) {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        "flex-1 w-full min-w-0 bg-transparent px-3 py-1.5 text-center outline-none tabular-nums",
        className
      )}
      data-slot="number-field-input"
      {...props}
    />
  );
}

interface NumberFieldDecrementProps
  extends NumberFieldPrimitive.Decrement.Props {}

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldDecrementProps) {
  return (
    <NumberFieldPrimitive.Decrement
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center hover:bg-accent rounded-s-lg px-3 transition-colors disabled:pointer-events-none disabled:opacity-64 disabled:cursor-not-allowed",
        className
      )}
      data-slot="number-field-decrement"
      {...props}
    >
      <MinusIcon />
    </NumberFieldPrimitive.Decrement>
  );
}

interface NumberFieldIncrementProps
  extends NumberFieldPrimitive.Increment.Props {}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldIncrementProps) {
  return (
    <NumberFieldPrimitive.Increment
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center hover:bg-accent rounded-e-lg px-3 transition-colors disabled:pointer-events-none disabled:opacity-64 disabled:cursor-not-allowed",
        className
      )}
      data-slot="number-field-increment"
      {...props}
    >
      <PlusIcon />
    </NumberFieldPrimitive.Increment>
  );
}

function NumberFieldScrubArea({
  className,
  children,
  ...props
}: NumberFieldPrimitive.ScrubArea.Props) {
  return (
    <NumberFieldPrimitive.ScrubArea
      className={cn("flex cursor-ew-resize", className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      {children}
      <NumberFieldPrimitive.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
        <CursorGrowIcon />
      </NumberFieldPrimitive.ScrubAreaCursor>
    </NumberFieldPrimitive.ScrubArea>
  );
}
function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 24 14"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 5H10" />
    </svg>
  );
}

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldScrubArea,
};
