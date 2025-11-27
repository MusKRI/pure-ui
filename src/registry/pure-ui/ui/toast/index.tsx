"use client";

import * as React from "react";
import { Toast } from "@base-ui-components/react/toast";

import { cn } from "@/lib/classes";
import { buttonVariants } from "@/registry/pure-ui/ui/button";
import { Spinner } from "@/registry/pure-ui/ui/spinner";

const toastManager = Toast.createToastManager();

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastRadius = "none" | "sm" | "md" | "lg" | "full";

interface CustomToastData {
  radius?: ToastRadius;
}

function getRadiusClass(radius?: ToastRadius): string {
  switch (radius) {
    case "none":
      return "rounded-none";
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    case "full":
      return "rounded-full px-5.5!";
    default:
      return "rounded-none"; // default radius
  }
}

interface ToastProviderProps extends Toast.Provider.Props {
  position?: ToastPosition;
}

function ToastProvider({
  children,
  position = "bottom-right",
  ...props
}: ToastProviderProps) {
  return (
    <Toast.Provider toastManager={toastManager} {...props}>
      {children}
      <ToastList position={position} />
    </Toast.Provider>
  );
}

function ToastList({
  position = "bottom-right",
}: {
  position?: ToastPosition;
}) {
  const { toasts } = Toast.useToastManager();
  const isTop = position.startsWith("top");

  return (
    <Toast.Portal data-slot="toast-portal">
      <Toast.Viewport
        data-slot="toast-viewport"
        data-position={position}
        className={cn(
          "fixed mx-auto max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)] w-[calc(100%-var(--toast-inset)*2)]",
          // Vertical positioning
          "data-[position*=top]:top-(--toast-inset)",
          "data-[position*=bottom]:bottom-(--toast-inset)",
          // Horizontal positioning
          "data-[position*=left]:left-(--toast-inset)",
          "data-[position*=right]:right-(--toast-inset)",
          "data-[position*=center]:left-1/2 data-[position*=center]:-translate-x-1/2"
        )}
      >
        {toasts.map((toast) => {
          console.log("toast type", toast.type);

          return (
            <Toast.Root
              data-slot="toast-root"
              key={toast.id}
              toast={toast}
              data-position={position}
              data-type={toast.type}
              swipeDirection={
                position.includes("center")
                  ? [isTop ? "up" : "down"]
                  : position.includes("left")
                  ? ["left", isTop ? "up" : "down"]
                  : ["right", isTop ? "up" : "down"]
              }
              className={cn(
                "[--toast-calc-height:var(--toast-frontmost-height,var(--toast-height))] [--toast-gap:--spacing(3)] [--toast-peek:--spacing(3)] [--toast-scale:calc(max(0,1-(var(--toast-index)*.1)))] [--toast-shrink:calc(1-var(--toast-scale))]",
                "absolute z-[calc(9999999-var(--toast-index))] h-(--toast-calc-height) w-full border bg-popover px-3.5 py-3.5 text-popover-foreground shadow-lg select-none [transition:transform_.5s_cubic-bezier(.22,1,.36,1),opacity_.5s,height_.15s]",
                // radius of toast
                getRadiusClass((toast.data as CustomToastData)?.radius || "md"),
                // Base positioning using data-position
                "data-[position*=right]:right-0 data-[position*=right]:left-auto",
                "data-[position*=left]:right-auto data-[position*=left]:left-0",
                "data-[position*=center]:right-0 data-[position*=center]:left-0",
                "data-[position*=top]:top-0 data-[position*=top]:bottom-auto data-[position*=top]:origin-top",
                "data-[position*=bottom]:top-auto data-[position*=bottom]:bottom-0 data-[position*=bottom]:origin-bottom",
                // Gap fill for hover
                "after:absolute after:left-0 after:h-[calc(var(--toast-gap)+1px)] after:w-full",
                "data-[position*=top]:after:top-full",
                "data-[position*=bottom]:after:bottom-full",
                // Define offset-y variable
                "data-[position*=top]:[--toast-calc-offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--toast-gap)+var(--toast-swipe-movement-y))]",
                "data-[position*=bottom]:[--toast-calc-offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--toast-gap)*-1+var(--toast-swipe-movement-y))]",
                // Default state transform
                "data-[position*=top]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--toast-peek))+(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
                "data-[position*=bottom]:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--toast-peek))-(var(--toast-shrink)*var(--toast-calc-height))))_scale(var(--toast-scale))]",
                // Limited state
                "data-limited:opacity-0",
                // Expanded state
                "data-expanded:h-(--toast-height)",
                "data-position:data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--toast-calc-offset-y))]",
                // Starting and ending animations
                "data-[position*=bottom]:data-starting-style:transform-[translateY(calc(100%+var(--toast-inset)))]",
                "data-[position*=top]:data-starting-style:transform-[translateY(calc(-100%-var(--toast-inset)))]",
                "data-ending-style:opacity-0",
                // Ending animations (direction-aware)
                "data-ending-style:not-data-limited:not-data-swipe-direction:transform-[translateY(calc(100%+var(--toast-inset)))]",
                "data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
                "data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
                "data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]]",
                "data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]",
                // Ending animations (expanded)
                "data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-100%-var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
                "data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+100%+var(--toast-inset)))_translateY(var(--toast-calc-offset-y))]",
                "data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-100%-var(--toast-inset)))]",
                "data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+100%+var(--toast-inset)))]"
              )}
            >
              <Toast.Content
                data-slot="toast-content"
                className="flex items-center justify-between gap-1.5 overflow-hidden text-sm transition-opacity duration-250 data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100"
              >
                <div className="flex gap-2">
                  <div
                    className="mt-.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:h-lh [&_svg]:w-5 relative grid [&>div]:[grid-area:1/1]"
                    data-slot="toast-icon"
                  >
                    {/* Render all icons, show based on type */}
                    <div className="in-[[data-slot=toast-root]:not([data-type])]:hidden in-data-[type=loading]:scale-100 in-data-[type=loading]:opacity-100 not-in-data-[type=loading]:scale-90 not-in-data-[type=loading]:opacity-0 transition-[opacity,scale] duration-200 ease-[ease]">
                      <Spinner />
                    </div>
                    <div className="in-[[data-slot=toast-root]:not([data-type])]:hidden in-data-[type=success]:scale-100 in-data-[type=success]:opacity-100 not-in-data-[type=success]:scale-90 not-in-data-[type=success]:opacity-0 transition-[opacity,scale] duration-200 ease-[ease]">
                      <SuccessIcon className="text-success" />
                    </div>
                    <div className="in-[[data-slot=toast-root]:not([data-type])]:hidden in-data-[type=error]:scale-100 in-data-[type=error]:opacity-100 not-in-data-[type=error]:scale-90 not-in-data-[type=error]:opacity-0 transition-[opacity,scale] duration-200 ease-[ease]">
                      <DangerIcon className="text-destructive" />
                    </div>
                    <div className="in-[[data-slot=toast-root]:not([data-type])]:hidden in-data-[type=info]:scale-100 in-data-[type=info]:opacity-100 not-in-data-[type=info]:scale-90 not-in-data-[type=info]:opacity-0 transition-[opacity,scale] duration-200 ease-[ease]">
                      <InfoIcon className="text-info" />
                    </div>
                    <div className="in-[[data-slot=toast-root]:not([data-type])]:hidden in-data-[type=warning]:scale-100 in-data-[type=warning]:opacity-100 not-in-data-[type=warning]:scale-90 not-in-data-[type=warning]:opacity-0 transition-[opacity,scale] duration-200 ease-[ease]">
                      <WarningIcon className="text-warning" />
                    </div>
                  </div>
                  <div>
                    <Toast.Title
                      data-type={toast.type}
                      className="font-medium transition-[opacity,transform] duration-200 data-[type=loading]:opacity-80 not-data-[type=loading]:opacity-100"
                      data-slot="toast-title"
                    />
                    <Toast.Description
                      className="text-muted-foreground transition-[opacity,transform] duration-200 data-[type=loading]:opacity-80 not-data-[type=loading]:opacity-100"
                      data-slot="toast-description"
                      data-type={toast.type}
                    />
                  </div>
                </div>

                {toast.actionProps && (
                  <Toast.Action
                    className={buttonVariants({ size: "xs" })}
                    data-slot="toast-action"
                  >
                    {toast.actionProps.children}
                  </Toast.Action>
                )}
              </Toast.Content>
            </Toast.Root>
          );
        })}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

function WarningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="var(--color-warning)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15"
      />
    </svg>
  );
}

function SuccessIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="var(--color-success)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
}

function DangerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="var(--color-destructive)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="-2 -3 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.2 3.2 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096M10 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1"
      />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="var(--color-info)"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m0 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
}

export { ToastProvider, type ToastPosition, toastManager as toast };
