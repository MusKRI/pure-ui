import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/classes";

interface ScrollAreaProps extends ScrollAreaPrimitive.Root.Props {
  orientation?: "horizontal" | "vertical" | "both";
  scrollShadow?: "vertical" | "horizontal" | "both" | "none";
}

function ScrollArea({
  className,
  orientation = "vertical",
  scrollShadow = "none",
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root className="min-h-0" {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(
          "border border-border",
          "size-full overscroll-contain rounded-[inherit] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
          className
        )}
      >
        <div
          data-slot="scroll-area-vertical-shadow"
          className={cn(
            scrollShadow === "vertical" || scrollShadow === "both"
              ? "block"
              : "hidden",
            [
              "absolute inset-px pointer-events-none",
              "before:content-[''] after:content-[''] before:block after:block before:absolute after:absolute before:left-0 after:left-0 before:w-full after:w-full before:pointer-events-none after:pointer-events-none",
              "before:rounded-md before:rounded-b-none after:rounded-md after:rounded-t-none",
              "before:transition-[height] after:transition-[height] before:duration-100 after:duration-100 before:ease-out after:ease-out",
              "before:[--scroll-area-overflow-y-start:inherit]",
              "after:[--scroll-area-overflow-y-end:inherit]",
              "before:top-0 after:bottom-0 [--bg:var(--background)] before:bg-[linear-gradient(to_bottom,var(--bg),transparent)] after:bg-[linear-gradient(to_top,var(--bg),transparent)] before:h-[min(40px,var(--scroll-area-overflow-y-start))] after:h-[min(40px,var(--scroll-area-overflow-y-end,40px))]",
            ]
          )}
          style={
            {
              "--scroll-area-overflow-y-start": "inherit",
              "--scroll-area-overflow-y-end": "inherit",
            } as React.CSSProperties
          }
        />
        <div
          data-slot="scroll-area-horizontal-shadow"
          className={cn(
            scrollShadow === "horizontal" || scrollShadow === "both"
              ? "block"
              : "hidden",
            [
              "absolute inset-px pointer-events-none",
              "before:content-[''] after:content-[''] before:block after:block before:absolute after:absolute before:top-0 after:top-0 before:h-full after:h-full before:pointer-events-none after:pointer-events-none",
              "before:rounded-md before:rounded-r-none after:rounded-md after:rounded-l-none",
              "before:transition-[height] after:transition-[height] before:duration-100 after:duration-100 before:ease-out after:ease-out",
              "before:[--scroll-area-overflow-x-start:inherit]",
              "after:[--scroll-area-overflow-x-end:inherit]",
              "before:left-0 after:right-0 [--bg:var(--background)] dark:[--bg:var(--background)] before:bg-[linear-gradient(to_right,var(--bg),transparent)] after:bg-[linear-gradient(to_left,var(--bg),transparent)] before:w-[min(40px,var(--scroll-area-overflow-x-start))] after:w-[min(40px,var(--scroll-area-overflow-x-end,40px))]",
            ]
          )}
          style={
            {
              "--scroll-area-overflow-x-start": "inherit",
              "--scroll-area-overflow-x-end": "inherit",
            } as React.CSSProperties
          }
        />
        {children}
      </ScrollAreaPrimitive.Viewport>
      {orientation === "both" ? (
        <>
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
        </>
      ) : (
        <ScrollBar orientation={orientation} />
      )}
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

interface ScrollAreaContentProps extends ScrollAreaPrimitive.Viewport.Props {}

function ScrollAreaContent({
  className,
  children,
  ...props
}: ScrollAreaContentProps) {
  return (
    <ScrollAreaPrimitive.Content
      data-slot="scroll-area-content"
      className={cn("size-full", className)}
      {...props}
    >
      {children}
    </ScrollAreaPrimitive.Content>
  );
}

interface ScrollBarProps extends ScrollAreaPrimitive.Scrollbar.Props {}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        "m-1.5 flex opacity-0 bg-muted rounded-full transition-opacity delay-200 data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100",
        className
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        className="relative flex-1 rounded-full bg-muted-foreground/40"
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollAreaContent, ScrollBar };
