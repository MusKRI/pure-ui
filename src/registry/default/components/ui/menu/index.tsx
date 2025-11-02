"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@/lib/classes";

const animationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  scale: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    animate: {
      opacity: 1,
      transform: "scale(1)",
    },
    exit: {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  wipe: {},
  wipeScale: {},
  motion: {},
  motionBlur: {},
  slideOutside: {},
  slideInside: {},
};

function getWipeAnimation(side: PopupSide) {
  const wipeConfigs = {
    top: {
      initial: {
        clipPath: "inset(100% 0 0 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 12px)",
      },
    },
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
    },
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 12px)",
      },
    },
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
    },
    "inline-start": {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
      },
    },
    "inline-end": {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
      },
    },
  };

  if (side) {
    return wipeConfigs[side];
  }

  return wipeConfigs.bottom;
}

function getWipeScaleAnimation(side: PopupSide) {
  const wipeConfigs = {
    top: {
      initial: {
        clipPath: "inset(100% 0 0 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(100% 0 0 0 round 12px)",
        scale: 0.8,
      },
    },
    right: {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
    },
    bottom: {
      initial: {
        clipPath: "inset(0 0 100% 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 100% 0 round 12px)",
        scale: 0.8,
      },
    },
    left: {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
    },
    "inline-start": {
      initial: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 0 0 100% round 12px)",
        scale: 0.8,
      },
    },
    "inline-end": {
      initial: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
      animate: {
        clipPath: "inset(0 0 0 0 round 12px)",
        scale: 1,
      },
      exit: {
        clipPath: "inset(0 100% 0 0 round 12px)",
        scale: 0.8,
      },
    },
  };

  if (side) {
    return wipeConfigs[side];
  }

  return wipeConfigs.bottom;
}

