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
            "text-base",
            pathname.startsWith(link.href)
              ? "text-primary"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
