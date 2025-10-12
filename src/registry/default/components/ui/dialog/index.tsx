"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { AnimatePresence, motion } from "motion/react";
import { XIcon } from "lucide-react";

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
  "top-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
  },
  "bottom-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
  },
  "right-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
  },
  "left-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
  },
  "top-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
  },
  "bottom-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(20px)",
    },
  },
  "left-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(-20px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(-20px)",
    },
  },
  "right-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(20px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(20px)",
    },
  },
  wipe: {
    initial: {
      clipPath: "inset(0 0 100% 0)",
      transform: `scale(0.9)`,
      opacity: 0,
      filter: `blur(2px)`,
    },
    animate: {
      clipPath: "inset(0 0 0% 0)",
      transform: `scale(1)`,
      opacity: 1,
      filter: `blur(0px)`,
    },
    exit: {
      clipPath: "inset(0 0 100% 0)",
      transform: `scale(0.9)`,
      opacity: 0,
      filter: `blur(2px)`,
    },
  },
} as const;

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

interface DialogContextType {
  open: boolean;
  onOpenChange: DialogProps["onOpenChange"];
  modal: DialogProps["modal"];
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog({
  open,
  defaultOpen,
  onOpenChange,
  modal = true,
  ...props
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(open ?? defaultOpen ?? false);

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const handleOpenChange: DialogProps["onOpenChange"] = (
    open,
    eventDetails
  ) => {
    setIsOpen(open);
    onOpenChange?.(open, eventDetails);
  };

  return (
    <DialogContext.Provider
      value={{ open: isOpen, onOpenChange: handleOpenChange, modal }}
    >
      <DialogPrimitive.Root
        data-slot="dialog"
        open={isOpen}
        onOpenChange={handleOpenChange}
        modal={modal}
        {...props}
      />
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps
  extends Omit<React.ComponentProps<typeof DialogPrimitive.Trigger>, "render"> {
  asChild?: boolean;
}

function DialogTrigger({
  asChild = false,
  children,
  ...props
}: DialogTriggerProps) {
  if (asChild) {
    return (
      <DialogPrimitive.Trigger
        data-slot="dialog-trigger"
        render={children as React.ReactElement<Record<string, unknown>>}
        {...props}
      />
    );
  }

  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

interface DialogPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

function DialogPortal(props: DialogPortalProps) {
  const { open } = useDialog();

  return (
    <AnimatePresence>
      {open && (
        <DialogPrimitive.Portal
          data-slot="dialog-portal"
          keepMounted
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

interface DialogBackdropProps
  extends React.ComponentProps<typeof DialogPrimitive.Backdrop> {}

function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-backdrop"
      render={
        <div
          key="dialog-backdrop"
          className={cn(
            "fixed inset-0 bg-black z-100 opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70 supports-[-webkit-touch-callout:none]:absolute",
            className
          )}
        />
      }
      {...props}
    />
  );
}

interface DialogPopupProps
  extends React.ComponentProps<typeof DialogPrimitive.Popup> {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  reduceMotion?: boolean;
  showCloseButton?: boolean;
}

function DialogPopup({
  className,
  animationPreset = "scale",
  transitionPreset = "quickOut",
  children,
  reduceMotion = false,
  showCloseButton = true,
  ...rest
}: DialogPopupProps) {
  const { modal } = useDialog();

  const animationConfig = useMemo(() => {
    if (reduceMotion) return animationPresets.none;

    if (animationPreset) {
      return animationPresets[animationPreset];
    }

    return animationPresets.scale;
  }, [animationPreset, reduceMotion]);

  const transitionConfig = useMemo(() => {
    if (reduceMotion) return {};

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }
  }, [transitionPreset, reduceMotion]);

  return (
    <DialogPortal>
      {modal && <DialogBackdrop />}
      <DialogPrimitive.Popup
        data-slot="dialog-popup"
        render={
          <motion.div
            key="dialog-popup"
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={transitionConfig}
            className={cn(
              "pointer-events-auto fixed top-1/2 left-1/2 z-100 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-border p-6 shadow-lg duration-200 sm:max-w-lg bg-muted",
              className
            )}
          >
            {children}
            {showCloseButton && (
              <DialogPrimitive.Close
                data-slot="dialog-close"
                className="ring-offset-background focus:ring-ring data-[open]:bg-accent data-[open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}
          </motion.div>
        }
        {...rest}
      />
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogBackdrop,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
