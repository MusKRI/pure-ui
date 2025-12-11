"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

import { cn } from "@/lib/classes";

const animationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: `var(--accordion-panel-height)` },
    exit: { opacity: 0, height: 0 },
  },
  perspective: {
    initial: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: 0,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: `var(--accordion-panel-height)`,
    },
    exit: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: 0,
    },
  },
  perspectiveBlur: {
    initial: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: 0,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: `var(--accordion-panel-height)`,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top center",
      transformPerspective: 1000,
      height: 0,
      filter: "blur(10px)",
    },
  },
  scale: {
    initial: {
      opacity: 0,
      scale: 0.9,
      transformOrigin: "center",
      height: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transformOrigin: "center",
      height: `var(--accordion-panel-height)`,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transformOrigin: "center",
      height: 0,
    },
  },
  slide: {
    initial: {
      opacity: 0,
      height: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      height: `var(--accordion-panel-height)`,
      y: 0,
    },
    exit: {
      opacity: 0,
      height: 0,
      y: 10,
    },
  },
} as const;

const transitionPresets = {
  inExpo: {
    type: "tween",
    duration: 0.25,
    ease: [0.95, 0.05, 0.795, 0.035],
  },
  outExpo: {
    type: "tween",
    duration: 0.25,
    ease: [0.19, 1, 0.22, 1],
  },
  inOutExpo: {
    type: "tween",
    duration: 0.235,
    ease: [1, 0, 0, 1],
  },
  quickOut: {
    type: "tween",
    duration: 0.2,
    ease: [0, 0, 0.2, 1],
  },
  snappyOut: {
    type: "tween",
    duration: 0.35,
    ease: [0.19, 1, 0.22, 1],
  },
  in: {
    type: "tween",
    duration: 0.235,
    ease: [0.42, 0, 1, 1],
  },
  out: {
    type: "tween",
    duration: 0.185,
    ease: [0, 0, 0.58, 1],
  },
  inOut: {
    type: "tween",
    duration: 0.225,
    ease: [0.42, 0, 0.58, 1],
  },
  outIn: {
    type: "tween",
    duration: 0.235,
    ease: [0.1, 0.7, 0.9, 0.5],
  },
  inQuad: {
    type: "tween",
    duration: 0.235,
    ease: [0.55, 0.085, 0.68, 0.53],
  },
  outQuad: {
    type: "tween",
    duration: 0.25,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  inOutQuad: {
    type: "tween",
    duration: 0.22,
    ease: [0.455, 0.03, 0.515, 0.955],
  },
  inCubic: {
    type: "tween",
    duration: 0.26,
    ease: [0.55, 0.055, 0.675, 0.19],
  },
  outCubic: {
    type: "tween",
    duration: 0.235,
    ease: [0.215, 0.61, 0.355, 1],
  },
  inOutCubic: {
    type: "tween",
    duration: 0.35,
    ease: [0.645, 0.045, 0.355, 1],
  },
  inQuart: {
    type: "tween",
    duration: 0.25,
    ease: [0.895, 0.03, 0.685, 0.22],
  },
  outQuart: {
    type: "tween",
    duration: 0.25,
    ease: [0.165, 0.84, 0.44, 1],
  },
  inOutQuart: {
    type: "tween",
    duration: 0.25,
    ease: [0.77, 0, 0.175, 1],
  },
  inQuint: {
    type: "tween",
    duration: 0.25,
    ease: [0.755, 0.05, 0.855, 0.06],
  },
  outQuint: {
    type: "tween",
    duration: 0.25,
    ease: [0.23, 1, 0.32, 1],
  },
  inOutQuint: {
    type: "tween",
    duration: 0.26,
    ease: [0.86, 0, 0.07, 1],
  },
  inCirc: {
    type: "tween",
    duration: 0.25,
    ease: [0.6, 0.04, 0.98, 0.335],
  },
  outCirc: {
    type: "tween",
    duration: 0.27,
    ease: [0.075, 0.82, 0.165, 1],
  },
  inOutCirc: {
    type: "tween",
    duration: 0.25,
    ease: [0.785, 0.135, 0.15, 0.86],
  },
  inOutBase: {
    type: "tween",
    duration: 0.25,
    ease: [0.25, 0.1, 0.25, 1],
  },
} as const;

type AnimationPreset = keyof typeof animationPresets;
type TransitionPreset = keyof typeof transitionPresets;

type AccordionVariant = "default" | "swiss";

interface AccordionContextType {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  reduceMotion?: boolean;
  value: AccordionProps["value"];
  onValueChange: AccordionProps["onValueChange"];
  variant?: AccordionVariant;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within a AccordionProvider");
  }
  return context;
}

