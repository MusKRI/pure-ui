"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { cn } from "@/lib/classes";

const cssAnimationPresets = {
  none: "transition-none",
  fade: [
    `[transition-property:opacity,height] [will-change:opacity,height]`,
    `data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:h-0 data-ending-style:h-0`,
  ],
  scale: [
    `[transition-property:scale,opacity,height] [will-change:scale,opacity,height] origin-left`,
    `data-starting-style:scale-85 data-starting-style:opacity-0 data-starting-style:h-0 data-ending-style:opacity-0 data-ending-style:h-0 data-ending-style:scale-85`,
  ],
  slide: [
    `[transition-property:translate,opacity,height] [will-change:translate,opacity,height]`,
    `data-starting-style:opacity-0 data-starting-style:translate-y-[10px] data-ending-style:translate-y-[10px] data-ending-style:opacity-0 data-ending-style:h-0 data-starting-style:h-0`,
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

type CSSAnimationPreset = keyof typeof cssAnimationPresets;
type CSSTransitionPreset = keyof typeof cssTransitionPresets;

type AccordionVariant = "default" | "card" | "swiss";

interface AccordionContextType {
  animationPreset?: CSSAnimationPreset;
  transitionPreset?: CSSTransitionPreset;
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
  animationPreset?: CSSAnimationPreset;
  transitionPreset?: CSSTransitionPreset;
  reduceMotion?: boolean;
  variant?: AccordionVariant;
}

function Accordion({
  value,
  defaultValue,
  onValueChange,
  animationPreset = "fade",
  transitionPreset = "outQuad",
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
          variant === "default" &&
            "flex flex-col border rounded-2xl outline-hidden",
          variant === "card" && "flex flex-col gap-1.5",
          variant === "swiss" && "rounded-2xl",
          className
        )}
        {...props}
      />
    </AccordionContext.Provider>
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
          "w-full contain-layout outline-hidden",
          // Base transitions - smooth all property changes
          `[transition-property:border-radius,margin,border]
           duration-260
           ease-[cubic-bezier(0.215,0.61,0.355,1)]
           will-change-[border-radius,margin,border]`,
          "focus-within:relative focus-within:z-2",
          variant === "default" &&
            "first:rounded-t-2xl last:rounded-b-2xl border-b border-border last:border-b-0 bg-card",
          variant === "card" && "border p-1 rounded-[14px]",
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
          "w-full text-left text-sm p-4 flex items-center cursor-pointer",
          "[transition-property:background-color,border-radius] duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)] will-change-[background-color,border-radius]",
          `focus-visible:bg-accent not-data-panel-open:dark:hover:bg-accent dark:focus-visible:bg-accent data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-ring`,
          variant === "default" && [
            `[&:where([data-slot=accordion-item]:first-child_&)]:rounded-t-2xl [&:where([data-slot=accordion-item]:last-child_&)]:rounded-b-2xl not-data-panel-open:bg-secondary/80 data-panel-open:bg-card`,
          ],
          variant === "card" && [
            `rounded-lg not-data-panel-open:bg-secondary/80 data-panel-open:bg-secondary/80 data-panel-open:rounded-b-none`,
          ],
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
  children,
  style,
  ...props
}: AccordionPanelProps) {
  const {
    variant = "default",
    animationPreset = "fade",
    transitionPreset = "snappyOut",
    reduceMotion = false,
  } = useAccordion();

  const cssAnimationConfig = useMemo(() => {
    if (reduceMotion) return cssAnimationPresets.none;

    if (animationPreset) {
      return cssAnimationPresets[animationPreset];
    }

    return cssAnimationPresets.fade;
  }, [animationPreset, reduceMotion]);

  const cssTransitionConfig = useMemo(() => {
    if (reduceMotion) return cssAnimationPresets.none;

    if (transitionPreset) {
      return cssTransitionPresets[transitionPreset];
    }

    return cssTransitionPresets.inOutExpo;
  }, [transitionPreset, reduceMotion]);

  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "overflow-hidden text-sm h-(--accordion-panel-height)",
        cssAnimationConfig,
        cssTransitionConfig,
        className
      )}
      style={{
        willChange: "height, opacity, transform",
        ...style,
      }}
      {...props}
    >
      <div
        data-slot="accordion-panel-content"
        className={cn(variant === "default" ? "pl-4 pr-4 pb-3" : "p-3 pl-4")}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
};
