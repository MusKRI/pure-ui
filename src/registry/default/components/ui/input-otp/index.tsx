"use client";

import { createContext, useContext } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  TargetAndTransition,
} from "motion/react";
import { OTPInput, OTPInputContext as OTPInputContextBase } from "input-otp";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/classes";

type InputOTPSlotSize = "sm" | "md" | "lg";
type InputOTPVariant = "bordered" | "underlined";

type InputOTPContextType = {
  variant?: InputOTPVariant;
  slotSize?: InputOTPSlotSize;
};

const InputOTPContext = createContext<InputOTPContextType>({
  variant: "bordered",
  slotSize: "md",
});

export const useInputOTPContext = () => {
  const context = useContext(InputOTPContext);
  if (!context) {
    throw new Error(
      "useInputOTPContext must be used within a InputOTPProvider"
    );
  }
  return context;
};

const InputOTPProvider = ({
  children,
  variant = "bordered",
  slotSize = "md",
}: InputOTPContextType & { children: React.ReactNode }) => {
  return (
    <InputOTPContext.Provider value={{ variant, slotSize }}>
      {children}
    </InputOTPContext.Provider>
  );
};

type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  variant?: InputOTPVariant;
  slotSize?: InputOTPSlotSize;
};

function InputOTP({
  containerClassName,
  className,
  variant = "bordered",
  slotSize = "md",
  ...props
}: InputOTPProps) {
  return (
    <InputOTPProvider variant={variant} slotSize={slotSize}>
      <OTPInput
        data-variant={variant}
        data-slot="input-otp"
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </InputOTPProvider>
  );
}

type InputOTPGroupProps = React.ComponentProps<"div">;

function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

type InputOTPAnimatedNumberProps = {
  value: string | null;
};

function InputOTPAnimatedNumber({ value }: InputOTPAnimatedNumberProps) {
  const animationProps: {
    [key: string]: TargetAndTransition;
  } = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.15,
      },
    },
  };

  return (
    <div className="relative flex size-[inherit] items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {value && (
          <motion.span
            key={value}
            data-slot="input-otp-animated-number"
            initial={animationProps.initial}
            animate={animationProps.animate}
            exit={animationProps.exit}
          >
            {value}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputOtpSlotVariants = cva(
  "relative font-semibold flex items-center justify-center",
  {
    variants: {
      variant: {
        bordered: "rounded-[10px] border border-border bg-background",
        underlined: "rounded-none border-b border-border bg-background",
      },
      slotSize: {
        sm: "h-8 min-h-8 w-8 min-w-8 text-sm",
        md: "h-10 min-h-10 w-10 min-w-10 text-base",
        lg: "h-12 min-h-12 w-12 min-w-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "bordered",
      slotSize: "md",
    },
  }
);

const inputOtpSlotIndicatorVariants = cva("absolute inset-0 z-10", {
  variants: {
    variant: {
      bordered: "rounded-[inherit] ring-2 ring-primary/70 outline-none",
      underlined: "border-b border-primary",
    },
  },
  defaultVariants: {
    variant: "bordered",
  },
});

type InputOTPSlotProps = React.ComponentProps<typeof motion.div> & {
  index: number;
};

function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  const originalContext = useContext(OTPInputContextBase);
  const { variant, slotSize } = useInputOTPContext();

  const { char, hasFakeCaret, isActive } = originalContext?.slots[index] ?? {};

  const activeSlots =
    originalContext?.slots.filter((slot) => slot.isActive) ?? [];
  const isMultiSelect = activeSlots.length > 1;

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-slot="input-otp-slot"
        className={cn(inputOtpSlotVariants({ variant, slotSize }), className)}
        {...props}
      >
        <InputOTPAnimatedNumber value={char} />

        {hasFakeCaret && <FakeCaret />}

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`${isActive}-${isMultiSelect}`}
              layoutId={isMultiSelect ? `indicator-${index}` : "indicator"}
              className={cn(inputOtpSlotIndicatorVariants({ variant }))}
              transition={{
                type: "tween",
                ease: [0.23, 1, 0.32, 1],
                duration: 0.38,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
}

type InputOTPSeparatorProps = React.ComponentProps<"div">;

function InputOTPSeparator({ className, ...props }: InputOTPSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      aria-hidden
      className={cn("h-0.5 w-2 rounded-full bg-border", className)}
      {...props}
    />
  );
}

function FakeCaret() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="h-4.5 w-px bg-primary motion-safe:animate-caret-blink motion-safe:duration-1000" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
