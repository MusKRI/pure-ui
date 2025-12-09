"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollBar,
} from "@/registry/pure-ui/ui/scroll-area";
import { blocksNavItems } from "./data";
import { cn } from "@/lib/classes";

export function BlocksNav() {
  const pathname = usePathname();

  return (
    <div className="h-[calc(100vh-4rem)] w-[340px] shrink-0 lg:flex-col top-16 fixed overscroll-y-contain z-50 hidden lg:block py-6 px-6">
      <div className="relative flex flex-col gap-2 border border-dashed h-full w-full bg-sidebar shadow-inner p-2">
        <ScrollArea
          className="max-w-full w-full whitespace-nowrap border-none **:data-[slot=scroll-area-vertical-shadow]:[--bg:var(--sidebar)]"
          scrollShadow="vertical"
        >
          <ScrollAreaContent className="flex flex-col gap-1 py-1">
            {blocksNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-sidebar-foreground/60 hover:text-sidebar-primary hover:bg-sidebar-accent/80 relative px-4 py-1 rounded-md flex items-center gap-2",
                  pathname === item.href
                    ? "text-sidebar-primary bg-sidebar-accent/80"
                    : ""
                )}
              >
                {item.title}
                {item.tag && (
                  <span className="text-[10px] text-amber-600 font-medium">
                    {item.tag}
                  </span>
                )}
              </Link>
            ))}
          </ScrollAreaContent>
        </ScrollArea>
      </div>
    </div>
  );
}
