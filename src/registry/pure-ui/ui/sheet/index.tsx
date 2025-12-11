"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/lib/classes";

interface SheetProps extends SheetPrimitive.Root.Props {}

function Sheet(props: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

interface SheetTriggerProps extends SheetPrimitive.Trigger.Props {}

function SheetTrigger(props: SheetTriggerProps) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

interface SheetCloseProps extends SheetPrimitive.Close.Props {}

function SheetClose(props: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

interface SheetViewportProps extends SheetPrimitive.Viewport.Props {}

function SheetViewport(props: SheetViewportProps) {
  return <SheetPrimitive.Viewport data-slot="sheet-viewport" {...props} />;
}

interface SheetPortalProps extends SheetPrimitive.Portal.Props {}

function SheetPortal(props: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

interface SheetBackdropProps extends SheetPrimitive.Backdrop.Props {}

function SheetBackdrop({ className, ...props }: SheetBackdropProps) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-backdrop"
      render={
        <div
          key="sheet-backdrop"
          className={cn(
            "fixed inset-0 bg-black/32 backdrop-blur-sm z-50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute",
            className
          )}
        />
      }
      {...props}
    />
  );
}

interface SheetPopupProps extends SheetPrimitive.Popup.Props {
  side?: "top" | "bottom" | "left" | "right";
}

function SheetPopup({
  className,
  side = "right",
  children,
  ...props
}: SheetPopupProps) {
  return (
    <SheetPortal>
      <SheetBackdrop />
      <SheetViewport className={cn("fixed inset-0 border z-50")}>
        <SheetPrimitive.Popup
          data-slot="sheet-popup"
          className={cn("bg-background")}
        >
          {children}
        </SheetPrimitive.Popup>
      </SheetViewport>
    </SheetPortal>
  );
}
