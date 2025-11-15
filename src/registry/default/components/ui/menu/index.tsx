"use client";

import { createContext, useContext, useMemo } from "react";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

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

interface MenuContextType {
  backdrop?: Backdrop;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

interface MenuProps extends React.ComponentProps<typeof MenuPrimitive.Root> {
  backdrop?: Backdrop;
}

function Menu({ backdrop = "transparent", ...props }: MenuProps) {
  return (
    <MenuContext.Provider value={{ backdrop }}>
      <MenuPrimitive.Root data-slot="menu" {...props} />
    </MenuContext.Provider>
  );
}

interface MenuTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.Trigger> {}

function MenuTrigger({ ...props }: MenuTriggerProps) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

interface MenuPortalProps
  extends React.ComponentProps<typeof MenuPrimitive.Portal> {}

function MenuPortal(props: MenuPortalProps) {
  return <MenuPrimitive.Portal data-slot="menu-portal" {...props} />;
}

interface MenuBackdropProps
  extends React.ComponentProps<typeof MenuPrimitive.Backdrop> {}

function MenuBackdrop({ className, ...props }: MenuBackdropProps) {
  const { backdrop = "transparent" } = useMenu();

  return (
    <MenuPrimitive.Backdrop
      data-slot="menu-backdrop"
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

interface MenuPositionerProps
  extends React.ComponentProps<typeof MenuPrimitive.Positioner> {}

function MenuPositioner({
  sideOffset = 4,
  side = "bottom",
  className,
  ...rest
}: MenuPositionerProps) {
  return (
    <MenuPortal>
      <MenuBackdrop />
      <MenuPrimitive.Positioner
        sideOffset={sideOffset}
        side={side}
        data-slot="menu-positioner"
        className={cn(
          "z-100 [--item-inline-padding:8px] [--item-block-padding:6px]",
          (side === "inline-end" || side === "inline-start") &&
            "**:data-[slot=menu-arrow]:hidden",
          className
        )}
        {...rest}
      />
    </MenuPortal>
  );
}

interface MenuArrowProps
  extends React.ComponentProps<typeof MenuPrimitive.Arrow> {}

function MenuArrow({ className, ...rest }: MenuArrowProps) {
  return (
    <MenuPrimitive.Arrow
      data-slot="menu-arrow"
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

interface MenuPopupProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup>,
    Pick<MenuPositionerProps, "side" | "sideOffset" | "align" | "alignOffset"> {
  animationPreset?: CSSAnimationPresets;
  transitionPreset?: CSSTransitionPresets;
  reduceMotion?: boolean;
  showArrow?: boolean;
}

function MenuPopup({
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
}: MenuPopupProps) {
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
    <MenuPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <MenuPrimitive.Popup
        data-slot="menu-popup"
        render={
          <div
            key="menu-popup"
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover text-popover-foreground p-1 shadow-xs border border-border/60 rounded-[12px] w-[max(var(--anchor-width),226px)]",
              className,
              cssTransitionConfig,
              cssAnimationConfig
            )}
          >
            {showArrow && (
              <MenuArrow>
                <ArrowSvg />
              </MenuArrow>
            )}
            {children}
          </div>
        }
        {...rest}
      />
    </MenuPositioner>
  );
}

interface MenuGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.Group> {}

function MenuGroup(props: MenuGroupProps) {
  return <MenuPrimitive.Group data-slot="menu-group" {...props} />;
}

interface MenuGroupLabelProps
  extends React.ComponentProps<typeof MenuPrimitive.GroupLabel> {}

function MenuGroupLabel({ className, ...rest }: MenuGroupLabelProps) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-group-label"
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
      {...rest}
    />
  );
}

function MenuLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menu-label"
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

interface MenuItemProps
  extends React.ComponentProps<typeof MenuPrimitive.Item> {}

