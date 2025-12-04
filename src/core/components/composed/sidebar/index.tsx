"use client";

import { usePathname } from "next/navigation";

import { sidebarTree } from "./data";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-[calc(100vh-4rem)] border-r border-border w-[260px] shrink-0 lg:flex-col overflow-y-auto top-16 fixed bg-sidebar overscroll-y-contain scrollbar-gutter no-scrollbar z-50 hidden lg:block">
      <div className="from-sidebar via-sidebar/80 to-sidebar/50 sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b blur-xs" />
      <div className="p-4">
        <div className="relative flex flex-col gap-2">
          {sidebarTree.map((section) => (
            <div key={section.label} className="mt-6 first:mt-0">
              <h3 className="mb-1.5 px-4 text-xs font-medium text-sidebar-foreground/60 tracking-wider">
                {section.label}
              </h3>
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => (
                  <SidebarItem key={item.id} item={item} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="from-sidebar via-sidebar/80 to-sidebar/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
    </aside>
  );
}
