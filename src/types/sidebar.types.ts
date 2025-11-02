// Base properties shared by all sidebar items
interface BaseSidebarItem {
  id: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Single link item (with no children)
export interface SidebarLinkItem extends BaseSidebarItem {
  type: "link";
  href: string;
}

// Item with nested children
export interface SidebarGroupItem extends BaseSidebarItem {
  type: "group";
  href?: string; // optional link for the group item itself
  defaultExpanded?: boolean;
  children: SidebarLinkItem[]; // children can only be link items
}

export type SidebarItem = SidebarLinkItem | SidebarGroupItem;

export function isSidebarLink(item: SidebarItem): item is SidebarLinkItem {
  return item.type === "link";
}

export function isSidebarGroup(item: SidebarItem): item is SidebarGroupItem {
  return item.type === "group";
}
