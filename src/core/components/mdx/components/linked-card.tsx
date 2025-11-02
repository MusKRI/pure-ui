import Link from "next/link";

type LinkedCardProps = {
  href: string;
  children: React.ReactNode;
};

export function LinkedCard({ href, children }: LinkedCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col bg-code/50 dark:bg-code p-6 sm:p-10 relative items-center justify-center rounded-2xl border border-border bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding"
    >
      {children}
    </Link>
  );
}
