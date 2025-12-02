"use client";

import { Dialog as SheetPrimitive } from "@base-ui-components/react/dialog";

import Link from "next/link";

import { useSidebar } from "../sidebar/use-sidebar";
import { cn } from "@/lib/classes";
import { PureUILogo } from "../logo";
import { MobileMenuNav } from "./mobile-menu-nav";

export function MobileMenu() {
  const { isOpen, close, open } = useSidebar();

  return (
    <SheetPrimitive.Root
      open={isOpen}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          close();
        } else {
          open();
        }
      }}
    >
      <SheetPrimitive.Portal>
        <SheetPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <SheetPrimitive.Popup
          className={cn(
            "bg-background fixed z-50 flex flex-col shadow-lg inset-y-0 left-0 h-full w-2/3 border-r sm:max-w-sm",
            "[transition-property:translate,opacity] will-change-[translate,opacity] duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] data-starting-style:opacity-0 data-starting-style:-translate-x-full data-ending-style:opacity-0 data-ending-style:-translate-x-full"
          )}
        >
          <div className="h-16 bg-muted flex items-center px-6 border-b border-border shrink-0">
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
          <MobileMenuNav />
        </SheetPrimitive.Popup>
      </SheetPrimitive.Portal>
    </SheetPrimitive.Root>
  );
}
