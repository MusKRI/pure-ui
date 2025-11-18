"use client";

import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";

import { cn } from "@/lib/classes";

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  reduceMotion?: boolean;
  isInteractive?: boolean;
  size?: "sm" | "md" | "lg";
}

function Switch({
  reduceMotion = false,
  isInteractive = false,
  size = "md",
  className,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      {...props}
      data-slot="switch"
      className={cn(
        "group relative rounded-full inline-flex items-center justify-start cursor-pointer touch-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-70 px-1 bg-input inset-shadow-[0_1px_--theme(--color-black/4%)] data-checked:bg-primary",
        size === "sm" && "w-10 h-6",
        size === "md" && "w-12 h-7",
        size === "lg" && "w-14 h-8",
        !reduceMotion &&
          "[transition-property:background-color] ease-[cubic-bezier(.25,.46,.45,.94)] duration-250",
        className
      )}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "z-2 bg-white shadow-sm rounded-full origin-right pointer-events-none data-checked:bg-primary-foreground shrink-0",
          size === "sm" && [
            "size-4 text-xs data-checked:ms-4",
            isInteractive && "group-active:w-5 data-checked:group-active:ml-3",
          ],
          size === "md" && [
            "size-5 text-sm data-checked:ms-5",
            isInteractive && "group-active:w-6 data-checked:group-active:ml-4",
          ],
          size === "lg" && [
            "size-6 text-base data-checked:ms-6",
            isInteractive && "group-active:w-7 data-checked:group-active:ml-5",
          ],
          !reduceMotion &&
            "[transition-property:margin,transform,width,background-color] ease-[cubic-bezier(.25,.46,.45,.94)] duration-200"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
