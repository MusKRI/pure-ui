"use client";

import { SVGProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/classes";

interface SpinnerPrimitiveProps extends SVGProps<SVGSVGElement> {}

function SpinnerPrimitive({ className, ...props }: SpinnerPrimitiveProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("size-full", className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        fill="currentColor"
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      >
        <animateTransform
          attributeName="transform"
          dur="7s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  );
}

const spinnerVariants = tv({
  base: `pointer-events-none relative size-6 inline-block animate-spin animation-duration-[0.75s] text-current`,
  variants: {
    size: {
      sm: `size-4`,
      md: `size-6`,
      lg: `size-8`,
      xl: `size-10`,
    },
  },
  defaultVariants: {
    size: `md`,
  },
});

interface SpinnerRootProps
  extends Omit<React.ComponentProps<"svg">, "display" | "opacity" | "color">,
    VariantProps<typeof spinnerVariants> {}

function Spinner({ size = "md", ...props }: SpinnerRootProps) {
  return (
    <span
      data-slot="spinner"
      className={cn(
        "in-data-[slot='toast-content']:size-5!",
        spinnerVariants({
          size,
        })
      )}
    >
      <SpinnerPrimitive
        aria-hidden
        aria-label="Loading"
        role="presentation"
        {...props}
      />
    </span>
  );
}

export { Spinner };
