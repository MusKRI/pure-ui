"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { Tabs } from "@base-ui-components/react/tabs";

import { InstallationTab } from "@/lib/mdx/installation-commands";
import { getToolIcon } from "@/lib/mdx/package-managers";
import { cn } from "@/lib/classes";
import { CopyButton } from "../copy-button";

interface Props {
  installationTabs: InstallationTab[];
  defaultTab: string;
}

export function InstallationCommandsClient({
  installationTabs,
  defaultTab,
}: Props) {
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

  return (
    <div className="PureInstallationCommands relative border border-border bg-code mt-3 rounded-xl overflow-hidden">
      <LayoutGroup>
        <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
          <div className="h-full flex flex-col">
            <Tabs.List
              className="relative flex items-center gap-3 px-3 [&::-webkit-scrollbar]:hidden z-2 overflow-auto shrink-0"
              style={{ scrollbarWidth: "none" }}
            >
              {tabs.map((tab) => (
                <Tabs.Tab
                  key={tab.name}
                  value={tab.name}
                  className={cn(
                    "relative z-2 flex items-center gap-2 px-3 py-2 text-sm font-medium [transition:color_0.05s] ease-spring-soft whitespace-nowrap cursor-pointer",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    activeTab === tab.name
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  style={{ willChange: "transform" }}
                >
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
                </Tabs.Tab>
              ))}
              <Tabs.Indicator className="absolute border-x bg-code left-0 top-1/2 -z-1 h-[calc(var(--active-tab-height)+1px)] w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 transition-all duration-200 ease-in-out" />
            </Tabs.List>

            <div className="flex-1 overflow-auto border-t border-border relative -top-px">
              <AnimatePresence mode="popLayout">
                {tabs.map((tab) => {
                  return (
                    <Tabs.Panel key={tab.name} value={tab.name} keepMounted>
                      {activeTab === tab.name && (
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0.4 }}
                          transition={{
                            duration: 0.2,
                            ease: "circInOut",
                          }}
                          className="relative"
                        >
                          {tab.content ? (
                            <div
                              className={cn(
                                "overflow-hidden font-mono",
                                "[&>pre]:overflow-x-auto [&>pre]:scrollbar-thin [&>pre]:scrollbar-track-transparent [&>pre]:scrollbar-thumb-code-foreground",
                                "[&>pre]:text-sm [&>pre]:leading-relaxed",
                                "[&>pre]:p-5 [&>pre]:m-0",
                                "[&>pre]:whitespace-pre [&>pre>code]:whitespace-pre",
                                "[&>pre>code]:inline-block [&>pre>code]:font-mono [&>pre>code]:min-w-full [&>pre>code]:text-code-foreground",
                                "[&>pre]:tab-size-4 [&>pre>code]:tab-size-4",
                                "[&::-webkit-scrollbar]:w-2",
                                "[&::-webkit-scrollbar-track]:bg-transparent",
                                "[&::-webkit-scrollbar-thumb]:bg-border",
                                "[&::-webkit-scrollbar-thumb]:rounded-full",
                                "[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/30"
                              )}
                              dangerouslySetInnerHTML={{
                                __html: tab.content,
                              }}
                            />
                          ) : (
                            <pre
                              className={cn(
                                "p-4 m-0 overflow-auto text-sm font-mono",
                                "text-foreground bg-code",
                                "whitespace-pre-wrap wrap-break-word",
                                "[&::-webkit-scrollbar]:w-2",
                                "[&::-webkit-scrollbar-track]:bg-transparent",
                                "[&::-webkit-scrollbar-thumb]:bg-border",
                                "[&::-webkit-scrollbar-thumb]:rounded-full",
                                "[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/30"
                              )}
                            >
                              <code className="text-foreground font-mono">
                                {tab.content}
                              </code>
                            </pre>
                          )}
                          {/* Copy Button */}
                          <CopyButton value={tab.content} />
                        </motion.div>
                      )}
                    </Tabs.Panel>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </Tabs.Root>
      </LayoutGroup>
    </div>
  );
}
