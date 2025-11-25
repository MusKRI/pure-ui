"use client";

import { useMemo } from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";

import { cn } from "@/lib/classes";

const cssAnimationPresets = {
  none: "transition-none",
  scale: [
    `[transition-property:scale,opacity]`,
    `data-starting-style:scale-80 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:scale-80`,
  ],
  fade: [
    `[transition-property:opacity,scale]`,
    `data-starting-style:scale-98 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:scale-98`,
  ],
  slideOutside: [
    `[transition-property:translate,opacity]`,
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
    `[transition-property:translate,opacity]`,
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
    `[clip-path:inset(0_0_0_0_round_var(--radius))] [-webkit-clip-path:inset(0_0_0_0_round_var(--radius))]`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:[clip-path:inset(0_0_100%_0_round_var(--radius))] data-[side=bottom]:data-ending-style:[clip-path:inset(0_0_100%_0_round_var(--radius))]`,
    // side=top
    `data-[side=top]:data-starting-style:[clip-path:inset(100%_0_0_0_round_var(--radius))] data-[side=top]:data-ending-style:[clip-path:inset(100%_0_0_0_round_var(--radius))]`,
    // side=left
    `data-[side=left]:data-starting-style:[clip-path:inset(0_0_0_100%_round_var(--radius))] data-[side=left]:data-ending-style:[clip-path:inset(0_0_0_100%_round_var(--radius))]`,
    // side=right
    `data-[side=right]:data-starting-style:[clip-path:inset(0_100%_0_0_round_var(--radius))] data-[side=right]:data-ending-style:[clip-path:inset(0_100%_0_0_round_var(--radius))]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:[clip-path:inset(0_0_0_100%_round_var(--radius))] data-[side=inline-start]:data-ending-style:[clip-path:inset(0_0_0_100%_round_var(--radius))]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:[clip-path:inset(0_100%_0_0_round_var(--radius))] data-[side=inline-end]:data-ending-style:[clip-path:inset(0_100%_0_0_round_var(--radius))]`,
  ],
  wipeScale: [
    `[transition-property:clip-path,scale] [will-change:clip-path,scale]`,
    `[clip-path:inset(0_0_0_0_round_var(--radius))] [-webkit-clip-path:inset(0_0_0_0_round_var(--radius))]`,
    `data-starting-style:scale-80 data-ending-style:scale-80`,
    // side=bottom
    `data-[side=bottom]:data-starting-style:[clip-path:inset(0_0_100%_0_round_var(--radius))] data-[side=bottom]:data-ending-style:[clip-path:inset(0_0_100%_0_round_var(--radius))]`,
    // side=top
    `data-[side=top]:data-starting-style:[clip-path:inset(100%_0_0_0_round_var(--radius))] data-[side=top]:data-ending-style:[clip-path:inset(100%_0_0_0_round_var(--radius))]`,
    // side=left
    `data-[side=left]:data-starting-style:[clip-path:inset(0_0_0_100%_round_var(--radius))] data-[side=left]:data-ending-style:[clip-path:inset(0_0_0_100%_round_var(--radius))]`,
    // side=right
    `data-[side=right]:data-starting-style:[clip-path:inset(0_100%_0_0_round_var(--radius))] data-[side=right]:data-ending-style:[clip-path:inset(0_100%_0_0_round_var(--radius))]`,
    // side=inline-start
    `data-[side=inline-start]:data-starting-style:[clip-path:inset(0_0_0_100%_round_var(--radius))] data-[side=inline-start]:data-ending-style:[clip-path:inset(0_0_0_100%_round_var(--radius))]`,
    // side=inline-end
    `data-[side=inline-end]:data-starting-style:[clip-path:inset(0_100%_0_0_round_var(--radius))] data-[side=inline-end]:data-ending-style:[clip-path:inset(0_100%_0_0_round_var(--radius))]`,
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
  inExpo: `duration-[0.25s] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`,
  outExpo: `duration-[0.25s] ease-[cubic-bezier(0.19,1,0.22,1)]`,
  inOutExpo: `duration-[0.25s] ease-[cubic-bezier(1,0,0,1)]`,
  anticipate: `duration-[0.25s] ease-[cubic-bezier(1,-0.4,0.35,0.95)]`,
  quickOut: `duration-[0.25s] ease-out`,
  overshootOut: `duration-[0.25s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`,
  swiftOut: `duration-[0.25s] ease-[cubic-bezier(0.175,0.885,0.32,1.1)]`,
  snappyOut: `duration-[0.25s] ease-[cubic-bezier(0.19,1,0.22,1)]`,
  in: `duration-[0.25s] ease-[cubic-bezier(0.42,0,1,1)]`,
  out: `duration-[0.25s] ease-[cubic-bezier(0,0,0.58,1)]`,
  inOut: `duration-[0.25s] ease-[cubic-bezier(0.42,0,0.58,1)]`,
  outIn: `duration-[0.25s] ease-[cubic-bezier(0.1,0.7,0.9,0.5)]`,
  inQuad: `duration-[0.25s] ease-[cubic-bezier(0.55,0.085,0.68,0.53)]`,
  outQuad: `duration-[0.25s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]`,
  inOutQuad: `duration-[0.32s] ease-[cubic-bezier(0.455,0.03,0.515,0.955)]`,
  inCubic: `duration-[0.25s] ease-[cubic-bezier(0.55,0.055,0.675,0.19)]`,
  outCubic: `duration-[0.25s] ease-[cubic-bezier(0.215,0.61,0.355,1)]`,
  inOutCubic: `duration-[0.25s] ease-[cubic-bezier(0.645,0.045,0.355,1)]`,
  inQuart: `duration-[0.25s] ease-[cubic-bezier(0.895,0.03,0.685,0.22)]`,
  outQuart: `duration-[0.25s] ease-[cubic-bezier(0.165,0.84,0.44,1)]`,
  inOutQuart: `duration-[0.25s] ease-[cubic-bezier(0.77,0,0.175,1)]`,
  inQuint: `duration-[0.25s] ease-[cubic-bezier(0.755,0.05,0.855,0.06)]`,
  outQuint: `duration-[0.25s] ease-[cubic-bezier(0.23,1,0.32,1)]`,
  inOutQuint: `duration-[0.25s] ease-[cubic-bezier(0.86,0,0.07,1)]`,
  inCirc: `duration-[0.25s] ease-[cubic-bezier(0.6,0.04,0.98,0.335)]`,
  outCirc: `duration-[0.25s] ease-[cubic-bezier(0.075,0.82,0.165,1)]`,
  inOutCirc: `duration-[0.25s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)]`,
  inOutBase: `duration-[0.25s] ease-[cubic-bezier(0.25,0.1,0.25,1)]`,
  none: `duration-0 ease-none`,
};

type CSSAnimationPresets = keyof typeof cssAnimationPresets;
type CSSTransitionPresets = keyof typeof cssTransitionPresets;

interface TooltipProviderProps extends TooltipPrimitive.Provider.Props {}

function TooltipProvider({ delay = 300, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

interface TooltipProps extends TooltipPrimitive.Root.Props {}

function Tooltip({ ...props }: TooltipProps) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

interface TooltipTriggerProps extends TooltipPrimitive.Trigger.Props {}

function TooltipTrigger(props: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

interface TooltipPortalProps extends TooltipPrimitive.Portal.Props {}

function TooltipPortal(props: TooltipPortalProps) {
  return <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />;
}

interface TooltipPositionerProps extends TooltipPrimitive.Positioner.Props {}

function TooltipPositioner({
  className,
  side = "top",
  ...rest
}: TooltipPositionerProps) {
  return (
    <TooltipPortal>
      <TooltipPrimitive.Positioner
        side={side}
        data-slot="tooltip-positioner"
        className={cn(
          (side === "inline-end" || side === "inline-start") &&
            "**:data-[slot=tooltip-arrow]:hidden",
          className
        )}
        {...rest}
      />
    </TooltipPortal>
  );
}

interface TooltipPopupProps
  extends TooltipPrimitive.Popup.Props,
    Pick<
      TooltipPositionerProps,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {
  animationPreset?: CSSAnimationPresets;
  transitionPreset?: CSSTransitionPresets;
  reduceMotion?: boolean;
  showArrow?: boolean;
}

function TooltipPopup({
  className,
  animationPreset = "scale",
  transitionPreset = "outQuint",
  reduceMotion = false,
  showArrow = false,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...rest
}: TooltipPopupProps) {
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
    <TooltipPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <TooltipPrimitive.Popup
        data-slot="tooltip-popup"
        className={cn(
          "[--radius:10px]",
          "pointer-events-auto origin-(--transform-origin) bg-popover w-fit text-balance px-2 py-1 shadow-xs border border-border rounded-(--radius) text-[13px] data-instant:duration-0!",
          className,
          cssAnimationConfig,
          cssTransitionConfig,
          showArrow && [
            `before:content-[''] before: z-[-1] before:absolute before:rotate-45 before:w-2 before:h-2 before:bg-popover`,
            side === "top" &&
              `before:-bottom-[4.7px] before:left-1/2 before:-translate-x-1/2 before:border-r before:border-b before:border-border`,
            side === "right" &&
              `before:-left-[4.07px] before:top-1/2 before:-translate-y-1/2 before:border-l before:border-b before:border-border`,
            side === "bottom" &&
              `before:-top-[4.7px] before:left-1/2 before:-translate-x-1/2 before:border-l before:border-t before:border-border`,
            side === "left" &&
              `before:-right-[4.07px] before:top-1/2 before:-translate-y-1/2 before:border-r before:border-t before:border-border`,
            side === "inline-start" &&
              `before:-right-[4.07px] before:top-1/2 before:-translate-y-1/2 before:border-r before:border-t before:border-border`,
            side === "inline-end" &&
              `before:-left-[4.07px] before:top-1/2 before:-translate-y-1/2 before:border-l before:border-b before:border-border`,
          ]
        )}
        {...rest}
      />
    </TooltipPositioner>
  );
}

export { Tooltip, TooltipTrigger, TooltipPopup, TooltipProvider };
