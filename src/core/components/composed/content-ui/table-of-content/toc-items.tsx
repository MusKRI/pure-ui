"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/classes";
import { useActiveAnchor, useTOCItems } from "./toc";

export function TOCItems() {
  const items = useTOCItems();
  const activeAnchor = useActiveAnchor();

  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="h-full relative">
      {/* <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" /> */}

      <div
        className="flex flex-col items-start h-full overflow-x-hidden overflow-y-auto my-4 vertical-scroll-shadow"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <div className="absolute left-0 w-[1.5px] inset-y-2 rounded-full bg-foreground/10" />

        {items.map((item) => {
          return (
            <div
              key={item.id}
              className={cn(
                "relative py-[3px] text-muted-foreground cursor-pointer hover:text-primary [overlap-wrap:anywhere] [transition:color_0.2s_ease-out]",
                item.id === activeAnchor && "text-foreground"
              )}
              style={{
                paddingInlineStart: item.level === 3 ? "26px" : "14px",
              }}
              onClick={() => handleScroll(item.id)}
            >
              {item.id === activeAnchor && (
                <motion.div
                  className="absolute left-0 inset-y-[6px] w-[1.2px] rounded-full bg-foreground"
                  layoutId="active-anchor"
                />
              )}
              <span
                className={cn(item.level === 3 ? "text-[13px]" : "text-[14px]")}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
