"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/classes";

const buttonVariants = tv({
  base: [
    `group inline-flex relative shrink-0 items-center text-sm justify-center w-fit touch-none whitespace-nowrap cursor-pointer outline-hidden`,
    `focus-visible:ring-ring focus-visible:ring-[2px] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-secondary-foreground`,
    `disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60 disabled:bg-secondary`,
    `[transition:scale_0.1s,box-shadow_0.2s,background_0.45s,width_0.2s] [transition-timing-function:cubic-bezier(.6,.04,.98,.335)]`,
    `[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none active:scale-98`,
  ],
  variants: {
    variant: {
      default: `bg-linear-to-b from-primary/80 dark:from-primary to-primary text-primary-foreground hover:from-primary/75 dark:hover:from-primary/95`,
      secondary:
        "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 data-pressed:bg-secondary/90",
      outline: `border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50`,
      ghost: `text-primary hover:bg-primary/10 focus-vislbe:bg-primary/10 focus-visible:border-primary/25`,
      link: `text-primary hover:underline hover:underline-offset-4 hover:decoration-1 focus-visible:underline focus-visible:underline-offset-4 focus-visible:decoration-1`,
      destructive:
        "bg-destructive text-white hover:bg-destructive/90 focus-visible:border-destructive focus-visible:bg-destructive/90 focus-visible:ring-destructive bg-linear-to-t from-destructive/90 to-destructive",
      "destructive-outline":
        "border border-transparent bg-transparent text-destructive-foreground hover:border-destructive/32 hover:bg-destructive/10",
    },
    size: {
      default:
        "min-h-8 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)]",
      xs: "min-h-6 gap-1 rounded-md px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3",
      sm: "min-h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
      lg: "min-h-9 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2)-1px)]",
      xl: "min-h-10 px-[calc(--spacing(4)-1px)] py-[calc(--spacing(2)-1px)] text-base [&_svg:not([class*='size-'])]:size-4.5",
      icon: "size-8",
      "icon-sm": "size-7",
      "icon-lg": "size-9",
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
});

interface ButtonProps extends useRender.ComponentProps<"button"> {
  pending?: boolean;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  radius?: VariantProps<typeof buttonVariants>["radius"];
  reduceMotion?: boolean;
  contentClassName?: string;
}

function Button({
  pending = false,
  className,
  variant = "default",
  size = "default",
  radius = "default",
  children,
  render,
  reduceMotion = false,
  contentClassName,
  ...props
}: ButtonProps) {
  const motionless = reduceMotion ? "transition-none!" : undefined;
  const loaderTransition = reduceMotion
    ? "transition-none"
    : "transition-[margin,width,opacity,translate,scale] duration-200 ease-[cubic-bezier(.25,.46,.45,.94)]";
  const contentTransition = reduceMotion
    ? "transition-none"
    : "transition-transform duration-200 ease-[cubic-bezier(.25,.46,.45,.94)]";
  const isIcon = size === "icon" || size === "icon-sm" || size === "icon-lg";
  const spinnerSize =
    size === "xs" || size === "sm" || size === "default" ? "sm" : "md";

  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    "data-slot": "button",
    className: cn(
      buttonVariants({ variant, size, radius }),
      className,
      pending && "cursor-wait active:scale-100 opacity-80",
      reduceMotion && motionless
    ),
    type: typeValue,
    "data-pending": pending ? ("" as const) : undefined,
    "aria-busy": pending,
    children: (
      <span className={cn("flex items-center", motionless)}>
        <span
          aria-hidden="true"
          className={cn(
            "flex h-4.5 shrink-0 items-center justify-center",
            loaderTransition,
            pending && !isIcon
              ? "mr-2 w-4.5 opacity-100 translate-x-0 scale-100"
              : "mr-0 w-0 opacity-0 translate-x-2 scale-60"
          )}
        >
          <Loader2
            className={cn("size-4.5", !reduceMotion && "animate-spin")}
          />
        </span>
        <span
          data-slot="button-content"
          className={cn(
            "flex items-center",
            contentClassName,
            contentTransition
          )}
        >
          {children}
        </span>
      </span>
    ),
  };

  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  });
}

export { Button, buttonVariants };
