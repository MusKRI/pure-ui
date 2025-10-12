import Link from "next/link";

import { cn } from "@/lib/classes";
import { HeaderNav } from "./header-nav";
import { ThemeToggle } from "../theme-toggle";
import { PureUISidebarToggleButton } from "./sidebar-toggle-button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg border-b bg-muted">
      <div className="mx-auto w-full max-w-full">
        <div className="flex h-16 items-center justify-between gap-2 md:gap-4 px-6">
          <div className="mr-6 sm:mr-12 flex gap-2 md:gap-0">
            {/* Sidebar Toggle will come here */}
            <PureUISidebarToggleButton />

            <div className="flex items-center gap-1">
              <Link href="/pure-ui" className="flex items-center gap-2">
                <div className="relative bg-foreground p-0.5 rounded-[7px] overflow-hidden shadow-2xl max-md:hidden">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-background"
                  >
                    <path
                      d="M6 20C6 20 9 14 13 14C17 14 19 17 22 17C25 17 28 12 28 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={cn(
                    "[--text-color:linear-gradient(180deg,#555_0%,#000_100%)] dark:[--text-color:linear-gradient(180deg,#fff_0%,#adadad_100%)]",
                    "bg-clip-text text-transparent bg-[image:var(--text-color)] font-bold relative text-xl font-mono"
                  )}
                >
                  Pure UI
                </div>
              </Link>
            </div>
          </div>

          <HeaderNav />

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
