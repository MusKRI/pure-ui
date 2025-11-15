import Link from "next/link";

import { cn } from "@/lib/classes";
import { HeaderNav } from "./header-nav";
import { ThemeToggle } from "../theme-toggle";
import { PureUISidebarToggleButton } from "./sidebar-toggle-button";
import { PureUILogo } from "../logo";

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full backdrop-blur-lg border-b bg-sidebar">
      <div className="mx-auto w-full max-w-full">
        <div className="flex h-16 items-center justify-between gap-2 md:gap-4 px-6">
          <div className="mr-6 sm:mr-12 flex gap-2 md:gap-0">
            <PureUISidebarToggleButton />

            <div className="flex items-center gap-1">
              <Link href="/" className="flex items-center gap-1">
                <PureUILogo className="w-6 h-6 text-primary" />
                <div
                  className={cn(
                    "[--text-color:linear-gradient(180deg,#555_0%,#000_100%)] dark:[--text-color:linear-gradient(180deg,#fff_0%,#adadad_100%)]",
                    "bg-clip-text text-transparent bg-(image:--text-color) font-semibold relative text-xl font-chillax"
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
