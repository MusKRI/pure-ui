"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";

import { cn } from "@/lib/classes";

export interface AvatarProps extends AvatarPrimitive.Root.Props {}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "inline-flex size-10 shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-muted align-middle font-medium text-xs",
        className
      )}
      data-slot="avatar"
      {...props}
    />
  );
}

export interface AvatarImageProps extends AvatarPrimitive.Image.Props {}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      className={cn("size-full object-cover", className)}
      data-slot="avatar-image"
      {...props}
    />
  );
}

export interface AvatarFallbackProps extends AvatarPrimitive.Fallback.Props {}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
