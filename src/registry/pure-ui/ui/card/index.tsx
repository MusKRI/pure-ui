import React from "react";

import { cn } from "@/lib/classes";

interface CardProps extends React.ComponentProps<"div"> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative flex flex-col gap-3 overflow-hidden p-4 rounded-xl border border-border/60",
        "bg-card shadow-xs in-data-[slot=popover-popup]:bg-transparent in-data-[slot=popover-popup]:shadow-none",
        className
      )}
      {...props}
    />
  );
}

interface CardHeaderProps extends React.ComponentProps<"div"> {}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

interface CardTitleProps extends React.ComponentProps<"h3"> {}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-base text-card-foreground leading-6", className)}
      {...props}
    />
  );
}

interface CardDescriptionProps extends React.ComponentProps<"p"> {}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

interface CardContentProps extends React.ComponentProps<"div"> {}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-col gap-1 flex-1", className)}
      {...props}
    />
  );
}

interface CardFooterProps extends React.ComponentProps<"div"> {}
function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
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
