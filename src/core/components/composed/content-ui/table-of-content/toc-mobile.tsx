"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { LineLeaning } from "@/core/icons/pack1";
import { Heading } from "@/lib/content-parser";
import { TOCProvider, useActiveAnchor, useTOCItems } from "./toc";
import { cn } from "@/lib/classes";
import { useOutsideClick } from "hooks/use-outside-click";

type Props = {
  headings: Heading[];
};

export function PureUITableOfContentMobile({ headings }: Props) {
  return (
    <TOCProvider toc={headings}>
      <MobileTOCContent />
    </TOCProvider>
  );
}

function MobileTOCContent() {
  const [isOpen, setIsOpen] = useState(false);
  const activeAnchor = useActiveAnchor();
  const items = useTOCItems();

  const activeHeading = items.find((item) => item.id === activeAnchor);

  const mobileTOCRef = useRef<HTMLDivElement>(null);

  useOutsideClick(mobileTOCRef, () => setIsOpen(false), true);

  return (
    <motion.div
      ref={mobileTOCRef}
      className="fixed z-50 max-w-full w-full backdrop-blur-lg bg-muted/70 border-y border-border block lg:hidden text-sm overflow-hidden"
      animate={{
        height: isOpen ? "auto" : "45px",
      }}
      style={{
        willChange: "height",
      }}
    >
      <button
        className="flex items-center px-6 py-2 w-full group h-[45px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium flex items-center shrink-0">
          <LineLeaning className="size-3.5 mr-2 shrink-0" />
          <span className="text-[13px] h-[0.89lh]">Contents</span>
        </div>

        {activeAnchor && (
          <div className="text-muted-foreground group-hover:text-foreground flex items-center overflow-hidden">
            <ChevronRight className="size-3.5 mx-1 shrink-0" />
            <div className="inline-block whitespace-pre">
              <AnimatePresence mode="wait">
                {activeAnchor && (
                  <motion.div
                    key={activeAnchor}
                    className="inline-block whitespace-pre text-[13px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    {activeHeading?.title.split("").map((char, index) => (
                      <motion.span
                        key={`${activeAnchor}-${index}-${char}`}
                        className="inline-block whitespace-pre text-muted-foreground font-mono"
                        initial={{
                          opacity: 0,
                          filter: "blur(4px)",
                          rotateX: 90,
                          y: 5,
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                          rotateX: 0,
                          y: 0,
                        }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.3,
                          delay: index * 0.015,
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        <ChevronDown
          className={cn(
            "ml-auto size-3.5 shrink-0 [transition:rotate_0.7s_cubic-bezier(0.19,1,0.22,1)]",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="max-h-[320px] overflow-y-auto">
              <nav className="flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

                <div
                  className="flex flex-col gap-3 items-start max-h-[calc(100vh-16rem)] overflow-y-auto py-4 relative"
                  style={{
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // IE/Edge
                  }}
                >
                  {items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "relative text-muted-foreground cursor-pointer hover:text-primary [overlap-wrap:anywhere] [transition:color_0.2s_ease-out]",
                          item.id === activeAnchor && "text-foreground"
                        )}
                        style={{
                          paddingInlineStart:
                            item.level === 3 ? "26px" : "14px",
                        }}
                        onClick={() => handleScroll(item.id)}
                      >
                        <span className="">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </nav>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function handleScroll(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
