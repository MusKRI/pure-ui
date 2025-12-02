"use client";

import Link from "next/link";

import { cn } from "@/lib/classes";
import { pureUIHeaderLinks } from "./data";

export function HeaderNav() {
  return (
    <div className="hidden lg:flex space-x-4 lg:space-x-8">
      {pureUIHeaderLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "text-sm font-medium text-sidebar-foreground/60 hover:text-sidebar-primary relative"
          )}
        >
          {link.label}
          {link.tag && (
            <span className="text-[10px] text-amber-600 font-medium absolute -top-1 -right-5">
              {link.tag}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
