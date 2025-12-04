import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/classes";
import { ChevronDownIcon } from "@/core/icons/pack1";
import {
  isSidebarLink,
  type SidebarGroupItem,
  type SidebarItem,
  type SidebarLinkItem,
} from "@/types/sidebar.types";

type SidebarItemProps = {
  item: SidebarItem;
  pathname: string;
};

export function SidebarItem({ item, pathname }: SidebarItemProps) {
  const ifSidebarLink = isSidebarLink(item);

  if (ifSidebarLink) {
    return <SidebarLinkItem item={item} pathname={pathname} />;
  }

  return <SidebarGroupItem item={item} pathname={pathname} />;
}

function SidebarLinkItem({
  item,
  pathname,
}: {
  item: SidebarLinkItem;
  pathname: string;
}) {
  return (
    <Link
      key={item.id}
      href={item.href}
      className={cn(
        "text-sm flex items-center gap-2 py-1.5 px-4 rounded-md font-normal",
        pathname === item.href
          ? ["text-sidebar-primary", "bg-sidebar-accent/60", "font-medium"]
          : [
              "text-sidebar-foreground/80 hover:text-sidebar-primary hover:bg-sidebar-accent/40",
            ]
      )}
    >
      {item.title}
      {item.tag && (
        <span className="text-[10px] text-amber-600 font-medium">
          {item.tag}
        </span>
      )}
    </Link>
  );
}

function SidebarGroupItem({
  item,
  pathname,
}: {
  item: SidebarGroupItem;
  pathname: string;
}) {
  const [isExpanded, setIsExpanded] = useState(item.defaultExpanded ?? false);
  const isActive = item.href ? pathname === item.href : false;

  const handleGroupClick = () => {
    // If item has href and is not active, navigate to it
    // If item is active or has no href, toggle expansion
    if (isActive || !item.href) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleChevronClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const content = (
    <>
      <span className="flex gap-2">
        {item.title}
        {item.tag && (
          <span className="text-[10px] text-amber-600 font-medium">
            {item.tag}
          </span>
        )}
      </span>
      <ChevronDownIcon
        className={cn(
          "w-4 h-4 [transition:rotate_0.2s] ease-[cubic-bezier(0.19.1,0.22,1)]",
          isExpanded ? "rotate-0" : "-rotate-90"
        )}
        onClick={handleChevronClick}
      />
    </>
  );

  return (
    <div className="relative block">
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            "flex items-center justify-between px-4 py-1.5 rounded-md cursor-pointer text-sm font-medium",
            isActive
              ? ["text-sidebar-primary", "bg-sidebar-accent/60"]
              : [
                  "text-sidebar-foreground/80 hover:text-sidebar-primary hover:bg-sidebar-accent/40",
                ]
          )}
          onClick={(e) => {
            if (isActive) {
              e.preventDefault();
              handleGroupClick();
            }
          }}
        >
          {content}
        </Link>
      ) : (
        <div
          className="flex items-center justify-between px-4 py-1.5 rounded-md cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground"
          onClick={handleGroupClick}
        >
          {content}
        </div>
      )}

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-3">
              {item.children.map((child) => (
                <SidebarLinkItem
                  key={child.id}
                  item={child}
                  pathname={pathname}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