interface AccordionProps extends AccordionPrimitive.Root.Props {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  reduceMotion?: boolean;
  variant?: AccordionVariant;
}

function Accordion({
  value,
  defaultValue,
  onValueChange,
  animationPreset = "slide",
  transitionPreset = "outCubic",
  reduceMotion,
  variant = "default",
  className,
  multiple = false,
  ...props
}: AccordionProps) {
  const [accordionValue, setAccordionValue] = useState(
    value ?? defaultValue ?? []
  );

  const handleValueChange: AccordionProps["onValueChange"] = (
    value,
    eventDetails
  ) => {
    setAccordionValue(value);
    onValueChange?.(value, eventDetails);
  };

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <AccordionContext.Provider
        value={{
          value: accordionValue,
          onValueChange: handleValueChange,
          animationPreset,
          transitionPreset,
          reduceMotion,
          variant,
        }}
      >
        <AccordionPrimitive.Root
          data-slot="accordion"
          value={accordionValue}
          onValueChange={handleValueChange}
          multiple={multiple}
          className={cn(
            "w-full",
            variant === "default" && "flex flex-col gap-1.5",
            variant === "swiss" && "rounded-2xl",
            className
          )}
          {...props}
        />
      </AccordionContext.Provider>
    </MotionConfig>
  );
}

interface AccordionItemContextType {
  open: boolean;
  onOpenChange: AccordionItemProps["onOpenChange"];
  variant?: AccordionVariant;
}

const AccordionItemContext = createContext<
  AccordionItemContextType | undefined
>(undefined);

function useAccordionItem() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "useAccordionItem must be used within a AccordionItemProvider"
    );
  }
  return context;
}

interface AccordionItemProps extends AccordionPrimitive.Item.Props {}

function AccordionItem({
  value: itemValue,
  onOpenChange,
  className,
  ...rest
}: AccordionItemProps) {
  const { value, variant = "default" } = useAccordion();

  const [isOpen, setIsOpen] = useState(value?.includes(itemValue) ?? false);

  useEffect(() => {
    setIsOpen(value?.includes(itemValue) ?? false);
  }, [value, itemValue]);

  const handleItemOpenChange: AccordionItemProps["onOpenChange"] = (
    open,
    eventDetails
  ) => {
    setIsOpen(open);
    onOpenChange?.(open, eventDetails);
  };

  return (
    <AccordionItemContext.Provider
      value={{ open: isOpen, onOpenChange: handleItemOpenChange, variant }}
    >
      <AccordionPrimitive.Item
        data-slot="accordion-item"
        value={itemValue}
        onOpenChange={handleItemOpenChange}
        className={cn(
          `w-full contain-layout outline-hidden`,
          // Base transitions - smooth all property changes
          `[transition-property:border-radius,margin,border]
           duration-260
           ease-[cubic-bezier(0.215,0.61,0.355,1)]
           will-change-[border-radius,margin,border]`,
          variant === "default" && "border p-1 rounded-[14px]",
          variant === "swiss" && [
            "bg-popover border-x border-border/60 relative overflow-hidden",

            // Base state - closed items
            "data-closed:border-b data-closed:border-border/60",

            // First and last items
            "first:rounded-t-2xl first:border-t first:border-border/60",
            "last:rounded-b-2xl last:border-b last:border-border/60",

            // Open state - full rounded with margins
            "data-open:rounded-2xl data-open:border data-open:border-primary/70 data-open:z-2",
            "data-open:my-6 data-open:first:mt-0 data-open:last:mb-0",

            // Item before open item - gets bottom rounded corners
            "has-[+_[data-slot='accordion-item'][data-open]]:rounded-b-2xl",
            "has-[+_[data-slot='accordion-item'][data-open]]:border-b!",
            "has-[+_[data-slot='accordion-item'][data-open]]:border-border/60",

            // Item after open item - gets top rounded corners
            "data-open:[&+[data-slot='accordion-item']]:rounded-t-2xl",
            "data-open:[&+[data-slot='accordion-item'][data-closed]]:border-t",
            "data-open:[&+[data-slot='accordion-item']]:border-border/60",

            // Remove middle borders between closed items
            "data-closed:first:border-t",
            "data-closed:last:border-b",
          ],
          className
        )}
        {...rest}
      />
    </AccordionItemContext.Provider>
  );
}

