type HeaderLink = {
  label: string;
  href: string;
  tag?: string;
};

export const pureUIHeaderLinks = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Components",
    href: "/docs/components",
  },
  {
    label: "Blocks",
    href: "/blocks",
    tag: "NEW",
  },
] satisfies HeaderLink[];
