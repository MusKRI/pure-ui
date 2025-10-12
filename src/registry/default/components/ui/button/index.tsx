"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/classes";

const buttonVariants = cva(
  [
    `group inline-flex relative shrink-0 items-center justify-center w-fit touch-none whitespace-nowrap cursor-pointer outline-hidden`,
    `focus-visible:ring-ring focus-visible:ring-[2px] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary-foreground`,
    `disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60 disabled:bg-secondary`,
    `[transition:scale_0.1s,box-shadow_0.2s,background_0.45s,width_0.2s] [transition-timing-function:cubic-bezier(.6,.04,.98,.335)] active:scale-97`,
    `[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none`,
  ],
  {
    variants: {
      variant: {
        default: `bg-gradient-to-b from-primary/80 dark:from-primary to-primary text-primary-foreground hover:from-primary/75 dark:hover:from-primary/95`,
        outline: `bg-primary/10 border border-primary/40 text-primary hover:bg-primary/15`,
        ghost: `text-primary hover:bg-primary/10 focus-vislbe:bg-primary/10 focus-visible:border-primary/25`,
        link: `text-primary hover:underline hover:underline-offset-4 hover:decoration-1 focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-1`,
        danger:
          "bg-danger text-white hover:bg-danger/90 focus-visible:border-danger focus-visible:bg-danger/90 focus-visible:ring-danger bg-gradient-to-t from-danger/90 to-danger",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        default: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  pending?: boolean;
  asChild?: boolean;
  reduceMotion?: boolean;
}

function Button({
  pending = false,
  className,
  variant = "default",
  size = "default",
  radius = "default",
  children,
  asChild = false,
  reduceMotion = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const motionless = reduceMotion ? "transition-none" : undefined;
  const loaderTransition = reduceMotion
    ? "transition-none"
    : "transition-[margin,width,opacity,translate,scale] duration-200 [transition-timing-function:cubic-bezier(.25,.46,.45,.94)]";
  const contentTransition = reduceMotion
    ? "transition-none"
    : "transition-transform duration-200 [transition-timing-function:cubic-bezier(.25,.46,.45,.94)]";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ className, variant, size, radius }),
        pending && "cursor-wait active:scale-100",
        reduceMotion && motionless
      )}
      data-pending={pending ? "" : undefined}
      aria-busy={pending}
      {...props}
    >
      <span className={cn("flex items-center", motionless)}>
        <span
          aria-hidden="true"
          className={cn(
            "flex h-4.5 shrink-0 items-center justify-center overflow-hidden",
            loaderTransition,
            pending
              ? "mr-2 w-4.5 opacity-100 translate-x-0 scale-100"
              : "mr-0 w-0 opacity-0 translate-x-2 scale-60"
          )}
        >
          <Loader2
            className={cn("size-4.5", !reduceMotion && "animate-spin")}
          />
        </span>
        <span className={cn("flex items-center", contentTransition, className)}>
          <Slottable>{children}</Slottable>
        </span>
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