interface AccordionHeaderProps extends AccordionPrimitive.Header.Props {}

function AccordionHeader({ className, ...props }: AccordionHeaderProps) {
  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className={cn(className)}
      {...props}
    />
  );
}

interface AccordionTriggerProps extends AccordionPrimitive.Trigger.Props {
  icon?: (props: { open: boolean }) => React.ReactNode;
}

function AccordionTrigger({
  className,
  icon,
  children,
  ...props
}: AccordionTriggerProps) {
  const { open, variant = "default" } = useAccordionItem();

  return (
    <AccordionHeader className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "w-full text-left text-sm p-4 flex items-center cursor-pointer [transition-property:border-radius] duration-260 ease-[cubic-bezier(0.215,0.61,0.355,1)] will-change-[border-radius]",
          `not-data-panel-open:bg-secondary/80 data-panel-open:bg-secondary/80 data-panel-open:rounded-b-none not-data-panel-open:hover:bg-accent focus-visible:bg-accent not-data-panel-open:dark:hover:bg-accent dark:focus-visible:bg-accent`,
          `data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:pointer-events-none`,
          `focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2`,
          variant === "default" && "rounded-lg",
          className
        )}
        {...props}
      >
        {children}

        <span className="ml-auto">
          {icon ? (
            icon({ open })
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-200"
              aria-hidden="true"
              data-slot="accordion-trigger-icon"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5V19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200"
                style={{
                  transform: open ? "rotateX(90deg)" : "none",
                  transformOrigin: "12px 12px",
                }}
              />
            </svg>
          )}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionHeader>
  );
}

interface AccordionPanelProps extends AccordionPrimitive.Panel.Props {}

function AccordionPanel({
  className,
  hiddenUntilFound = false,
  ...props
}: AccordionPanelProps) {
  const { open } = useAccordionItem();
  const {
    animationPreset = "slide",
    transitionPreset = "snappyOut",
    reduceMotion = false,
  } = useAccordion();

  const animationConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.none;

    if (animationPreset) {
      return animationPresets[animationPreset];
    }

    return animationPresets.slide;
  }, [animationPreset, reduceMotion]);

  const transitionConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.none;

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }

    return transitionPresets.inOutExpo;
  }, [transitionPreset, reduceMotion]);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <AccordionPrimitive.Panel
          data-slot="accordion-panel"
          hiddenUntilFound={hiddenUntilFound}
          keepMounted
          render={(renderProps) => {
            return (
              <motion.div
                key="accordion-panel"
                initial={animationConfig.initial}
                animate={animationConfig.animate}
                exit={animationConfig.exit}
                transition={transitionConfig}
                style={{
                  willChange: "height, opacity, transform",
                  ...renderProps.style,
                }}
                className={cn(`overflow-hidden text-sm`, className)}
              >
                <div data-slot="accordion-panel-content" className="p-3 pl-4">
                  {renderProps.children}
                </div>
              </motion.div>
            );
          }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
};
