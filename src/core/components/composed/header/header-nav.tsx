"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/classes";
import { pureUIHeaderLinks } from "./data";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex space-x-4 lg:space-x-8">
      {pureUIHeaderLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "text-sm font-medium",
            pathname.startsWith(link.href)
              ? "text-sidebar-primary"
              : "text-sidebar-foreground/60 hover:text-sidebar-primary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
