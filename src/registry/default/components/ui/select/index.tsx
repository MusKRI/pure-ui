"use client";

import { createContext, useContext, useMemo } from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";

import { cn } from "@/lib/classes";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

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

interface SelectContextType {
  backdrop?: Backdrop;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

function useSelect() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a SelectProvider");
  }
  return context;
}

interface SelectRootProps
  extends React.ComponentProps<typeof SelectPrimitive.Root> {
  backdrop?: Backdrop;
}

function Select({ backdrop = "transparent", ...props }: SelectRootProps) {
  return (
    <SelectContext.Provider value={{ backdrop }}>
      <SelectPrimitive.Root data-slot="select" {...props} />
    </SelectContext.Provider>
  );
}

interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger> {}

function SelectTrigger({ className, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "group/select-trigger inline-flex h-fit items-center justify-between gap-3 rounded-lg border border-input select-none touch-none text-foreground shadow-xs focus-visible:outline-none focus-visible:border-primary text-sm px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(2)-1px)] bg-background dark:bg-input/40 hover:bg-input/20 dark:hover:bg-input/50 transition-colors ease-out min-w-36",
        className
      )}
      {...props}
    />
  );
}

interface SelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value> {
  placeholder?: string;
}

function SelectValue({
  className,
  placeholder = "Select...",
  ...props
}: SelectValueProps) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...props}
      render={(renderProps, state) => {
        const newValue = state.value;
        const isNull = !newValue && !renderProps.children;

        if (isNull) {
          return (
            <span
              {...renderProps}
              className={cn("w-full text-foreground/60", className)}
            >
              {placeholder}
            </span>
          );
        }

        return (
          <span
            key={newValue}
            {...renderProps}
            className={cn("w-full fadeIn truncate", className)}
          />
        );
      }}
    />
  );
}

interface SelectIconProps
  extends React.ComponentProps<typeof SelectPrimitive.Icon> {}

function SelectIcon({ className, ...props }: SelectIconProps) {
  return (
    <SelectPrimitive.Icon
      data-slot="select-icon"
      className={cn("size-3.5 text-foreground/72 shrink-0", className)}
      {...props}
    />
  );
}

interface SelectPortalProps
  extends React.ComponentProps<typeof SelectPrimitive.Portal> {}

function SelectPortal(props: SelectPortalProps) {
  return <SelectPrimitive.Portal data-slot="select-portal" {...props} />;
}

interface SelectBackdropProps
  extends React.ComponentProps<typeof SelectPrimitive.Backdrop> {}

