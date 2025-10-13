import { SidebarItem } from "@/types/sidebar.types";

const pureUIDocs = [
  {
    id: "introduction",
    title: "Introduction",
    href: "/docs",
    type: "link",
  },
  // {
  //   id: "installation",
  //   title: "Installation",
  //   type: "group",
  //   defaultExpanded: true,
  //   children: [
  //     {
  //       id: "nextjs",
  //       title: "Next.js",
  //       href: "/docs/installation/nextjs",
  //       type: "link",
  //     },
  //     {
  //       id: "vite",
  //       title: "Vite",
  //       href: "/docs/installation/vite",
  //       type: "link",
  //     },
  //     {
  //       id: "astro",
  //       title: "Astro",
  //       href: "/docs/installation/astro",
  //       type: "link",
  //     },
  //   ],
  // },
] satisfies SidebarItem[];

const pureUIComponents = [
  {
    id: "accordion",
    title: "Accordion",
    type: "link",
    href: "/components/accordion",
  },
  // {
  //   id: "badge",
  //   title: "Badge",
  //   type: "link",
  //   href: "/components/badge",
  // },
  {
    id: "button",
    title: "Button",
    type: "link",
    href: "/components/button",
  },
  {
    id: "card",
    title: "Card",
    type: "link",
    href: "/components/card",
  },
  {
    id: "checkbox",
    title: "Checkbox",
    type: "link",
    href: "/components/checkbox",
  },
  {
    id: "dialog",
    title: "Dialog",
    type: "link",
    href: "/components/dialog",
  },
  // {
  //   id: "dropdown-menu",
  //   title: "Dropdown-menu",
  //   type: "link",
  //   href: "/components/dropdown-menu",
  // },
  {
    id: "input",
    title: "Input",
    type: "link",
    href: "/components/input",
  },
  {
    id: "input-otp",
    title: "Input OTP",
    type: "link",
    href: "/components/input-otp",
  },
  // {
  //   id: "switch",
  //   title: "Switch",
  //   type: "link",
  //   href: "/components/switch",
  // },
  // {
  //   id: "tooltip",
  //   title: "Tooltip",
  //   type: "link",
  //   href: "/components/tooltip",
  // },
] satisfies SidebarItem[];

export const pureUISidebarConfig = {
  docs: pureUIDocs,
  components: pureUIComponents,
};

export const getSidebarConfig = (pathname: string): SidebarItem[] => {
  if (pathname.startsWith("/docs")) {
    return pureUISidebarConfig.docs;
  }
  if (pathname.startsWith("/components")) {
    return pureUISidebarConfig.components;
  }
  return [];
};
