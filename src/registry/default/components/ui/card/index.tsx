import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/classes";

type CardVariant = "flat" | "outlined" | "elevated" | "filled";

interface CardProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
  variant?: CardVariant;
}

function Card({
  asChild,
  className,
  variant = "outlined",
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="card"
      className={cn(
        "relative flex flex-col gap-3 overflow-hidden p-4 rounded-xl border border-border/60",
        variant === "flat" && "border-none bg-transparent shadow-none",
        variant === "outlined" && "bg-card",
        variant === "elevated" && "bg-card shadow-sm",
        variant === "filled" && "bg-secondary",
        className
      )}
      {...props}
    />
  );
}

interface CardHeaderProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function CardHeader({ asChild, className, ...props }: CardHeaderProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="card-header"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

interface CardTitleProps extends React.ComponentProps<"h3"> {
  asChild?: boolean;
}

function CardTitle({ asChild, className, ...props }: CardTitleProps) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      data-slot="card-title"
      className={cn("text-base text-card-foreground leading-6", className)}
      {...props}
    />
  );
}

interface CardDescriptionProps extends React.ComponentProps<"p"> {
  asChild?: boolean;
}

function CardDescription({
  asChild,
  className,
  ...props
}: CardDescriptionProps) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

interface CardContentProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}

function CardContent({ asChild, className, ...props }: CardContentProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="card-content"
      className={cn("flex flex-col gap-1 flex-1", className)}
      {...props}
    />
  );
}

interface CardFooterProps extends React.ComponentProps<"div"> {
  asChild?: boolean;
}
function CardFooter({ asChild, className, ...props }: CardFooterProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="card-footer"
      className={cn("flex flex-row items-center", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