function SelectBackdrop({ className, ...props }: SelectBackdropProps) {
  const { backdrop = "transparent" } = useSelect();

  return (
    <SelectPrimitive.Backdrop
      data-slot="select-backdrop"
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

interface SelectPositionerProps
  extends React.ComponentProps<typeof SelectPrimitive.Positioner> {}

function SelectPositioner({
  sideOffset = 4,
  side = "bottom",
  className,
  alignItemWithTrigger = true,
  ...props
}: SelectPositionerProps) {
  return (
    <SelectPortal>
      <SelectBackdrop />
      <SelectPrimitive.Positioner
        sideOffset={sideOffset}
        side={side}
        alignItemWithTrigger={alignItemWithTrigger}
        data-slot="select-positioner"
        className={cn("z-100 select-none outline-none", className)}
        {...props}
      />
    </SelectPortal>
  );
}

interface SelectArrowProps
  extends React.ComponentProps<typeof SelectPrimitive.Arrow> {}

function SelectArrow({ className, ...rest }: SelectArrowProps) {
  return (
    <SelectPrimitive.Arrow
      data-slot="select-arrow"
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

interface SelectPopupProps
  extends React.ComponentProps<typeof SelectPrimitive.Popup>,
    Pick<
      SelectPositionerProps,
      "side" | "sideOffset" | "align" | "alignOffset" | "alignItemWithTrigger"
    > {
  animationPreset?: CSSAnimationPresets;
  transitionPreset?: CSSTransitionPresets;
  reduceMotion?: boolean;
  showArrow?: boolean;
}

function SelectPopup({
  className,
  animationPreset = "scale",
  transitionPreset = "outQuint",
  reduceMotion = false,
  showArrow = false,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = false,
  children,
  ...rest
}: SelectPopupProps) {
  const cssAnimationConfig = useMemo(() => {
    if (reduceMotion) return "";

    if (animationPreset) {
      return cssAnimationPresets[animationPreset];
    }

    return cssAnimationPresets.scale;
  }, [animationPreset, reduceMotion, side]);

  const cssTransitionConfig = useMemo(() => {
    if (reduceMotion) return "";

    if (transitionPreset) {
      return cssTransitionPresets[transitionPreset];
    }

    return cssTransitionPresets.snappyOut;
  }, [transitionPreset, reduceMotion, side]);

  return (
    <SelectPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      alignItemWithTrigger={alignItemWithTrigger}
    >
      <SelectPrimitive.Popup
        data-slot="select-popup"
        render={(renderProps) => {
          if (alignItemWithTrigger) {
            return (
              <div
                key="select-popup"
                {...renderProps}
                className={cn(
                  "pointer-events-auto origin-(--transform-origin)",
                  className
                )}
                style={{
                  ...renderProps.style,
                }}
              >
                {showArrow && (
                  <SelectArrow>
                    <ArrowSvg />
                  </SelectArrow>
                )}
                <SelectPrimitive.ScrollUpArrow
                  className={cn(
                    "top-0 z-50 flex h-6 w-full cursor-default items-center justify-center",
                    "before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[140%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-popover before:from-50%"
                  )}
                  data-slot="select-scroll-up-arrow"
                >
                  <ChevronUpIcon className="relative size-4" />
                </SelectPrimitive.ScrollUpArrow>
                {children}
                <SelectPrimitive.ScrollDownArrow
                  className={cn(
                    "bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center",
                    "before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[140%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-popover before:from-50%"
                  )}
                  data-slot="select-scroll-down-arrow"
                >
                  <ChevronDownIcon className="relative size-4" />
                </SelectPrimitive.ScrollDownArrow>
              </div>
            );
          }

          return (
            <div
              key="select-popup"
              {...renderProps}
              className={cn(
                "pointer-events-auto origin-(--transform-origin)",
                className,
                renderProps.className,
                cssTransitionConfig,
                cssAnimationConfig
              )}
            >
              {showArrow && (
                <SelectArrow>
                  <ArrowSvg />
                </SelectArrow>
              )}
              <SelectPrimitive.ScrollUpArrow
                className={cn(
                  "top-0 z-50 flex h-6 w-full cursor-default items-center justify-center",
                  "before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[140%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-linear-to-b before:from-popover before:from-50%"
                )}
                data-slot="select-scroll-up-arrow"
              >
                <ChevronUpIcon className="relative size-4" />
              </SelectPrimitive.ScrollUpArrow>
              {children}
              <SelectPrimitive.ScrollDownArrow
                className={cn(
                  "bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center",
                  "before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[140%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-linear-to-t before:from-popover before:from-50%"
                )}
                data-slot="select-scroll-down-arrow"
              >
                <ChevronDownIcon className="relative size-4" />
              </SelectPrimitive.ScrollDownArrow>
            </div>
          );
        }}
        {...rest}
      />
    </SelectPositioner>
  );
}

interface SelectListProps
  extends React.ComponentProps<typeof SelectPrimitive.List> {}

function SelectList({ className, ...props }: SelectListProps) {
  return (
    <SelectPrimitive.List
      data-slot="select-list"
      className={cn(
        "relative overflow-y-auto p-1 block h-full rounded-lg border bg-popover max-h-[min(var(--available-height),260px)] min-w-(--anchor-width) [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    />
  );
}

interface SelectItemProps
  extends React.ComponentProps<typeof SelectPrimitive.Item> {}

function SelectItem({ className, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "flex relative min-w-(--anchor-width) cursor-default items-center gap-2 py-1.5 px-4 text-sm outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width))]",
        `data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-0 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-accent/70 dark:data-highlighted:before:bg-accent data-highlighted:text-accent-foreground data-highlighted:before:border-border/30 data-highlighted:before:border`,
        className
      )}
      {...props}
    />
  );
}

interface SelectItemTextProps
  extends React.ComponentProps<typeof SelectPrimitive.ItemText> {}

function SelectItemText({ className, ...props }: SelectItemTextProps) {
  return (
    <SelectPrimitive.ItemText
      data-slot="select-item-text"
      className={cn("flex-1", className)}
      {...props}
    />
  );
}

interface SelectItemIndicatorProps
  extends React.ComponentProps<typeof SelectPrimitive.ItemIndicator> {}

function SelectItemIndicator({
  className,
  ...props
}: SelectItemIndicatorProps) {
  return (
    <SelectPrimitive.ItemIndicator
      data-slot="select-item-indicator"
      className={cn("min-w-fit ml-auto", className)}
      {...props}
    />
  );
}

interface SelectGroupProps
  extends React.ComponentProps<typeof SelectPrimitive.Group> {}

function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

interface SelectGroupLabelProps
  extends React.ComponentProps<typeof SelectPrimitive.GroupLabel> {}

function SelectGroupLabel({ ...props }: SelectGroupLabelProps) {
  return (
    <SelectPrimitive.GroupLabel data-slot="select-group-label" {...props} />
  );
}

function SelectScrollUpArrow(
  props: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>
) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      {...props}
    />
  );
}

function SelectScrollDownArrow(
  props: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>
) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      {...props}
    />
  );
}

interface SelectSeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

function SelectSeparator({ ...props }: SelectSeparatorProps) {
  return <SelectPrimitive.Separator data-slot="select-separator" {...props} />;
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPopup,
  SelectList,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectGroupLabel,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
  SelectSeparator,
};