function MenuItem({ className, ...rest }: MenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(
        `border-[0.5px] border-transparent relative flex cursor-default items-center gap-2 rounded-[10px] px-(--item-inline-padding) py-(--item-block-padding) text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        `data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:-inset-px data-highlighted:before:z-[-1] data-highlighted:before:rounded-[10px] data-highlighted:before:bg-accent/70 dark:data-highlighted:before:bg-accent data-highlighted:text-accent-foreground data-highlighted:before:border-border/30 data-highlighted:before:border`,
        className
      )}
      {...rest}
    />
  );
}

function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      className={cn("bg-border/30 -mx-1 my-1 h-[0.5px]", className)}
      {...props}
    />
  );
}

interface MenuCheckboxItemProps
  extends React.ComponentProps<typeof MenuPrimitive.CheckboxItem> {}

function MenuCheckboxItem({
  className,
  children,
  ...rest
}: MenuCheckboxItemProps) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      className={cn(
        `text-foreground border-[0.5px] border-transparent relative  flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm`,
        `hover:bg-accent/70 focus-visible:bg-accent/70 dark:hover:bg-accent dark:focus-visible:bg-accent hover:text-accent-foreground hover:border-border/30 outline-hidden`,
        className
      )}
      {...rest}
    >
      <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className="size-4" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

interface MenuRadioGroupContextType {
  activeIcon?: React.ReactNode;
}

const MenuRadioGroupContext = createContext<MenuRadioGroupContextType>({});

interface MenuRadioGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioGroup> {
  activeIcon?: React.ReactNode;
}

function MenuRadioGroup({ activeIcon, ...props }: MenuRadioGroupProps) {
  return (
    <MenuRadioGroupContext.Provider value={{ activeIcon }}>
      <MenuPrimitive.RadioGroup data-slot="menu-radio-group" {...props} />
    </MenuRadioGroupContext.Provider>
  );
}

function MenuRadioItem({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  const { activeIcon } = useContext(MenuRadioGroupContext);

  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-item"
      className={cn(
        `text-foreground border-[0.5px] border-transparent relative  flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm`,
        `hover:bg-accent/70 focus-visible:bg-accent/70 dark:hover:bg-accent dark:focus-visible:bg-accent hover:text-accent-foreground hover:border-border/30 outline-hidden`,
        className
      )}
      value={value}
      {...props}
    >
      {children}
      <span
        className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center"
        style={{
          willChange: "transform",
        }}
      >
        <MenuPrimitive.RadioItemIndicator>
          {activeIcon ?? <CircleIcon className="size-2 fill-current" />}
        </MenuPrimitive.RadioItemIndicator>
      </span>
    </MenuPrimitive.RadioItem>
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

interface MenuSubProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuRoot> {}

function MenuSub(props: MenuSubProps) {
  return <MenuPrimitive.SubmenuRoot data-slot="menu-submenu" {...props} />;
}

interface MenuSubTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> {}

function MenuSubTrigger({ className, children, ...rest }: MenuSubTriggerProps) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      className={cn(
        `text-foreground border-[0.5px] border-transparent relative flex cursor-default items-center gap-2 rounded-[10px] px-(--item-inline-padding) py-(--item-block-padding) text-sm`,
        `hover:bg-accent/70 focus-visible:bg-accent/70 dark:hover:bg-accent dark:focus-visible:bg-accent hover:text-accent-foreground hover:border-border/30 data-popup-open:bg-accent/70 data-popup-open:text-accent-foreground data-popup-open:border-border/30 outline-hidden`,
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

interface MenuSubmenuPortalProps
  extends React.ComponentProps<typeof MenuPrimitive.Portal> {}

function MenuSubmenuPortal(props: MenuSubmenuPortalProps) {
  return <MenuPrimitive.Portal data-slot="menu-submenu-portal" {...props} />;
}

interface MenuSubPositionerProps
  extends React.ComponentProps<typeof MenuPrimitive.Positioner> {}

function MenuSubPositioner({
  sideOffset = 4,
  side = "right",
  className,
  ...rest
}: MenuSubPositionerProps) {
  return (
    <MenuSubmenuPortal>
      <MenuPrimitive.Positioner
        sideOffset={sideOffset}
        side={side}
        data-slot="menu-sub-positioner "
        className={cn(
          "z-100 [--item-inline-padding:8px] [--item-block-padding:6px] -top-[calc(var(--item-block-padding)-1.8px)]!",
          (side === "inline-end" || side === "inline-start") &&
            "**:data-[slot=menu-arrow]:hidden",
          className
        )}
        {...rest}
      />
    </MenuSubmenuPortal>
  );
}

interface MenuSubPopupProps
  extends React.ComponentProps<typeof MenuPrimitive.Popup>,
    Pick<
      MenuPositionerProps,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {}

function MenuSubPopup({
  className,
  children,
  side = "right",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  ...rest
}: MenuSubPopupProps) {
  return (
    <MenuSubPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <MenuPrimitive.Popup
        data-slot="menu-sub-content"
        render={
          <div
            key="menu-sub-content"
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover text-popover-foreground p-1 shadow-sm border border-border/60 rounded-[12px] min-w-[max(8rem,calc(var(--anchor-width)-1rem))]!",
              cssAnimationPresets.scale,
              cssTransitionPresets.snappyOut,
              className
            )}
          >
            {children}
          </div>
        }
        {...rest}
      />
    </MenuSubPositioner>
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
  MenuShortcut,
  MenuLabel,
};