function getMotionAnimation(side: PopupSide) {
  const motionConfigs = {
    top: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
    },
    right: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
    },
    left: {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
    "inline-end": {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
    "inline-start": {
      initial: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
  };

  if (side) {
    return motionConfigs[side];
  }

  return motionConfigs.bottom;
}

function getMotionBlurAnimation(side: PopupSide) {
  const motionBlurConfigs = {
    top: {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateX(70deg) scale(0.56) translateY(7px)`,
      },
    },
    right: {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateX(0deg) scale(1) translateY(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateX(-40deg) scale(0.56) translateY(-7px)`,
      },
    },
    left: {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
    "inline-start": {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(-40deg) scale(0.56) translateX(-7px)`,
      },
    },
    "inline-end": {
      initial: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
      animate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: `perspective(1000px) rotateY(0deg) scale(1) translateX(0px)`,
      },
      exit: {
        opacity: 0,
        filter: "blur(9px)",
        transform: `perspective(1000px) rotateY(40deg) scale(0.56) translateX(7px)`,
      },
    },
  };

  if (side) {
    return motionBlurConfigs[side];
  }

  return motionBlurConfigs.bottom;
}

function getSlideOutsideAnimation(side: PopupSide) {
  const slideOutsideConfigs = {
    top: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    },
    right: {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
    bottom: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
    },
    left: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    "inline-start": {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    "inline-end": {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
  };

  if (side) {
    return slideOutsideConfigs[side];
  }

  return slideOutsideConfigs.bottom;
}

function getSlideInsideAnimation(side: PopupSide) {
  const slideInsideConfigs = {
    top: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 10 },
    },
    right: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    bottom: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    },
    left: {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
    "inline-start": {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
    "inline-end": {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
  };

  if (side) {
    return slideInsideConfigs[side];
  }

  return slideInsideConfigs.bottom;
}

const transitionPresets = {
  inExpo: {
    type: "tween",
    duration: 0.35,
    ease: [0.95, 0.05, 0.795, 0.035],
  },
  outExpo: {
    type: "tween",
    duration: 0.35,
    ease: [0.19, 1, 0.22, 1],
  },
  inOutExpo: {
    type: "tween",
    duration: 0.35,
    ease: [1, 0, 0, 1],
  },
  anticipate: {
    type: "tween",
    duration: 0.35,
    ease: [1, -0.4, 0.35, 0.95],
  },
  quickOut: {
    type: "tween",
    duration: 0.35,
    ease: [0, 0, 0.2, 1],
  },
  overshootOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.175, 0.885, 0.32, 1.275],
  },
  swiftOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.175, 0.885, 0.32, 1.1],
  },
  snappyOut: {
    type: "tween",
    duration: 0.4,
    ease: [0.19, 1, 0.22, 1],
  },
  in: {
    type: "tween",
    duration: 0.35,
    ease: [0.42, 0, 1, 1],
  },
  out: {
    type: "tween",
    duration: 0.35,
    ease: [0, 0, 0.58, 1],
  },
  inOut: {
    type: "tween",
    duration: 0.25,
    ease: [0.42, 0, 0.58, 1],
  },
  outIn: {
    type: "tween",
    duration: 0.35,
    ease: [0.1, 0.7, 0.9, 0.5],
  },
  inQuad: {
    type: "tween",
    duration: 0.35,
    ease: [0.55, 0.085, 0.68, 0.53],
  },
  outQuad: {
    type: "tween",
    duration: 0.25,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  inOutQuad: {
    type: "tween",
    duration: 0.32,
    ease: [0.455, 0.03, 0.515, 0.955],
  },
  inCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.55, 0.055, 0.675, 0.19],
  },
  outCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.215, 0.61, 0.355, 1],
  },
  inOutCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.645, 0.045, 0.355, 1],
  },
  inQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.895, 0.03, 0.685, 0.22],
  },
  outQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.165, 0.84, 0.44, 1],
  },
  inOutQuart: {
    type: "tween",
    duration: 0.35,
    ease: [0.77, 0, 0.175, 1],
  },
  inQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.755, 0.05, 0.855, 0.06],
  },
  outQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.23, 1, 0.32, 1],
  },
  inOutQuint: {
    type: "tween",
    duration: 0.35,
    ease: [0.86, 0, 0.07, 1],
  },
  inCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.6, 0.04, 0.98, 0.335],
  },
  outCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.075, 0.82, 0.165, 1],
  },
  inOutCirc: {
    type: "tween",
    duration: 0.35,
    ease: [0.785, 0.135, 0.15, 0.86],
  },
  inOutBase: {
    type: "tween",
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const;

type AnimationPreset = keyof typeof animationPresets;
type TransitionPreset = keyof typeof transitionPresets;

type PopupSide = MenuPositionerProps["side"];

type Backdrop = "opaque" | "blur" | "transparent";

interface MenuContextType {
  open: boolean;
  onOpenChange: MenuProps["onOpenChange"];
  modal: MenuProps["modal"];
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

function Menu({
  open,
  defaultOpen,
  onOpenChange,
  modal = false,
  backdrop = "transparent",
  ...props
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? open ?? false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const handleOpenChange: MenuProps["onOpenChange"] = (open, eventDetails) => {
    setIsOpen(open);
    onOpenChange?.(open, eventDetails);
  };

  return (
    <MenuContext.Provider
      value={{ open: isOpen, onOpenChange: handleOpenChange, modal, backdrop }}
    >
      <MenuPrimitive.Root
        data-slot="menu"
        open={isOpen}
        onOpenChange={handleOpenChange}
        modal={modal}
        {...props}
      />
    </MenuContext.Provider>
  );
}

interface MenuTriggerProps
  extends Omit<React.ComponentProps<typeof MenuPrimitive.Trigger>, "render"> {
  asChild?: boolean;
}

function MenuTrigger({
  asChild = false,
  children,
  ...props
}: MenuTriggerProps) {
  if (asChild) {
    return (
      <MenuPrimitive.Trigger
        data-slot="menu-trigger"
        render={children as React.ReactElement<Record<string, unknown>>}
        {...props}
      />
    );
  }
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

interface MenuPortalProps
  extends React.ComponentProps<typeof MenuPrimitive.Portal> {}

function MenuPortal(props: MenuPortalProps) {
  const { open } = useMenu();

  return (
    <AnimatePresence>
      {open && (
        <MenuPrimitive.Portal data-slot="menu-portal" keepMounted {...props} />
      )}
    </AnimatePresence>
  );
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
          "fixed inset-0 bg-black z-100 opacity-40 transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-60",
        backdrop === "blur" &&
          "fixed inset-0 z-100 backdrop-blur-sm transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
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
          "z-100",
          (side === "inline-end" || side === "inline-start") &&
            "[&_[data-slot=menu-arrow]]:hidden",
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
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
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
  const animationConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.none;

    if (animationPreset) {
      if (animationPreset === "wipe") {
        return getWipeAnimation(side);
      }
      if (animationPreset === "wipeScale") {
        return getWipeScaleAnimation(side);
      }
      if (animationPreset === "motion") {
        return getMotionAnimation(side);
      }
      if (animationPreset === "motionBlur") {
        return getMotionBlurAnimation(side);
      }
      if (animationPreset === "slideOutside") {
        return getSlideOutsideAnimation(side);
      }
      if (animationPreset === "slideInside") {
        return getSlideInsideAnimation(side);
      }
      return animationPresets[animationPreset];
    }

    return animationPresets.scale;
  }, [animationPreset, reduceMotion, side]);

  const transitionConfig = useMemo(() => {
    if (reduceMotion) return {};

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }
  }, [transitionPreset, reduceMotion]);

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
          <motion.div
            key="menu-popup"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={transitionConfig}
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover text-popover-foreground p-1 shadow-xs border border-border rounded-[12px] min-w-[8rem]",
              className
            )}
          >
            {showArrow && (
              <MenuArrow>
                <ArrowSvg />
              </MenuArrow>
            )}
            {children}
          </motion.div>
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
        `border-[0.5px] border-transparent relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
        `data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-0 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-accent/70 dark:data-[highlighted]:before:bg-accent data-[highlighted]:text-accent-foreground data-[highlighted]:before:border-border/30 data-[highlighted]:before:border`,
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
  selectedValue?: string;
  activeIcon?: React.ReactNode;
}

const MenuRadioGroupContext = createContext<MenuRadioGroupContextType>({});

interface MenuRadioGroupProps
  extends React.ComponentProps<typeof MenuPrimitive.RadioGroup> {
  activeIcon?: React.ReactNode;
}

function MenuRadioGroup({
  className,
  activeIcon,
  ...props
}: MenuRadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    props.value ?? undefined
  );

  useEffect(() => {
    setSelectedValue(props.value ?? undefined);
  }, [props.value]);

  const handleValueChange: MenuRadioGroupProps["onValueChange"] = (
    value,
    eventDetails
  ) => {
    setSelectedValue(value);
    props.onValueChange?.(value, eventDetails);
  };

  return (
    <MenuRadioGroupContext.Provider value={{ selectedValue, activeIcon }}>
      <LayoutGroup>
        <MenuPrimitive.RadioGroup
          data-slot="menu-radio-group"
          {...props}
          onValueChange={handleValueChange}
        />
      </LayoutGroup>
    </MenuRadioGroupContext.Provider>
  );
}

function MenuRadioItem({
  className,
  children,
  value,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  const { selectedValue, activeIcon } = useContext(MenuRadioGroupContext);
  const isSelected = selectedValue === value;

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
      {isSelected && (
        <motion.span
          layoutId="dropdown-menu-radio-indicator"
          className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center"
          style={{
            willChange: "transform",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <MenuPrimitive.RadioItemIndicator>
            {activeIcon ?? <CircleIcon className="size-2 fill-current" />}
          </MenuPrimitive.RadioItemIndicator>
        </motion.span>
      )}
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

interface MenuSubContextType {
  isOpen?: boolean;
}

const MenuSubContext = createContext<MenuSubContextType>({});

interface MenuSubProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuRoot> {}

function MenuSub(props: MenuSubProps) {
  const [isOpen, setIsOpen] = useState(
    props?.open ?? props?.defaultOpen ?? false
  );

  useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange: MenuSubProps["onOpenChange"] = (
    open,
    eventDetails
  ) => {
    setIsOpen(open);
    props.onOpenChange?.(open, eventDetails);
  };

  return (
    <MenuSubContext.Provider value={{ isOpen }}>
      <MenuPrimitive.SubmenuRoot
        data-slot="menu-submenu"
        onOpenChange={handleOpenChange}
        {...props}
      />
    </MenuSubContext.Provider>
  );
}

interface MenuSubTriggerProps
  extends React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger> {}

function MenuSubTrigger({ className, children, ...rest }: MenuSubTriggerProps) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      className={cn(
        `text-foreground border-[0.5px] border-transparent relative flex cursor-default items-center gap-2 rounded-[10px] px-2 py-1.5 text-sm`,
        `hover:bg-accent/70 focus-visible:bg-accent/70 dark:hover:bg-accent dark:focus-visible:bg-accent hover:text-accent-foreground hover:border-border/30 data-[popup-open]:bg-accent/70 data-[popup-open]:text-accent-foreground data-[popup-open]:border-border/30 outline-hidden`,
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
  const { isOpen } = useContext(MenuSubContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuPrimitive.Portal
          data-slot="menu-submenu-portal"
          keepMounted
          {...props}
        />
      )}
    </AnimatePresence>
  );
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
        data-slot="menu-sub-positioner"
        className={cn(
          "z-100",
          (side === "inline-end" || side === "inline-start") &&
            "[&_[data-slot=menu-arrow]]:hidden",
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
          <motion.div
            key="menu-sub-content"
            variants={animationPresets.scale}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.1 }}
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover text-popover-foreground p-1 shadow-sm border border-border/60 rounded-[12px] !min-w-[max(8rem,calc(var(--anchor-width)-1rem))]",
              className
            )}
          >
            {children}
          </motion.div>
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
