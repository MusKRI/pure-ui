"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/classes";

const animationPresets = {
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
};

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

interface TooltipContextType {
  open: boolean;
  onOpenChange: TooltipProps["onOpenChange"];
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

function useTooltip() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
}

interface TooltipDefaultProviderProps
  extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

function TooltipDefaultProvider(props: TooltipDefaultProviderProps) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />;
}

interface TooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root>,
    Pick<TooltipDefaultProviderProps, "delay" | "closeDelay"> {}

function Tooltip({
  open,
  defaultOpen,
  onOpenChange,
  delay = 10,
  closeDelay = 10,
  ...props
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const handleOpenChange: TooltipProps["onOpenChange"] = (
    open,
    eventDetails
  ) => {
    setIsOpen(open);
    onOpenChange?.(open, eventDetails);
  };

  return (
    <TooltipContext.Provider
      value={{ open: isOpen, onOpenChange: handleOpenChange }}
    >
      <TooltipDefaultProvider delay={delay} closeDelay={closeDelay}>
        <TooltipPrimitive.Root
          data-slot="tooltip"
          open={isOpen}
          onOpenChange={handleOpenChange}
          {...props}
        />
      </TooltipDefaultProvider>
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps
  extends Omit<
    React.ComponentProps<typeof TooltipPrimitive.Trigger>,
    "render"
  > {
  asChild?: boolean;
}

function TooltipTrigger({
  asChild = false,
  children,
  ...props
}: TooltipTriggerProps) {
  if (asChild) {
    return (
      <TooltipPrimitive.Trigger
        data-slot="tooltip-trigger"
        render={children as React.ReactElement<Record<string, unknown>>}
        {...props}
      />
    );
  }

  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      {...props}
      children={children}
    />
  );
}

interface TooltipPortalProps
  extends React.ComponentProps<typeof TooltipPrimitive.Portal> {}

function TooltipPortal(props: TooltipPortalProps) {
  const { open } = useTooltip();

  return (
    <AnimatePresence>
      {open && (
        <TooltipPrimitive.Portal
          data-slot="tooltip-portal"
          keepMounted
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

interface TooltipPositionerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Positioner> {}

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
            "[&_[data-slot=tooltip-arrow]]:hidden",
          className
        )}
        {...rest}
      />
    </TooltipPortal>
  );
}

interface TooltipArrowProps
  extends React.ComponentProps<typeof TooltipPrimitive.Arrow> {}

function TooltipArrow({ className, ...rest }: TooltipArrowProps) {
  return (
    <TooltipPrimitive.Arrow
      data-slot="tooltip-arrow"
      className={cn(
        "data-[side=bottom]:top-[-9px] data-[side=left]:right-[-14px] data-[side=left]:rotate-90 data-[side=right]:left-[-12px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180",
        className
      )}
      {...rest}
    />
  );
}

interface TooltipPopupProps
  extends React.ComponentProps<typeof TooltipPrimitive.Popup>,
    Pick<
      TooltipPositionerProps,
      "side" | "sideOffset" | "align" | "alignOffset"
    > {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  reduceMotion?: boolean;
  showArrow?: boolean;
}

function TooltipPopup({
  className,
  animationPreset = "scale",
  transitionPreset = "snappyOut",
  reduceMotion = false,
  showArrow = false,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...rest
}: TooltipPopupProps) {
  const animationConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.scale;

    if (animationPreset) {
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
    <TooltipPositioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <TooltipPrimitive.Popup
        data-slot="tooltip-popup"
        render={
          <motion.div
            key="tooltip-popup"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={transitionConfig}
            className={cn(
              "pointer-events-auto origin-(--transform-origin) bg-popover px-2 py-1 shadow-xs border border-border rounded-lg text-sm",
              className,
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
          >
            {children}
          </motion.div>
        }
        {...rest}
      />
    </TooltipPositioner>
  );
}

export { Tooltip, TooltipTrigger, TooltipPopup };
