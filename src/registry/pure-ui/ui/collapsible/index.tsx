"use client";

import { useMemo } from "react";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

import { cn } from "@/lib/classes";

const cssAnimationPresets = {
  none: "transition-none",
  scale: [
    `[transition-property:scale,opacity,height] [will-change:scale,opacity,height] origin-top`,
    `data-starting-style:scale-80 data-starting-style:opacity-0 data-starting-style:h-0 data-ending-style:opacity-0 data-ending-style:h-0 data-ending-style:scale-80`,
  ],
  fade: [
    `[transition-property:opacity,height] [will-change:opacity,height]`,
    `data-starting-style:opacity-0 data-starting-style:h-0 data-ending-style:opacity-0 data-ending-style:h-0`,
  ],
  slideOutside: [
    `[transition-property:translate,opacity,height] [will-change:translate,opacity,height]`,
    `data-starting-style:opacity-0 data-starting-style:translate-y-[18px] data-ending-style:translate-y-[18px] data-ending-style:opacity-0 data-ending-style:h-0 data-starting-style:h-0 `,
  ],
  slideInside: [
    `[transition-property:translate,opacity,height] [will-change:translate,opacity,height]`,
    `data-starting-style:opacity-0 data-starting-style:translate-y-[-18px] data-ending-style:translate-y-[-18px] data-ending-style:opacity-0 data-ending-style:h-0 data-starting-style:h-0 `,
  ],
  motion: [
    `[transition-property:translate,scale,opacity,rotateX,rotateY,transform,height] [will-change:translate,scale,opacity,rotateX,rotateY,transform,height] `,
    `[transform:perspective(1000px)] origin-top`,
    `data-starting-style:translate-y-[7px] data-starting-style:opacity-0 data-starting-style:scale-[0.26] data-starting-style:rotate-x-[70deg] data-ending-style:translate-y-[7px] data-ending-style:opacity-0 data-ending-style:scale-[0.26] data-ending-style:rotate-x-[70deg] data-starting-style:h-0 data-ending-style:h-0`,
  ],
  motionBlur: [
    `[transition-property:translate,scale,opacity,rotateX,rotateY,transform,filter,height] [will-change:translate,scale,opacity,rotateX,rotateY,transform,filter,height] origin-top`,
    `[transform:perspective(1000px)]`,
    `data-starting-style:blur-[9px] data-ending-style:blur-[9px]`,
    `data-starting-style:translate-y-[7px] data-starting-style:opacity-0 data-starting-style:scale-[0.26] data-starting-style:rotate-x-[70deg] data-ending-style:translate-y-[7px] data-ending-style:opacity-0 data-ending-style:scale-[0.26] data-ending-style:rotate-x-[70deg] data-starting-style:h-0 data-ending-style:h-0`,
  ],
  perspective: [
    `[transition-property:opacity,rotateX,rotateY,transform,height] [will-change:opacity,rotateX,rotateY,transform,height]`,
    `[transform:perspective(1000px)] origin-top`,
    `data-starting-style:h-0 data-ending-style:h-0`,
    `data-starting-style:opacity-0 data-ending-style:opacity-0`,
    `data-starting-style:-rotate-x-[90deg] data-ending-style:-rotate-x-[90deg]`,
  ],
  perspectiveBlur: [
    `[transition-property:opacity,rotateX,rotateY,transform,height,filter] [will-change:opacity,rotateX,rotateY,transform,height,filter]`,
    `[transform:perspective(1000px)] origin-top`,
    `data-starting-style:h-0 data-ending-style:h-0`,
    `data-starting-style:opacity-0 data-ending-style:opacity-0`,
    `data-starting-style:-rotate-x-[90deg] data-ending-style:-rotate-x-[90deg]`,
    `data-starting-style:blur-[9px] data-ending-style:blur-[9px]`,
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

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn("cursor-pointer", className)}
      {...props}
    />
  );
}

interface CollapsiblePanelProps extends CollapsiblePrimitive.Panel.Props {
  animationPreset?: CSSAnimationPresets;
  transitionPreset?: CSSTransitionPresets;
  reduceMotion?: boolean;
}

function CollapsiblePanel({
  className,
  animationPreset = "fade",
  transitionPreset = "outQuint",
  reduceMotion = false,
  ...props
}: CollapsiblePanelProps) {
  const cssAnimationConfig = useMemo(() => {
    if (reduceMotion) return "none";

    if (animationPreset) {
      return cssAnimationPresets[animationPreset];
    }

    return cssAnimationPresets.scale;
  }, [animationPreset, reduceMotion]);

  const cssTransitionConfig = useMemo(() => {
    if (reduceMotion) return "none";

    if (transitionPreset) {
      return cssTransitionPresets[transitionPreset];
    }

    return cssTransitionPresets.snappyOut;
  }, [transitionPreset, reduceMotion]);

  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-panel"
      className={cn(
        "[&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) overflow-hidden",
        cssAnimationConfig,
        cssTransitionConfig,
        className
      )}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
