import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@/lib/classes";

export interface InputProps extends Omit<InputPrimitive.Props, "size"> {
  size?: "sm" | "default" | "lg" | number;
}

function Input({ className, size = "default", ...props }: InputProps) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "relative w-full min-w-0 rounded-lg border border-input/70 bg-background dark:bg-input/32 shadow-xs text-base/5 sm:text-sm px-3 py-2 h-9 outline-none placeholder:text-muted-foreground/80 [transition:box-shadow_150ms_ease-out]",
        // Focus State
        "focus-visible:border-ring focus-visible:ring-[1px]",
        "disabled:opacity-64 aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 [disabled,focus-visible,aria-invalid]:shadow-none dark:aria-invalid:ring-destructive/24",
        size === "sm" && "h-8 px-3",
        size === "lg" && "h-10 px-6",
        props.type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        props.type === "file" &&
          "text-muted-foreground file:me-3 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      size={typeof size === "number" ? size : undefined}
      {...props}
    />
  );
}

export { Input };
