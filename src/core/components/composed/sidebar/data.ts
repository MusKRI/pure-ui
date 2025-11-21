import { SidebarItem } from "@/types/sidebar.types";

const pureUIDocs = [
  {
    id: "introduction",
    title: "Introduction",
    href: "/docs",
    type: "link",
  },
  {
    id: "get-started",
    title: "Get Started",
    href: "/docs/get-started",
    type: "link",
  },
  {
    id: "installation",
    title: "Installation",
    type: "group",
    href: "/docs/installation",
    defaultExpanded: true,
    children: [
      {
        id: "nextjs",
        title: "Next.js",
        href: "/docs/installation/nextjs",
        type: "link",
      },
      {
        id: "vite",
        title: "Vite",
        href: "/docs/installation/vite",
        type: "link",
      },
      // {
      //   id: "laravel",
      //   title: "Laravel",
      //   href: "/docs/installation/laravel",
      //   type: "link",
      // },
      {
        id: "react-router",
        title: "React Router",
        href: "/docs/installation/react-router",
        type: "link",
      },
      // {
      //   id: "astro",
      //   title: "Astro",
      //   href: "/docs/installation/astro",
      //   type: "link",
      // },
      {
        id: "tanstack-start",
        title: "Tanstack Start",
        href: "/docs/installation/tanstack-start",
        type: "link",
      },
      {
        id: "tanstack-router",
        title: "Tanstack Router",
        href: "/docs/installation/tanstack-router",
        type: "link",
      },
      {
        id: "manual",
        title: "Manual",
        href: "/docs/installation/manual",
        type: "link",
      },
    ],
  },
  {
    id: "theming",
    title: "Theming",
    href: "/docs/theming",
    type: "link",
  },
] satisfies SidebarItem[];

const pureUIComponents = [
  {
    id: "accordion",
    title: "Accordion",
    type: "link",
    href: "/components/accordion",
  },
  {
    id: "button",
    title: "Button",
    type: "link",
    href: "/components/button",
    tag: "UPDATED",
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
    id: "detached-triggers",
    title: "Detached Triggers",
    type: "group",
    href: "/components/detached-triggers",
    tag: "NEW",
    defaultExpanded: false,
    children: [
      {
        id: "dialog",
        title: "Dialog",
        href: "/components/detached-triggers/dialog",
        type: "link",
      },
    ],
  },

  {
    id: "dialog",
    title: "Dialog",
    type: "link",
    href: "/components/dialog",
    tag: "UPDATED",
  },
  {
    id: "input",
    title: "Input",
    type: "link",
    href: "/components/input",
  },
  {
    id: "input-group",
    title: "Input Group",
    type: "link",
    href: "/components/input-group",
  },
  {
    id: "input-otp",
    title: "Input OTP",
    type: "link",
    href: "/components/input-otp",
  },
  {
    id: "label",
    title: "Label",
    type: "link",
    href: "/components/label",
  },
  {
    id: "menu",
    title: "Menu",
    type: "link",
    href: "/components/menu",
  },
  {
    id: "popover",
    title: "Popover",
    type: "link",
    href: "/components/popover",
  },
  {
    id: "scroll-area",
    title: "Scroll Area",
    type: "link",
    href: "/components/scroll-area",
    tag: "NEW",
  },
  {
    id: "select",
    title: "Select",
    type: "link",
    href: "/components/select",
  },
  {
    id: "separator",
    title: "Separator",
    type: "link",
    href: "/components/separator",
  },
  {
    id: "spinner",
    title: "Spinner",
    type: "link",
    href: "/components/spinner",
  },
  {
    id: "switch",
    title: "Switch",
    type: "link",
    href: "/components/switch",
  },
  {
    id: "textarea",
    title: "Textarea",
    type: "link",
    href: "/components/textarea",
  },
  {
    id: "toast",
    title: "Toast",
    type: "link",
    href: "/components/toast",
    tag: "NEW",
  },
  {
    id: "tooltip",
    title: "Tooltip",
    type: "link",
    href: "/components/tooltip",
  },
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
