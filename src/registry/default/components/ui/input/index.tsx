"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { useId, useMemo, useRef, useState } from "react";

import { cn, SlotsToClasses } from "@/lib/classes";

const inputStyles = tv({
  slots: {
    // Base slot
    base: `Input group flex flex-col data-[hidden=true]:hidden w-full`,
    // Label slot
    label: `absolute z-5 pointer-events-none origin-top-left block text-sm text-muted-foreground`,
    // Main wrapper slot
    mainWrapper: "h-full",
    // Input wrapper slot
    inputWrapper: `relative w-full inline-flex flex-row items-center shadow-xs px-3 gap-3`,
    // Inner wrapper slot
    innerWrapper: `inline-flex w-full items-center h-full`,
    // Input slot
    input: [
      `w-full font-normal bg-transparent placeholder:text-muted-foreground focus-visible:outline-solid outline-transparent`,
      `data-[has-start-content=true]:ps-2.5 data-[has-end-content=true]:pe-2.5`,
      `data-[type=color]:rounded-none`,
      `fil:cursor-pointer file:bg-transparent file:border-0 autofill:bg-transparent`,
    ],
    // Clear button slot
    clearButton: [`p-2`],
    // Helper wrapper slot
    helperWrapper: `relative`,
    // description slot
    description: `relative`,
    // Error message slot
    errorMessage: `relative`,
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: `bg-secondary hover:bg-input/70 data-[disabled=true]:bg-secondary`,
        label: `group-data-[filled-within=true]:text-foreground`,
      },
      faded: {
        inputWrapper: `bg-secondary border border-input hover:border-border focus-within:border-border`,
        label: `group-data-[filled-within=true]:text-foreground`,
      },
      bordered: {
        inputWrapper: `border border-input hover:border-border focus-within:border-border`,
        label: `group-data-[filled-within=true]:text-foreground`,
      },
      underlined: {
        inputWrapper: `!px-1 !pb-0 gap-0 relative border-b-2 shadow-[0_1px_0px_0px_rgba(0,0,0,0.05)] border-input !rounded-none hover:border-border after:content-[''] after:w-0 after:origin-center after:bg-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[2px] after:h-[2px] group-focus-within:after:w-full after:transition-all after:duration-300 after:ease-in-out`,
        innerWrapper: `pb-1`,
        label: `group-data-[filled-within=true]:text-foreground`,
      },
    },
    labelPosition: {
      outside: {
        mainWrapper: `flex flex-col`,
      },
      "outside-left": {
        base: `flex-row items-center flex-nowrap`,
        inputWrapper: `flex-1`,
        mainWrapper: `flex flex-col`,
        label: `relative text-muted-foreground pe-2 ps-2 pointer-events-auto group-data-[filled-within=true]:text-foreground`,
      },
      "outside-top": {
        mainWrapper: `flex flex-col`,
        label: `relative text-muted-foreground pb-2 pointer-events-auto group-data-[filled-within=true]:text-foreground`,
      },
      inside: {
        label: "cursor-text",
        inputWrapper: `flex-col items-start justify-center gap-0`,
        innerWrapper: `group-data-[has-label=true]:items-end`,
      },
    },
    size: {
      sm: {
        label: "text-sm",
        inputWrapper: `h-8 min-h-8 px-2 rounded-sm`,
        input: `text-sm`,
        // clearButton: "text-md",
      },
      md: {
        inputWrapper: "h-10 min-h-10 rounded-md",
        input: "text-sm",
        // clearButton: "text-large hover:!opacity-100",
      },
      lg: {
        label: "text-base",
        inputWrapper: "h-12 min-h-12 rounded-lg",
        input: "text-base",
        // clearButton: "text-large hover:!opacity-100",
      },
    },
    radius: {
      none: {
        inputWrapper: "rounded-none",
      },
      sm: {
        inputWrapper: "rounded-sm",
      },
      md: {
        inputWrapper: "rounded-md",
      },
      lg: {
        inputWrapper: "rounded-lg",
      },
      full: {
        inputWrapper: "rounded-full",
      },
    },
    disableAnimation: {
      true: {
        input: "transition-none",
        inputWrapper: "transition-none",
        label: "transition-none",
      },
      false: {
        label: `will-change-auto ease-out duration-200 motion-reduce:transition-none transition-[transform,color,left,opacity,translate,scale]`,
        inputWrapper: `transition-[background] motion-reduce:transition-none duration-150`,
      },
    },
    disabled: {
      true: {
        base: "cursor-not-allowed pointer-events-none opacity-60",
        inputWrapper: "pointer-events-none",
        label: "pointer-events-none",
      },
    },
    required: {
      true: {
        label: "after:content-['*'] after:text-red-500 after:ms-1",
      },
    },
  },
  defaultVariants: {
    variant: "flat",
    size: "md",
    radius: "md",
    labelPosition: "inside",
    disableAnimation: false,
  },
  compoundVariants: [
    // labelPosition=[inside,outside]
    {
      labelPosition: ["inside", "outside"],
      class: {
        label: ["group-data-[filled-within=true]:pointer-events-auto"],
      },
    },
    // labelPosition=inside and variant=flat
    {
      labelPosition: "inside",
      variant: "flat",
      class: {
        innerWrapper: "pb-0.5",
      },
    },
    // size & labelPosition
    {
      labelPosition: "inside",
      size: "sm",
      class: {
        inputWrapper: "h-12 py-1.5 px-3",
      },
    },
    {
      labelPosition: "inside",
      size: "md",
      class: {
        inputWrapper: "h-14 py-2",
      },
    },
    {
      labelPosition: "inside",
      size: "lg",
      class: {
        inputWrapper: "h-16 py-2.5 gap-0",
      },
    },
    // size & labelPlacement & variant=[faded, bordered]
    {
      labelPosition: "inside",
      size: "sm",
      variant: ["bordered", "faded"],
      class: {
        inputWrapper: "py-1",
      },
    },

    // labelPosition=[inside]
    {
      labelPosition: ["inside"],
      class: {
        label:
          "group-data-[filled-within=true]:scale-85 group-focus-within:scale-85 group-data-[has-placeholder=true]:scale-85",
      },
    },

    // variant=underlined
    {
      variant: "underlined",
      disableAnimation: false,
      class: {
        inputWrapper:
          "after:transition-[width] after:motion-reduce:transition-none",
      },
    },
    {
      variant: "underlined",
      size: "sm",
      class: {
        innerWrapper: "pb-1",
      },
    },
    {
      variant: "underlined",
      size: ["md", "lg"],
      class: {
        innerWrapper: "pb-1.5",
      },
    },

    {
      labelPosition: "inside",
      size: ["md", "sm"],
      class: {
        label: `text-sm`,
      },
    },
    {
      labelPosition: "inside",
      size: "sm",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(50%+1px)] group-focus-within:-translate-y-[calc(50%+1px)] group-data-[has-placeholder=true]:-translate-y-[calc(50%+1px)]`,
      },
    },
    {
      labelPosition: "inside",
      size: "md",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(50%+1px)] group-focus-within:-translate-y-[calc(50%+1px)] group-data-[has-placeholder=true]:-translate-y-[calc(50%+1px)]`,
      },
    },
    {
      labelPosition: "inside",
      size: "lg",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(50%+1px)] group-focus-within:-translate-y-[calc(50%+1px)] group-data-[has-placeholder=true]:-translate-y-[calc(50%+1px)]`,
      },
    },

    // labelPosition=outside
    {
      labelPosition: "outside",
      class: {
        base: "relative justify-end",
        label: `pb-0 z-20 top-1/2 -translate-y-1/2 start-3 group-data-[filled-within=true]:scale-94 group-focus-within:scale-94 group-data-[has-placeholder=true]:scale-94`,
      },
    },
    {
      labelPosition: "outside",
      size: "sm",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(100%+25px)] group-focus-within:-translate-y-[calc(100%+25px)] group-data-[has-placeholder=true]:-translate-y-[calc(100%+25px)] group-focus-within:start-0 group-data-[filled-within=true]:start-0 group-data-[has-placeholder=true]:start-0`,
      },
    },
    {
      labelPosition: "outside",
      size: "md",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(100%+25px)] group-focus-within:-translate-y-[calc(100%+25px)] group-data-[has-placeholder=true]:-translate-y-[calc(100%+25px)] group-focus-within:start-0 group-data-[filled-within=true]:start-0 group-data-[has-placeholder=true]:start-0`,
      },
    },
    {
      labelPosition: "outside",
      size: "lg",
      class: {
        label: `group-data-[filled-within=true]:-translate-y-[calc(100%+25px)] group-focus-within:-translate-y-[calc(100%+25px)] group-data-[has-placeholder=true]:-translate-y-[calc(100%+25px)] group-focus-within:start-0 group-data-[filled-within=true]:start-0 group-data-[has-placeholder=true]:start-0`,
      },
    },

    // text truncate labelPosition=[inside,outside]
    {
      labelPosition: ["inside", "outside"],
      class: {
        label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"],
      },
    },
  ],
});

interface InputProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled" | "required">,
    VariantProps<typeof inputStyles> {
  label?: string;
  placeholder?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: SlotsToClasses<keyof ReturnType<typeof inputStyles>>;
}

function Input({
  className,
  type,
  label = "",
  placeholder = "",
  disabled = false,
  labelPosition = "inside",
  value,
  defaultValue,
  startContent,
  endContent,
  variant = "flat",
  size = "md",
  radius = "md",
  disableAnimation = false,
  onChange,
  ref,
  id,
  required = false,
  classNames,
  ...props
}: InputProps) {
  const {
    base: baseStyles,
    label: labelStyles,
    inputWrapper: inputWrapperStyles,
    innerWrapper: innerWrapperStyles,
    input: mainInputStyles,
    mainWrapper: mainWrapperStyles,
  } = inputStyles({
    variant,
    size,
    radius,
    disableAnimation,
    labelPosition,
    disabled,
    required,
  });

  const inputId = useId();

  const inputRef = useRef<HTMLInputElement | null>(
    ref as HTMLInputElement | null
  );

  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? "");

  const handleInputChange: InputProps["onChange"] = (e) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const isFilled = inputValue !== "";

  const hasLabel = !!label;
  const isHiddenType = type === "hidden";
  const hasPlaceholder = !!placeholder;

  const isOutsideLeft = labelPosition === "outside-left";
  const isOutsideTop = labelPosition === "outside-top";

  const shouldLabelBeOutside =
    // label is outside only when some placeholder is present
    labelPosition === "outside" ||
    // label is outside regardless of the placeholder
    isOutsideLeft ||
    isOutsideTop;

  const shouldLabelBeInside = labelPosition === "inside";

  const isPlaceholderShown =
    (!inputValue || inputValue === "" || !defaultValue) && hasPlaceholder;
  const hasStartContent = !!startContent;
  const isLabelOutside = shouldLabelBeOutside
    ? isOutsideLeft ||
      isOutsideTop ||
      hasPlaceholder ||
      (labelPosition === "outside" && hasStartContent)
    : false;
  const isLabelOutsideAsPlaceholder =
    labelPosition === "outside" && !hasPlaceholder && !hasStartContent;

  const baseMergedClasses = cn(baseStyles(), className, classNames?.base);

  // Base Props
  const baseProps = {
    "data-slot": "base",
    "data-hidden": isHiddenType ? "true" : undefined,
    "data-has-label": hasLabel ? "true" : undefined,
    "data-has-value": !isPlaceholderShown ? "true" : undefined,
    "data-has-placeholder": hasPlaceholder ? "true" : undefined,
    "data-disabled": disabled ? "true" : undefined,
    "data-filled":
      isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown
        ? "true"
        : undefined,
    "data-filled-within": isFilled ? "true" : undefined,
    className: baseMergedClasses,
  };

  const labelMergedClasses = cn(labelStyles(), classNames?.label);

  // Label Props
  const labelProps = {
    "data-slot": "label",
    "data-has-placeholder": hasPlaceholder ? "true" : undefined,
    className: labelMergedClasses,
  };

  const mainWrapperMergedClasses = cn(
    mainWrapperStyles(),
    classNames?.mainWrapper
  );

  // main wrapper props
  const mainWrapperProps = {
    "data-slot": "main-wrapper",
    className: mainWrapperMergedClasses,
  };

  const inputWrapperMergedClasses = cn(
    inputWrapperStyles(),
    classNames?.inputWrapper
  );

  // Input Wrapper Props
  const inputWrapperProps = {
    "data-slot": "input-wrapper",
    className: inputWrapperMergedClasses,
    onClick: () => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    },
  };

  const innerWrapperMergedClasses = cn(
    innerWrapperStyles(),
    classNames?.innerWrapper
  );

  // Inner Wrapper Props
  const innerWrapperProps = {
    "data-slot": "inner-wrapper",
    className: innerWrapperMergedClasses,
  };

  const mainInputMergedClasses = cn(mainInputStyles(), classNames?.input);

  // Input Props
  const inputProps = {
    "data-slot": "input",
    "data-type": type,
    "data-has-start-content": hasStartContent ? "true" : undefined,
    "data-has-end-content": !!endContent ? "true" : undefined,
    "data-filled-within": isFilled ? "true" : undefined,
    className: mainInputMergedClasses,
    type,
    value: inputValue,
    placeholder,
    disabled,
    onChange: handleInputChange,
    ref: inputRef,
    id: id ?? inputId,
    required,
    ...props,
  };

  const labelContent = hasLabel ? <label {...labelProps}>{label}</label> : null;

  const end = useMemo(() => {
    return endContent;
  }, [endContent]);

  const innerWrapperContent = useMemo(() => {
    return (
      <div {...innerWrapperProps}>
        {startContent}
        <input {...inputProps} />
        {end}
      </div>
    );
  }, [innerWrapperProps, startContent]);

  const mainWrapperContent = useMemo(() => {
    if (shouldLabelBeOutside) {
      return (
        <div {...mainWrapperProps}>
          <div {...inputWrapperProps}>
            {!isOutsideLeft && !isOutsideTop ? labelContent : null}
            {innerWrapperContent}
          </div>
        </div>
      );
    }

    return (
      <div {...inputWrapperProps}>
        {labelContent}
        {innerWrapperContent}
      </div>
    );
  }, [shouldLabelBeOutside, labelContent, innerWrapperContent]);

  return (
    <div {...baseProps}>
      {(isOutsideLeft || isOutsideTop) && labelContent}
      {mainWrapperContent}
    </div>
  );
}

export { Input, inputStyles };
