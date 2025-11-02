"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { useMediaQuery } from "hooks/use-media-query";
import { cn } from "@/lib/classes";

import { useOutsideClick } from "hooks/use-outside-click";
import { useSidebar } from "./use-sidebar";
import { pureUIHeaderLinks } from "../header/data";
import { getSidebarConfig } from "./data";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const { isOpen, close: closeSidebar, toggleButtonRef } = useSidebar();
  const pathname = usePathname();

  const sidebarRef = useRef<HTMLDivElement>(null);

  const sidebarConfig = useMemo(() => getSidebarConfig(pathname), [pathname]);

  useOutsideClick(
    sidebarRef,
    () => {
      if (isMobile && isOpen) {
        closeSidebar();
      }
    },
    true,
    toggleButtonRef ? [toggleButtonRef] : []
  );

  // Close sidebar when entering mobile mode
  useEffect(() => {
    if (isMobile && isOpen) {
      closeSidebar();
    }
  }, [isMobile]); // Only run when isMobile changes

  const handleClosingSidebar = useCallback(() => {
    if (isMobile && isOpen) {
      closeSidebar();
    }
  }, [isMobile, isOpen, closeSidebar]);

  return (
    <motion.aside
      ref={sidebarRef}
      initial={false}
      animate={{ x: isOpen ? 0 : -260 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      className="h-[calc(100vh-4rem)] border-r border-border w-[260px] shrink-0 lg:flex-col overflow-y-auto top-16 fixed bg-sidebar overscroll-y-contain scrollbar-gutter z-50"
    >
      <MobileNav pathname={pathname} />
      <div className="p-4">
        <div className="relative flex flex-col gap-0.5">
          {sidebarConfig.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              pathname={pathname}
              handleClosingSidebar={handleClosingSidebar}
            />
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <div className="px-4 py-2 min-md:hidden">
      <div className="flex flex-row items-center justify-between w-full relative">
        {pureUIHeaderLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-sm relative",
              pathname.startsWith(link.href)
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            {pathname.startsWith(link.href) && (
              <motion.span
                className="bg-primary absolute left-0 right-0 -bottom-1 h-[2px]"
                layoutId="mobile-nav-active-link"
              ></motion.span>
            )}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
