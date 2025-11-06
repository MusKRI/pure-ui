import { cn } from "@/lib/classes";

interface DefaultSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const DefaultSpinner = ({
  className,
  size = "md",
  ...props
}: DefaultSpinnerProps) => {
  return (
    <div
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      {...props}
      className={cn(
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className
      )}
    >
      <div
        data-slot="spinner-wrapper"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-4 group-data-[size=sm]:h-4 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-10 group-data-[size=lg]:h-10",
        ])}
      >
        <i
          data-slot="spinner-c1"
          className={cn([
            "absolute w-full h-full rounded-full border-b-current border-solid border-t-transparent border-l-transparent border-r-transparent animate-spinner-ease-spin",
            "group-data-[size=sm]:border-2 group-data-[size=md]:border-3 group-data-[size=lg]:border-3",
          ])}
        />
        <i
          data-slot="spinner-c2"
          className={cn([
            "absolute w-full h-full rounded-full opacity-75 border-b-current border-dotted border-t-transparent border-l-transparent border-r-transparent animate-spinner-linear-spin",
            "group-data-[size=sm]:border-2 group-data-[size=md]:border-3 group-data-[size=lg]:border-3",
          ])}
        />
      </div>
    </div>
  );
};

interface SimpleSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const SimpleSpinner = ({
  className,
  size = "md",
  ...props
}: SimpleSpinnerProps) => {
  return (
    <div
      {...props}
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      className={cn([
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className,
      ])}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-5 group-data-[size=sm]:h-5 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-12 group-data-[size=lg]:h-12",
          "animate-spin",
        ])}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className={cn([
            "absolute w-full h-full rounded-full opacity-25",
            "border-b-current group-data-[size=sm]:border-2 group-data-[size=md]:border-3 group-data-[size=lg]:border-3",
          ])}
        />
        <path
          className={cn([
            "absolute w-full h-full rounded-full opacity-75",
            "border-b-current group-data-[size=sm]:border-2 group-data-[size=md]:border-3 group-data-[size=lg]:border-3",
          ])}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

interface GradientSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const GradientSpinner = ({
  className,
  size = "md",
  ...props
}: GradientSpinnerProps) => {
  return (
    <div
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      {...props}
      className={cn(
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className
      )}
    >
      <div
        data-slot="spinner-wrapper"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-4 group-data-[size=sm]:h-4 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-10 group-data-[size=lg]:h-10",
        ])}
      >
        <i
          data-slot="spinner-c1"
          className={cn([
            "absolute w-full h-full rounded-full",
            "border-0 bg-linear-to-b from-transparent via-transparent to-primary-foreground animate-spinner-linear-spin duration-1000 [-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]",
          ])}
        />
      </div>
    </div>
  );
};

interface BarsSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const BarsSpinner = ({
  className,
  size = "md",
  ...props
}: BarsSpinnerProps) => {
  return (
    <div
      {...props}
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      className={cn([
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className,
      ])}
    >
      <div
        data-slot="spinner-wrapper"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-4 group-data-[size=sm]:h-4 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-10 group-data-[size=lg]:h-10",
        ])}
      >
        {[...new Array(12)].map((_, index) => (
          <i
            key={`star-${index}`}
            className={cn([
              "absolute rounded-full w-[25%] h-[8%] left-[calc(37.5%)] top-[calc(46%)] animate-fade-out bg-current",
            ])}
            style={
              {
                "--bar-index": index,
                animationDelay: `calc(-1.2s + (.1s * var(--bar-index)))`,
                transform: `rotate(calc(30deg * var(--bar-index))) translate(140%)`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};

interface WaveSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const WaveSpinner = ({
  className,
  size = "md",
  ...props
}: WaveSpinnerProps) => {
  return (
    <div
      {...props}
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      className={cn([
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className,
      ])}
    >
      <div
        data-slot="spinner-wrapper"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-4 group-data-[size=sm]:h-4 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-10 group-data-[size=lg]:h-10",
          "translate-y-3/4",
        ])}
      >
        {[...new Array(3)].map((_, index) => (
          <i
            key={`dot-${index}`}
            className={cn([
              "relative rounded-full mx-auto bg-current animate-sway",
              "group-data-[size=sm]:size-1 group-data-[size=md]:size-1.5 group-data-[size=lg]:size-2",
            ])}
            style={
              {
                "--dot-index": index,
                animationDelay: `calc(.25s * var(--dot-index))`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};

interface DotsSpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const DotsSpinner = ({
  className,
  size = "md",
  ...props
}: DotsSpinnerProps) => {
  return (
    <div
      {...props}
      aria-label="Loading..."
      data-slot="spinner-base"
      data-size={size}
      className={cn([
        "group relative inline-flex flex-col gap-2 items-center justify-center",
        className,
      ])}
    >
      <div
        data-slot="spinner-wrapper"
        className={cn([
          "relative flex",
          "group-data-[size=sm]:w-4 group-data-[size=sm]:h-4 group-data-[size=md]:w-8 group-data-[size=md]:h-8 group-data-[size=lg]:w-10 group-data-[size=lg]:h-10",
          "translate-y-1/2",
        ])}
      >
        {[...new Array(3)].map((_, index) => (
          <i
            key={`dot-${index}`}
            className={cn([
              "relative rounded-full mx-auto bg-current animate-blink",
              "group-data-[size=sm]:size-1 group-data-[size=md]:size-1.5 group-data-[size=lg]:size-2",
            ])}
            style={
              {
                "--dot-index": index,
                animationDelay: `calc(.2s * var(--dot-index))`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};

export {
  DefaultSpinner,
  SimpleSpinner,
  GradientSpinner,
  BarsSpinner,
  WaveSpinner,
  DotsSpinner,
};
