"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Popover as PopoverPrimitive } from "@base-ui-components/react/popover";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/classes";

const animationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
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
  "slide-inside": {},
  "slide-outside": {},
  wipe: {},
  "wipe-scale": {},
  motion: {},
};

function getSlideOutsideAnimation(side: PopoverSide) {
  const slideOutsideConfig = {
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
    "inline-end": {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    "inline-start": {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
  };

  if (side) {
    return slideOutsideConfig[side];
  }

  return slideOutsideConfig.bottom;
}

function getSlideInsideAnimation(side: PopoverSide) {
  const slideInsideConfig = {
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
    "inline-end": {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 },
    },
    "inline-start": {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 10 },
    },
  };

  if (side) {
    return slideInsideConfig[side];
  }

  return slideInsideConfig.bottom;
}

function getWipeAnimation(side: PopoverSide) {
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
    "inline-end": {
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

function getWipeScaleAnimation(side: PopoverSide) {
  const wipeScaleConfigs = {
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
        opacity: 0.4,
      },
    },
    "inline-end": {
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
    return wipeScaleConfigs[side];
  }

  return wipeScaleConfigs.bottom;
}

function getMotionAnimation(side: PopoverSide) {
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
    "inline-start": {
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
  };

  if (side) {
    return motionConfigs[side];
  }

  return motionConfigs.bottom;
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
    duration: 0.35,
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

type PopoverSide = PopoverPositionerProps["side"];

type Backdrop = "opaque" | "blur" | "transparent";

interface PopoverContextType {
  open: boolean;
  onOpenChange: PopoverProps["onOpenChange"];
  modal: PopoverProps["modal"];
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

function Popover({
  open,
  defaultOpen,
  onOpenChange,
  modal = false,
  backdrop = "transparent",
  delay = 100,
  ...props
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? open ?? false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const handleOpenChange: PopoverProps["onOpenChange"] = (
    open,
    eventDetails
  ) => {
    setIsOpen(open);
    onOpenChange?.(open, eventDetails);
  };

  return (
    <PopoverContext.Provider
      value={{
        open: isOpen,
        onOpenChange: handleOpenChange,
        modal,
        backdrop,
      }}
    >
      <PopoverPrimitive.Root
        data-slot="popover"
        open={isOpen}
        onOpenChange={handleOpenChange}
        modal={modal}
        delay={delay}
        {...props}
      />
    </PopoverContext.Provider>
  );
}

interface PopoverTriggerProps
  extends Omit<
    React.ComponentProps<typeof PopoverPrimitive.Trigger>,
    "render"
  > {
  asChild?: boolean;
}

function PopoverTrigger({
  asChild = false,
  children,
  ...props
}: PopoverTriggerProps) {
  if (asChild) {
    return (
      <PopoverPrimitive.Trigger
        data-slot="popover-trigger"
        render={children as React.ReactElement<Record<string, unknown>>}
        {...props}
      />
    );
  }
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

interface PopoverPortalProps
  extends React.ComponentProps<typeof PopoverPrimitive.Portal> {}

function PopoverPortal(props: PopoverPortalProps) {
  const { open } = usePopover();

  return (
    <AnimatePresence>
      {open && (
        <PopoverPrimitive.Portal
          data-slot="popover-portal"
          keepMounted
          {...props}
        />
      )}
    </AnimatePresence>
  );
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
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
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
  const animationConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.none;

    if (animationPreset) {
      if (animationPreset === "slide-outside") {
        return getSlideOutsideAnimation(side);
      }

      if (animationPreset === "slide-inside") {
        return getSlideInsideAnimation(side);
      }

      if (animationPreset === "wipe") {
        return getWipeAnimation(side);
      }

      if (animationPreset === "wipe-scale") {
        return getWipeScaleAnimation(side);
      }

      if (animationPreset === "motion") {
        return getMotionAnimation(side);
      }

      return animationPresets[animationPreset];
    }

    return animationPresets.fade;
  }, [animationPreset, reduceMotion, side]);

  const transitionConfig = useMemo(() => {
    if (reduceMotion) return {};

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }
  }, [transitionPreset, reduceMotion]);

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
          <motion.div
            key="popover-popup"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={transitionConfig}
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover px-4 py-4 shadow-sm border border-border/60 rounded-lg",
              className
            )}
          >
            {showArrow && (
              <PopoverArrow>
                <ArrowSvg />
              </PopoverArrow>
            )}
            {children}
          </motion.div>
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
