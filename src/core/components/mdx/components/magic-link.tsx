import { cn } from "@/lib/classes";

interface MagicLinkProps extends React.ComponentProps<"a"> {}

export const MagicLink = ({ className, ...props }: MagicLinkProps) => {
  return (
    <a
      target="_blank"
      className={cn(
        "PureLink group relative inline-flex items-center text-foreground font-medium underline underline-offset-3",
        className
      )}
      {...props}
    >
      {props.children}
    </a>
  );
};
