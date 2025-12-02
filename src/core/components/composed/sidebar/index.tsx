"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { getSidebarConfig } from "./data";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  const pathname = usePathname();

  const sidebarConfig = useMemo(() => getSidebarConfig(pathname), [pathname]);

  return (
    <aside className="h-[calc(100vh-4rem)] border-r border-border w-[260px] shrink-0 lg:flex-col overflow-y-auto top-16 fixed bg-sidebar overscroll-y-contain scrollbar-gutter z-50 hidden lg:block">
      <div className="p-4">
        <div className="relative flex flex-col gap-0.5">
          {sidebarConfig.map((item) => (
            <SidebarItem key={item.id} item={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </aside>
  );
}
