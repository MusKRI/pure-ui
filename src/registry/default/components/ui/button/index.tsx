"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";

import { cn } from "@/lib/classes";

const buttonVariants = tv({
  base: [
    `group inline-flex relative isolate shrink-0 items-center gap-1.5 text-sm justify-center w-fit touch-none whitespace-nowrap cursor-pointer outline-hidden transform-gpu motion-reduce:transform-none overflow-hidden`,
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
    },
    size: {
      default:
        "min-h-8 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)]",
      xs: "min-h-6 gap-1 rounded-md px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3",
      sm: "min-h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
      lg: "min-h-9 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2)-1px)]",
      xl: "min-h-10 px-[calc(--spacing(4)-1px)] py-[calc(--spacing(2)-1px)] text-base [&_svg:not([class*='size-'])]:size-4.5",
      "icon-sm": "size-7 [&_svg:not([class*='size-'])]:size-3.5",
      icon: "size-8 [&_svg:not([class*='size-'])]:size-4",
      "icon-lg": "size-9 [&_svg:not([class*='size-'])]:size-4.5",
      "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-4.5",
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
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  radius?: VariantProps<typeof buttonVariants>["radius"];
}

function Button({
  className,
  variant = "default",
  size = "default",
  radius = "default",
  render,
  ...props
}: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    "data-slot": "button",
    className: cn(buttonVariants({ variant, size, radius, className })),
    type: typeValue,
  };

  return useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">(defaultProps, props),
  });
}

export { Button, buttonVariants };
