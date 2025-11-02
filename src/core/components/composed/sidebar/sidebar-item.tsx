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
  handleClosingSidebar: () => void;
};

export function SidebarItem({
  item,
  pathname,
  handleClosingSidebar,
}: SidebarItemProps) {
  const ifSidebarLink = isSidebarLink(item);

  if (ifSidebarLink) {
    return (
      <SidebarLinkItem
        item={item}
        pathname={pathname}
        handleClosingSidebar={handleClosingSidebar}
      />
    );
  }

  return (
    <SidebarGroupItem
      item={item}
      pathname={pathname}
      handleClosingSidebar={handleClosingSidebar}
    />
  );
}

function SidebarLinkItem({
  item,
  pathname,
  handleClosingSidebar,
}: {
  item: SidebarLinkItem;
  pathname: string;
  handleClosingSidebar: () => void;
}) {
  return (
    <Link
      key={item.id}
      href={item.href}
      className={cn(
        "text-sm block py-1.5 px-4 rounded-md font-[550]",
        pathname === item.href
          ? ["text-sidebar-primary", "bg-sidebar-accent/60"]
          : ["text-sidebar-foreground/60 hover:text-sidebar-primary"]
      )}
      onClick={handleClosingSidebar}
    >
      {item.title}
    </Link>
  );
}

function SidebarGroupItem({
  item,
  pathname,
  handleClosingSidebar,
}: {
  item: SidebarGroupItem;
  pathname: string;
  handleClosingSidebar: () => void;
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
      <span>{item.title}</span>
      <ChevronDownIcon
        className={cn(
          "w-4 h-4 [transition:rotate_0.2s] [transition-timing-function:cubic-bezier(0.19.1,0.22,1)]",
          isExpanded ? "-rotate-90" : "rotate-0"
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
              : ["text-muted-foreground hover:text-foreground"]
          )}
          onClick={(e) => {
            if (isActive) {
              e.preventDefault();
              handleGroupClick();
            } else {
              handleClosingSidebar();
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
                  handleClosingSidebar={handleClosingSidebar}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
