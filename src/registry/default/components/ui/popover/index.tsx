"use client";

import { createContext, useContext, useMemo } from "react";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";

import { cn } from "@/lib/classes";

const cssAnimationPresets = {
  none: "transition-none",
  scale: [
    `[transition-property:scale,opacity] [will-change:scale,opacity]`,
    `data-starting-style:scale-80 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:scale-80`,
  ],
  fade: [
    `[transition-property:opacity] [will-change:opacity]`,
    `data-starting-style:opacity-0 data-ending-style:opacity-0`,
  ],
  slideOutside: [
    `[transition-property:translate,opacity] [will-change:translate,opacity]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:translate-y-[10px] data-[side=bottom]:data-ending-style:translate-y-[10px] data-[side=bottom]:data-ending-style:opacity-0`,
    // side=top
    `data-[side=top]:data-starting-style:opacity-0 data-[side=top]:data-starting-style:translate-y-[-10px] data-[side=top]:data-ending-style:translate-y-[-10px] data-[side=top]:data-ending-style:opacity-0`,
    // side=left
    `data-[side=left]:data-starting-style:opacity-0 data-[side=left]:data-starting-style:translate-x-[-10px] data-[side=left]:data-ending-style:translate-x-[-10px] data-[side=left]:data-ending-style:opacity-0`,
    // side=right
    `data-[side=right]:data-starting-style:opacity-0 data-[side=right]:data-starting-style:translate-x-[10px] data-[side=right]:data-ending-style:translate-x-[10px] data-[side=right]:data-ending-style:opacity-0`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:opacity-0 data-[side=inline-start]:data-starting-style:translate-x-[-10px] data-[side=inline-start]:data-ending-style:translate-x-[-10px] data-[side=inline-start]:data-ending-style:opacity-0`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:opacity-0 data-[side=inline-end]:data-starting-style:translate-x-[10px] data-[side=inline-end]:data-ending-style:translate-x-[10px] data-[side=inline-end]:data-ending-style:opacity-0`,
  ],
  slideInside: [
    `[transition-property:translate,opacity] [will-change:translate,opacity]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:translate-y-[-10px] data-[side=bottom]:data-ending-style:translate-y-[-10px] data-[side=bottom]:data-ending-style:opacity-0`,
    // side=top
    `data-[side=top]:data-starting-style:opacity-0 data-[side=top]:data-starting-style:translate-y-[10px] data-[side=top]:data-ending-style:translate-y-[10px] data-[side=top]:data-ending-style:opacity-0`,
    // side=left
    `data-[side=left]:data-starting-style:opacity-0 data-[side=left]:data-starting-style:translate-x-[10px] data-[side=left]:data-ending-style:translate-x-[10px] data-[side=left]:data-ending-style:opacity-0`,
    // side=right
    `data-[side=right]:data-starting-style:opacity-0 data-[side=right]:data-starting-style:translate-x-[-10px] data-[side=right]:data-ending-style:translate-x-[-10px] data-[side=right]:data-ending-style:opacity-0`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:opacity-0 data-[side=inline-start]:data-starting-style:translate-x-[10px] data-[side=inline-start]:data-ending-style:translate-x-[10px] data-[side=inline-start]:data-ending-style:opacity-0`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:opacity-0 data-[side=inline-end]:data-starting-style:translate-x-[-10px] data-[side=inline-end]:data-ending-style:translate-x-[-10px] data-[side=inline-end]:data-ending-style:opacity-0`,
  ],
  wipe: [
    `[transition-property:clip-path] [will-change:clip-path]`,
    `[clip-path:inset(0_0_0_0_round_12px)] [-webkit-clip-path:inset(0_0_0_0_round_12px)]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:[clip-path:inset(0_0_100%_0_round_12px)] data-[side=bottom]:data-ending-style:[clip-path:inset(0_0_100%_0_round_12px)]`,
    // side=top
    `data-[side=top]:data-starting-style:[clip-path:inset(100%_0_0_0_round_12px)] data-[side=top]:data-ending-style:[clip-path:inset(100%_0_0_0_round_12px)]`,
    // side=left
    `data-[side=left]:data-starting-style:[clip-path:inset(0_0_0_100%_round_12px)] data-[side=left]:data-ending-style:[clip-path:inset(0_0_0_100%_round_12px)]`,
    // side=right
    `data-[side=right]:data-starting-style:[clip-path:inset(0_100%_0_0_round_12px)] data-[side=right]:data-ending-style:[clip-path:inset(0_100%_0_0_round_12px)]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:[clip-path:inset(0_0_0_100%_round_12px)] data-[side=inline-start]:data-ending-style:[clip-path:inset(0_0_0_100%_round_12px)]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:[clip-path:inset(0_100%_0_0_round_12px)] data-[side=inline-end]:data-ending-style:[clip-path:inset(0_100%_0_0_round_12px)]`,
  ],
  wipeScale: [
    `[transition-property:clip-path,scale] [will-change:clip-path,scale]`,
    `[clip-path:inset(0_0_0_0_round_12px)] [-webkit-clip-path:inset(0_0_0_0_round_12px)]`,
    `data-starting-style:scale-80 data-ending-style:scale-80`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:[clip-path:inset(0_0_100%_0_round_12px)] data-[side=bottom]:data-ending-style:[clip-path:inset(0_0_100%_0_round_12px)]`,
    // side=top
    `data-[side=top]:data-starting-style:[clip-path:inset(100%_0_0_0_round_12px)] data-[side=top]:data-ending-style:[clip-path:inset(100%_0_0_0_round_12px)]`,
    // side=left
    `data-[side=left]:data-starting-style:[clip-path:inset(0_0_0_100%_round_12px)] data-[side=left]:data-ending-style:[clip-path:inset(0_0_0_100%_round_12px)]`,
    // side=right
    `data-[side=right]:data-starting-style:[clip-path:inset(0_100%_0_0_round_12px)] data-[side=right]:data-ending-style:[clip-path:inset(0_100%_0_0_round_12px)]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:[clip-path:inset(0_0_0_100%_round_12px)] data-[side=inline-start]:data-ending-style:[clip-path:inset(0_0_0_100%_round_12px)]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:[clip-path:inset(0_100%_0_0_round_12px)] data-[side=inline-end]:data-ending-style:[clip-path:inset(0_100%_0_0_round_12px)]`,
  ],
  motion: [
    `[transition-property:translate,scale,opacity,rotateX,rotateY,transform] [will-change:translate,scale,opacity,rotateX,rotateY,transform]`,
    `[transform:perspective(1000px)]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:translate-y-[7px] data-[side=bottom]:data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:scale-[0.26] data-[side=bottom]:data-starting-style:rotate-x-[70deg] data-[side=bottom]:data-ending-style:translate-y-[7px] data-[side=bottom]:data-ending-style:opacity-0 data-[side=bottom]:data-ending-style:scale-[0.26] data-[side=bottom]:data-ending-style:rotate-x-[70deg]`,
    // side=top
    `data-[side=top]:data-starting-style:translate-y-[7px] data-[side=top]:data-starting-style:opacity-0 data-[side=top]:data-starting-style:scale-[0.26] data-[side=top]:data-starting-style:rotate-x-[70deg] data-[side=top]:data-ending-style:translate-y-[7px] data-[side=top]:data-ending-style:opacity-0 data-[side=top]:data-ending-style:scale-[0.26] data-[side=top]:data-ending-style:rotate-x-[70deg]`,
    // side=left
    `data-[side=left]:data-starting-style:translate-x-[-7px] data-[side=left]:data-starting-style:opacity-0 data-[side=left]:data-starting-style:scale-[0.26] data-[side=left]:data-starting-style:rotate-y-[-40deg] data-[side=left]:data-ending-style:translate-x-[-7px] data-[side=left]:data-ending-style:opacity-0 data-[side=left]:data-ending-style:scale-[0.26] data-[side=left]:data-ending-style:rotate-y-[-40deg]`,
    // side=right
    `data-[side=right]:data-starting-style:translate-x-[7px] data-[side=right]:data-starting-style:opacity-0 data-[side=right]:data-starting-style:scale-[0.26] data-[side=right]:data-starting-style:rotate-y-[40deg] data-[side=right]:data-ending-style:translate-x-[7px] data-[side=right]:data-ending-style:opacity-0 data-[side=right]:data-ending-style:scale-[0.26] data-[side=right]:data-ending-style:rotate-y-[40deg]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:translate-x-[-7px] data-[side=inline-start]:data-starting-style:opacity-0 data-[side=inline-start]:data-starting-style:scale-[0.26] data-[side=inline-start]:data-starting-style:rotate-y-[-40deg] data-[side=inline-start]:data-ending-style:translate-x-[-7px] data-[side=inline-start]:data-ending-style:opacity-0 data-[side=inline-start]:data-ending-style:scale-[0.26] data-[side=inline-start]:data-ending-style:rotate-y-[-40deg]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:translate-x-[7px] data-[side=inline-end]:data-starting-style:opacity-0 data-[side=inline-end]:data-starting-style:scale-[0.26] data-[side=inline-end]:data-starting-style:rotate-y-[40deg] data-[side=inline-end]:data-ending-style:translate-x-[7px] data-[side=inline-end]:data-ending-style:opacity-0 data-[side=inline-end]:data-ending-style:scale-[0.26] data-[side=inline-end]:data-ending-style:rotate-y-[40deg]`,
  ],
  motionBlur: [
    `[transition-property:translate,scale,opacity,rotateX,rotateY,transform,filter] [will-change:translate,scale,opacity,rotateX,rotateY,transform,filter]`,
    `[transform:perspective(1000px)]`,
    `data-starting-style:blur-[9px] data-ending-style:blur-[9px]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:translate-y-[7px] data-[side=bottom]:data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:scale-[0.26] data-[side=bottom]:data-starting-style:rotate-x-[70deg] data-[side=bottom]:data-ending-style:translate-y-[7px] data-[side=bottom]:data-ending-style:opacity-0 data-[side=bottom]:data-ending-style:scale-[0.26] data-[side=bottom]:data-ending-style:rotate-x-[70deg]`,
    // side=top
    `data-[side=top]:data-starting-style:translate-y-[7px] data-[side=top]:data-starting-style:opacity-0 data-[side=top]:data-starting-style:scale-[0.26] data-[side=top]:data-starting-style:rotate-x-[70deg] data-[side=top]:data-ending-style:translate-y-[7px] data-[side=top]:data-ending-style:opacity-0 data-[side=top]:data-ending-style:scale-[0.26] data-[side=top]:data-ending-style:rotate-x-[70deg]`,
    // side=left
    `data-[side=left]:data-starting-style:translate-x-[-7px] data-[side=left]:data-starting-style:opacity-0 data-[side=left]:data-starting-style:scale-[0.26] data-[side=left]:data-starting-style:rotate-y-[-40deg] data-[side=left]:data-ending-style:translate-x-[-7px] data-[side=left]:data-ending-style:opacity-0 data-[side=left]:data-ending-style:scale-[0.26] data-[side=left]:data-ending-style:rotate-y-[-40deg]`,
    // side=right
    `data-[side=right]:data-starting-style:translate-x-[7px] data-[side=right]:data-starting-style:opacity-0 data-[side=right]:data-starting-style:scale-[0.26] data-[side=right]:data-starting-style:rotate-y-[40deg] data-[side=right]:data-ending-style:translate-x-[7px] data-[side=right]:data-ending-style:opacity-0 data-[side=right]:data-ending-style:scale-[0.26] data-[side=right]:data-ending-style:rotate-y-[40deg]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:translate-x-[-7px] data-[side=inline-start]:data-starting-style:opacity-0 data-[side=inline-start]:data-starting-style:scale-[0.26] data-[side=inline-start]:data-starting-style:rotate-y-[-40deg] data-[side=inline-start]:data-ending-style:translate-x-[-7px] data-[side=inline-start]:data-ending-style:opacity-0 data-[side=inline-start]:data-ending-style:scale-[0.26] data-[side=inline-start]:data-ending-style:rotate-y-[-40deg]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:translate-x-[7px] data-[side=inline-end]:data-starting-style:opacity-0 data-[side=inline-end]:data-starting-style:scale-[0.26] data-[side=inline-end]:data-starting-style:rotate-y-[40deg] data-[side=inline-end]:data-ending-style:translate-x-[7px] data-[side=inline-end]:data-ending-style:opacity-0 data-[side=inline-end]:data-ending-style:scale-[0.26] data-[side=inline-end]:data-ending-style:rotate-y-[40deg]`,
  ],
};

const cssTransitionPresets = {
  inExpo: `duration-[0.35s] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`,
  outExpo: `duration-[0.35s] ease-[cubic-bezier(0.19,1,0.22,1)]`,
  inOutExpo: `duration-[0.35s] ease-[cubic-bezier(1,0,0,1)]`,
  anticipate: `duration-[0.35s] ease-[cubic-bezier(1,-0.4,0.35,0.95)]`,
  quickOut: `duration-[0.35s] ease-out`,
  overshootOut: `duration-[0.35s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`,
  swiftOut: `duration-[0.35s] ease-[cubic-bezier(0.175,0.885,0.32,1.1)]`,
  snappyOut: `duration-[0.35s] ease-[cubic-bezier(0.19,1,0.22,1)]`,
  in: `duration-[0.35s] ease-[cubic-bezier(0.42,0,1,1)]`,
  out: `duration-[0.35s] ease-[cubic-bezier(0,0,0.58,1)]`,
  inOut: `duration-[0.25s] ease-[cubic-bezier(0.42,0,0.58,1)]`,
  outIn: `duration-[0.35s] ease-[cubic-bezier(0.1,0.7,0.9,0.5)]`,
  inQuad: `duration-[0.35s] ease-[cubic-bezier(0.55,0.085,0.68,0.53)]`,
  outQuad: `duration-[0.25s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`,
  inOutQuad: `duration-[0.32s] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]`,
  inCubic: `duration-[0.35s] ease-[cubic-bezier(0.55,0.055,0.675,0.19)]`,
  outCubic: `duration-[0.35s] ease-[cubic-bezier(0.215,0.61,0.355,1)]`,
  inOutCubic: `duration-[0.35s] ease-[cubic-bezier(0.645,0.045,0.355,1)]`,
  inQuart: `duration-[0.35s] ease-[cubic-bezier(0.895,0.03,0.685,0.22)]`,
  outQuart: `duration-[0.35s] ease-[cubic-bezier(0.165,0.84,0.44,1)]`,
  inOutQuart: `duration-[0.35s] ease-[cubic-bezier(0.77,0,0.175,1)]`,
  inQuint: `duration-[0.35s] ease-[cubic-bezier(0.755,0.05,0.855,0.06)]`,
  outQuint: `duration-[0.35s] ease-[cubic-bezier(0.23,1,0.32,1)]`,
  inOutQuint: `duration-[0.35s] ease-[cubic-bezier(0.86,0,0.07,1)]`,
  inCirc: `duration-[0.35s] ease-[cubic-bezier(0.6,0.04,0.98,0.335)]`,
  outCirc: `duration-[0.35s] ease-[cubic-bezier(0.075,0.82,0.165,1)]`,
  inOutCirc: `duration-[0.35s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)]`,
  inOutBase: `duration-[0.35s] ease-[cubic-bezier(0.25,0.1,0.25,1)]`,
};

type CSSAnimationPresets = keyof typeof cssAnimationPresets;
type CSSTransitionPresets = keyof typeof cssTransitionPresets;

type Backdrop = "opaque" | "blur" | "transparent";

interface PopoverContextType {
  backdrop?: Backdrop;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

function usePopover() {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }
  return context;
}

interface PopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Root> {
  backdrop?: Backdrop;
}

function Popover({ backdrop = "transparent", ...props }: PopoverProps) {
  return (
    <PopoverContext.Provider
      value={{
        backdrop,
      }}
    >
      <PopoverPrimitive.Root data-slot="popover" {...props} />
    </PopoverContext.Provider>
  );
}

interface PopoverTriggerProps
  extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

interface PopoverPortalProps
  extends React.ComponentProps<typeof PopoverPrimitive.Portal> {}

function PopoverPortal(props: PopoverPortalProps) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
}

interface PopoverBackdropProps
  extends React.ComponentProps<typeof PopoverPrimitive.Backdrop> {}

function PopoverBackdrop({ className, ...props }: PopoverBackdropProps) {
  const { backdrop = "transparent" } = usePopover();

  return (
    <PopoverPrimitive.Backdrop
      data-slot="popover-backdrop"
      className={cn(
        backdrop === "opaque" &&
          "fixed inset-0 bg-black z-100 opacity-40 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:opacity-60",
        backdrop === "blur" &&
          "fixed inset-0 z-100 backdrop-blur-sm transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0",
        backdrop === "transparent" && "hidden",
        className
      )}
      {...props}
    />
  );
}

interface PopoverPositionerProps
  extends React.ComponentProps<typeof PopoverPrimitive.Positioner> {}

function PopoverPositioner({
  sideOffset = 4,
  side = "bottom",
  className,
  ...rest
}: PopoverPositionerProps) {
  return (
    <PopoverPortal>
      <PopoverBackdrop />
      <PopoverPrimitive.Positioner
        sideOffset={sideOffset}
        side={side}
        data-slot="popover-positioner"
        className={cn(
          "z-100",
          (side === "inline-end" || side === "inline-start") &&
            "[&_[data-slot=popover-arrow]]:hidden",
          className
        )}
        {...rest}
      />
    </PopoverPortal>
  );
}

interface PopoverArrowProps
  extends React.ComponentProps<typeof PopoverPrimitive.Arrow> {}

function PopoverArrow({ className, ...rest }: PopoverArrowProps) {
  return (
    <PopoverPrimitive.Arrow
      data-slot="popover-arrow"
      className={cn(
        "data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-14px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180",
        className
      )}
      {...rest}
    />
  );
}

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-popover"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-border/60"
      />
    </svg>
  );
}

interface PopoverPopupProps
  extends React.ComponentProps<typeof PopoverPrimitive.Popup>,
    Pick<
      PopoverPositionerProps,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {
  animationPreset?: CSSAnimationPresets;
  transitionPreset?: CSSTransitionPresets;
  reduceMotion?: boolean;
  showArrow?: boolean;
}

function PopoverPopup({
  className,
  animationPreset = "scale",
  transitionPreset = "snappyOut",
  reduceMotion = false,
  showArrow = false,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...rest
}: PopoverPopupProps) {
  const cssAnimationConfig = useMemo(() => {
    if (reduceMotion) return "none";

    if (animationPreset) {
      return cssAnimationPresets[animationPreset];
    }

    return cssAnimationPresets.scale;
  }, [animationPreset, reduceMotion, side]);

  const cssTransitionConfig = useMemo(() => {
    if (reduceMotion) return "none";

    if (transitionPreset) {
      return cssTransitionPresets[transitionPreset];
    }

    return cssTransitionPresets.snappyOut;
  }, [transitionPreset, reduceMotion, side]);

  return (
    <PopoverPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <PopoverPrimitive.Popup
        data-slot="popover-popup"
        render={
          <div
            key="popover-popup"
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover px-4 py-4 shadow-sm border border-border/60 rounded-lg",
              cssTransitionConfig,
              cssAnimationConfig,
              className
            )}
          >
            {showArrow && (
              <PopoverArrow>
                <ArrowSvg />
              </PopoverArrow>
            )}
            {children}
          </div>
        }
        {...rest}
      />
    </PopoverPositioner>
  );
}

interface PopoverTitleProps
  extends React.ComponentProps<typeof PopoverPrimitive.Title> {}

function PopoverTitle({ className, ...rest }: PopoverTitleProps) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-base text-popover-foreground font-medium", className)}
      {...rest}
    />
  );
}

interface PopoverDescriptionProps
  extends React.ComponentProps<typeof PopoverPrimitive.Description> {}

function PopoverDescription({ className, ...rest }: PopoverDescriptionProps) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn(
        "text-sm text-popover-foreground/70 max-w-[35ch]",
        className
      )}
      {...rest}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
};
