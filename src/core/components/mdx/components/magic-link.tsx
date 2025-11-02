import { cn } from "@/lib/classes";

interface MagicLinkProps extends React.ComponentProps<"a"> {}

export const MagicLink = ({ className, ...props }: MagicLinkProps) => {
  return (
    <a
      target="_blank"
      className={cn(
        "PureLink group relative inline-flex items-center text-foreground/85",
        className,
        "before:pointer-events-none before:absolute before:left-0 before:w-full before:content-[''] before:border before:border-dashed before:border-transparent",
        "before:origin-right before:scale-x-0 before:[transition-property:transform,height,border-radius] before:duration-300 before:ease-spring-snappy",
        "before:origin-center md:before:bottom-0",
        "before:z-1 px-1 before:h-0 before:scale-x-100 before:mix-blend-difference hover:before:h-full before:border-white hover:text-foreground"
      )}
      {...props}
    >
      {props.children}
    </a>
  );
};
