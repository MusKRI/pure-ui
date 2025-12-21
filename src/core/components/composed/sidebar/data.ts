import { SidebarItem } from "@/types/sidebar.types";
import { blocksNavItems } from "../blocks-nav/data";

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
    defaultExpanded: false,
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
    href: "/docs/components/accordion",
  },
  {
    id: "avatar",
    title: "Avatar",
    type: "link",
    href: "/docs/components/avatar",
  },
  {
    id: "badge",
    title: "Badge",
    type: "link",
    href: "/docs/components/badge",
  },
  {
    id: "button",
    title: "Button",
    type: "link",
    href: "/docs/components/button",
  },
  {
    id: "button-group",
    title: "Button Group",
    type: "link",
    href: "/docs/components/button-group",
  },
  {
    id: "calendar",
    title: "Calendar",
    type: "link",
    href: "/docs/components/calendar",
  },
  {
    id: "card",
    title: "Card",
    type: "link",
    href: "/docs/components/card",
  },
  {
    id: "checkbox",
    title: "Checkbox",
    type: "link",
    href: "/docs/components/checkbox",
  },
  {
    id: "collapsible",
    title: "Collapsible",
    type: "link",
    href: "/docs/components/collapsible",
  },
  {
    id: "combobox",
    title: "Combobox",
    type: "link",
    href: "/docs/components/combobox",
  },
  {
    id: "detached-triggers",
    title: "Detached Triggers",
    type: "group",
    href: "/docs/components/detached-triggers",
    defaultExpanded: false,
    children: [
      {
        id: "dialog",
        title: "Dialog",
        href: "/docs/components/detached-triggers/dialog",
        type: "link",
      },
    ],
  },

  {
    id: "dialog",
    title: "Dialog",
    type: "link",
    href: "/docs/components/dialog",
  },
  {
    id: "input",
    title: "Input",
    type: "link",
    href: "/docs/components/input",
  },
  {
    id: "input-group",
    title: "Input Group",
    type: "link",
    href: "/docs/components/input-group",
  },
  {
    id: "input-otp",
    title: "Input OTP",
    type: "link",
    href: "/docs/components/input-otp",
  },
  {
    id: "kbd",
    title: "Kbd",
    type: "link",
    href: "/docs/components/kbd",
  },
  {
    id: "label",
    title: "Label",
    type: "link",
    href: "/docs/components/label",
  },
  {
    id: "menu",
    title: "Menu",
    type: "link",
    href: "/docs/components/menu",
  },
  {
    id: "number-field",
    title: "Number Field",
    type: "link",
    href: "/docs/components/number-field",
  },
  {
    id: "popover",
    title: "Popover",
    type: "link",
    href: "/docs/components/popover",
  },
  {
    id: "radio-group",
    title: "Radio Group",
    type: "link",
    href: "/docs/components/radio-group",
    tag: "NEW",
  },
  {
    id: "scroll-area",
    title: "Scroll Area",
    type: "link",
    href: "/docs/components/scroll-area",
  },
  {
    id: "select",
    title: "Select",
    type: "link",
    href: "/docs/components/select",
  },
  {
    id: "separator",
    title: "Separator",
    type: "link",
    href: "/docs/components/separator",
  },
  {
    id: "sheet",
    title: "Sheet",
    type: "link",
    href: "/docs/components/sheet",
  },
  {
    id: "spinner",
    title: "Spinner",
    type: "link",
    href: "/docs/components/spinner",
  },
  {
    id: "switch",
    title: "Switch",
    type: "link",
    href: "/docs/components/switch",
  },
  {
    id: "tabs",
    title: "Tabs",
    type: "link",
    href: "/docs/components/tabs",
    tag: "NEW",
  },
  {
    id: "textarea",
    title: "Textarea",
    type: "link",
    href: "/docs/components/textarea",
  },
  {
    id: "toast",
    title: "Toast",
    type: "link",
    href: "/docs/components/toast",
  },
  {
    id: "tooltip",
    title: "Tooltip",
    type: "link",
    href: "/docs/components/tooltip",
  },
] satisfies SidebarItem[];

export const pureUISidebarConfig = {
  docs: pureUIDocs,
  components: pureUIComponents,
  blocks: blocksNavItems,
};

export const sidebarTree = [
  {
    label: "Docs",
    items: pureUIDocs,
  },
  {
    label: "Components",
    items: pureUIComponents,
  },
];
