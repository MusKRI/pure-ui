"use client";

import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { tv, VariantProps } from "tailwind-variants";
import { cloneElement, ReactElement, useContext, createContext } from "react";

import { cn, type SlotsToClasses } from "@/lib/classes";

const switchStyles = tv({
  slots: {
    base: `group relative max-w-fit rounded-full inline-flex items-center justify-center cursor-pointer touch-none select-none data-disabled:cursor-not-allowed data-disabled:opacity-70`,
    wrapper: `px-1 relative inline-flex items-center justify-start overflow-hidden bg-input inset-shadow-[0_1px_--theme(--color-black/4%)] rounded-full group-data-checked:bg-primary `,
    thumb: `z-2 flex items-center justify-center bg-white shadow-sm rounded-full origin-right pointer-events-none data-checked:bg-primary-foreground`,
    startContent: `z-0 absolute start-1.5 text-primary-foreground`,
    endContent: `z-0 absolute end-1.5`,
  },
  variants: {
    size: {
      sm: {
        wrapper: `w-10 h-6`,
        thumb: `size-4 text-xs data-checked:ms-4`,
        startContent: `size-2.5`,
        endContent: `size-2.5`,
      },
      md: {
        wrapper: `w-12 h-7`,
        thumb: `size-5 text-sm data-checked:ms-5`,
        startContent: `size-3.5`,
        endContent: `size-3.5`,
      },
      lg: {
        wrapper: `w-14 h-8`,
        thumb: `size-6 text-base data-checked:ms-6`,
        startContent: `size-4.5`,
        endContent: `size-4.5`,
      },
    },
    reduceMotion: {
      true: {},
      false: {
        wrapper: `[transition-property:background-color] ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-250`,
        thumb: `[transition-property:margin,transform,width,background-color] ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-200`,
        startContent: `opacity-0 scale-50 [transition-property:opacity,scale] duration-250 group-data-checked:opacity-100 group-data-checked:scale-100 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,
        endContent: `opacity-100 scale-100 [transition-property:opacity,scale] duration-250 group-data-checked:opacity-0 group-data-checked:scale-50 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,
      },
    },
    isInteractive: {
      false: {},
      true: {},
    },
  },
  defaultVariants: {
    size: "md",
    reduceMotion: false,
    isInteractive: true,
  },
  compoundVariants: [
    {
      isInteractive: true,
      size: "sm",
      class: {
        thumb: `group-active:w-5 data-checked:group-active:ml-3`,
      },
    },
    {
      isInteractive: true,
      size: "md",
      class: {
        thumb: `group-active:w-6 data-checked:group-active:ml-4`,
      },
    },
    {
      isInteractive: true,
      size: "lg",
      class: {
        thumb: `group-active:w-7 data-checked:group-active:ml-5`,
      },
    },
  ],
});

const SwitchContext = createContext<{
  size: VariantProps<typeof switchStyles>["size"];
  reduceMotion: VariantProps<typeof switchStyles>["reduceMotion"];
  isInteractive: VariantProps<typeof switchStyles>["isInteractive"];
  classNames?: SlotsToClasses<keyof ReturnType<typeof switchStyles>>;
} | null>(null);

const useSwitch = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider");
  }
  return context;
};

type SwitchRootVariants = VariantProps<typeof switchStyles>;

interface SwitchRootProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    SwitchRootVariants {
  reduceMotion?: boolean;
  isInteractive?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: SlotsToClasses<keyof ReturnType<typeof switchStyles>>;
}

function SwitchRoot({
  reduceMotion = false,
  isInteractive = false,
  startContent,
  endContent,
  className,
  size = "md",
  children,
  classNames,
  ...props
}: SwitchRootProps) {
  const {
    base: baseStyles,
    wrapper: wrapperStyles,
    startContent: startContentStyles,
    endContent: endContentStyles,
  } = switchStyles({ size, reduceMotion, isInteractive });

  const baseMergedClasses = cn(baseStyles(), className, classNames?.base);

  const baseProps = {
    "data-slot": "base",
    className: baseMergedClasses,
    ...props,
  };

  const wrapperMergedClasses = cn(wrapperStyles(), classNames?.wrapper);

  const wrapperProps = {
    "data-slot": "wrapper",
    "aria-hidden": true,
    className: wrapperMergedClasses,
  };

  const startContentMergedClasses = cn(
    startContentStyles(),
    classNames?.startContent
  );

  const startContentProps = {
    "data-slot": "start-content",
    className: startContentMergedClasses,
  };

  const clonedStartContent =
    startContent &&
    cloneElement(startContent as ReactElement, startContentProps);

  const endContentMergedClasses = cn(
    endContentStyles(),
    classNames?.endContent
  );

  const endContentProps = {
    "data-slot": "end-content",
    className: endContentMergedClasses,
  };

  const clonedEndContent =
    endContent && cloneElement(endContent as ReactElement, endContentProps);

  return (
    <SwitchContext.Provider
      value={{ size, reduceMotion, isInteractive, classNames }}
    >
      <SwitchPrimitive.Root {...baseProps}>
        <span {...wrapperProps}>
          {startContent && clonedStartContent}
          {children}
          {endContent && clonedEndContent}
        </span>
      </SwitchPrimitive.Root>
    </SwitchContext.Provider>
  );
}

interface SwitchThumbProps
  extends React.ComponentProps<typeof SwitchPrimitive.Thumb> {}

function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  const { size, isInteractive, classNames } = useSwitch();

  const { thumb: thumbStyles } = switchStyles({
    size,
    isInteractive,
  });

  const thumbMergedClasses = cn(thumbStyles(), className, classNames?.thumb);

  const thumbProps = {
    "data-slot": "thumb",
    className: thumbMergedClasses,
    ...props,
  };

  return <SwitchPrimitive.Thumb {...thumbProps} />;
}

interface SwitchProps extends React.ComponentProps<typeof SwitchRoot> {}

function Switch({ ...props }: SwitchProps) {
  return (
    <SwitchRoot {...props}>
      <SwitchThumb />
    </SwitchRoot>
  );
}

export { SwitchRoot, SwitchThumb, Switch };
