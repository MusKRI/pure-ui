import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/classes";

const badgeVariants = tv({
  base: `inline-flex items-center justify-center relative text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1.5px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden`,
  variants: {
    shape: {
      simple: "rounded-full border px-2 py-0.5",
      bar: "rounded-[7px] pl-3.5 pr-1.5 py-1 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[55%] before:bg-current before:rounded-full border border-transparent",
      dot: "rounded-[7px] pl-4.5 pr-1.5 py-1 before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:size-2 before:bg-current before:rounded-full border border-transparent",
    },
    variant: {
      default: "",
      destructive: "",
      secondary: "",
      outline: "",
    },
  },
  defaultVariants: {
    shape: "simple",
    variant: "default",
  },
  compoundVariants: [
    // Simple
    {
      shape: "simple",
      variant: "default",
      class:
        "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
    },
    {
      shape: "simple",
      variant: "destructive",
      class:
        "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    },
    {
      shape: "simple",
      variant: "secondary",
      class:
        "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
    },
    {
      shape: "simple",
      variant: "outline",
      class:
        "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
    },

    // Bar
    {
      shape: "bar",
      variant: "default",
      class:
        "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
    },
    {
      shape: "bar",
      variant: "destructive",
      class:
        "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    },
    {
      shape: "bar",
      variant: "secondary",
      class:
        "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
    },
    {
      shape: "bar",
      variant: "outline",
      class:
        "text-foreground border-foreground/50 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
    },

    // Dot
    {
      shape: "dot",
      variant: "default",
      class:
        "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
    },
    {
      shape: "dot",
      variant: "destructive",
      class:
        "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
    },
    {
      shape: "dot",
      variant: "secondary",
      class:
        "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
    },
    {
      shape: "dot",
      variant: "outline",
      class:
        "text-foreground border-foreground/50 [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
    },
  ],
});

interface BadgeProps extends useRender.ComponentProps<"span"> {
  shape?: VariantProps<typeof badgeVariants>["shape"];
  variant?: VariantProps<typeof badgeVariants>["variant"];
}

function Badge({
  className,
  shape = "simple",
  variant = "default",
  render,
  ...props
}: BadgeProps) {
  const defaultProps = {
    className: cn(badgeVariants({ className, shape, variant })),
    "data-slot": "badge",
  };

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(defaultProps, props),
    render,
  });
}
export { Badge, badgeVariants };
