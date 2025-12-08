import { SidebarItem } from "@/types/sidebar.types";

export const blocksNavItems = [
  {
    id: "calendar",
    title: "Calendar",
    href: "/blocks/calendar",
    type: "link",
  },
  {
    id: "forms",
    title: "Forms",
    href: "/blocks/forms",
    type: "link",
  },
] satisfies SidebarItem[];
