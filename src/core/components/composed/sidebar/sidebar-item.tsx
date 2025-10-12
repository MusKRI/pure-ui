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
      className="text-sm block px-2.5 font-medium"
      onClick={handleClosingSidebar}
    >
      <div
        className={cn(
          "relative text-muted-foreground hover:text-foreground py-2",
          "before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-2.5 before:z-0 before:size-1 before:bg-transparent before:rounded-full",
          pathname === item.href ? ["before:bg-primary text-primary"] : [""]
        )}
      >
        {item.title}
      </div>
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

  return (
    <div className="relative block">
      <div
        className="flex items-center justify-between px-2.5 py-2 cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <span>{item.title}</span>
        <ChevronDownIcon
          className={cn(
            "w-4 h-4 [transition:rotate_0.2s] [transition-timing-function:cubic-bezier(0.19.1,0.22,1)]",
            isExpanded ? "-rotate-90" : "rotate-0"
          )}
        />
      </div>

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
