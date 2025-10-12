"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { InstallationTab } from "@/lib/mdx/installation-commands";
import { getToolIcon } from "@/lib/mdx/package-managers";
import { cn } from "@/lib/classes";

interface Props {
  installationTabs: InstallationTab[];
  defaultTab: string;
}

export function InstallationCommandsClient({
  installationTabs,
  defaultTab,
}: Props) {
  const uniqueId = useId();

  const tabs = useMemo(() => {
    const result = installationTabs.map((tab) => {
      return {
        ...tab,
        icon: getToolIcon(tab.name),
      };
    });

    return result;
  }, [installationTabs]);

  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.name || ""
  );

  const handleTabChange = useCallback((tabName: string) => {
    setActiveTab(tabName);
  }, []);

  const activeTabData = useMemo(() => {
    return tabs.find((tab) => tab.name === activeTab);
  }, [activeTab, tabs]);

  return (
    <div className="relative border border-border bg-muted mt-3 rounded-xl overflow-hidden">
      <div className="h-full flex flex-col">
        <div
          className="flex items-center px-3 [&::-webkit-scrollbar]:hidden z-2 overflow-auto shrink-0"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab.name)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium [transition:color_0.05s] ease-spring-soft whitespace-nowrap cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                activeTab === tab.name
                  ? "text-foreground bg-muted shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ willChange: "transform" }}
            >
              <AnimatePresence>
                {activeTab === tab.name && (
                  <motion.div
                    className="absolute inset-0 bg-muted border border-y-0 border-border"
                    layoutId={`tabbed-terminal-tab-bg-${uniqueId}`}
                    transition={{
                      duration: 0.4,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="relative flex items-center gap-2 z-2">
                <motion.div
                  initial={false}
                  animate={{
                    scale: activeTab === tab.name ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <tab.icon
                    className={cn(
                      "size-4",
                      activeTab === tab.name
                        ? "text-primary grayscale-0"
                        : "text-muted-foreground/70 grayscale-100"
                    )}
                  />
                </motion.div>
                <span className="font-medium lowercase">{tab.name}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-auto border-t border-border relative -top-px">
          <AnimatePresence mode="wait">
            {activeTabData && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0.4, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0.4, filter: "blur(6px)" }}
                transition={{
                  duration: 0.2,
                  ease: "circInOut",
                }}
                className={cn("relative")}
              >
                {activeTabData.content ? (
                  <div
                    className={cn(
                      "overflow-hidden font-mono",
                      "[&>pre]:overflow-x-auto [&>pre]:scrollbar-thin [&>pre]:scrollbar-track-transparent [&>pre]:scrollbar-thumb-muted-foreground",
                      "[&>pre]:text-sm [&>pre]:leading-relaxed",
                      "[&>pre]:p-5 [&>pre]:m-0",
                      "[&>pre]:whitespace-pre [&>pre>code]:whitespace-pre",
                      "[&>pre>code]:inline-block [&>pre>code]:font-mono [&>pre>code]:min-w-full [&>pre>code]:text-foreground",
                      "[&>pre]:tab-size-4 [&>pre>code]:tab-size-4",
                      "[&::-webkit-scrollbar]:w-2",
                      "[&::-webkit-scrollbar-track]:bg-transparent",
                      "[&::-webkit-scrollbar-thumb]:bg-border",
                      "[&::-webkit-scrollbar-thumb]:rounded-full",
                      "[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/30"
                    )}
                    dangerouslySetInnerHTML={{
                      __html: activeTabData.content,
                    }}
                  />
                ) : (
                  <pre
                    className={cn(
                      "p-4 m-0 overflow-auto text-sm font-mono",
                      "text-foreground bg-transparent",
                      "whitespace-pre-wrap break-words",
                      "[&::-webkit-scrollbar]:w-2",
                      "[&::-webkit-scrollbar-track]:bg-transparent",
                      "[&::-webkit-scrollbar-thumb]:bg-border",
                      "[&::-webkit-scrollbar-thumb]:rounded-full",
                      "[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/30"
                    )}
                  >
                    <code className="text-foreground font-mono">
                      {activeTabData.content}
                    </code>
                  </pre>
                )}

                {/* Copy Button */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
