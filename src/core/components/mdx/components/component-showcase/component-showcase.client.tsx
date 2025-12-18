"use client";

import { useMemo, useState } from "react";
import { Tabs } from "@base-ui/react/tabs";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { ExtendedPureUIFile } from "@/lib/registry/component-processor";
import { ExtendedRegistryItem } from "@/lib/registry/process-registry";
import { cn } from "@/lib/classes";
import { Index } from "@/registry/pure-ui/__index__";
import { SourceCodeIcon, ViewIcon } from "@/core/icons/pack1";

import { ComponentShowcaseTab } from "./component-showcase-tab";
import { ComponentSources } from "./component-sources";

interface ComponentShowcaseClientProps {
  processedFiles: ExtendedPureUIFile[];
  item: ExtendedRegistryItem;
  name: string;
}

export const tabs = [
  {
    name: "preview",
    icon: ViewIcon,
  },
  {
    name: "code",
    icon: SourceCodeIcon,
  },
] as const;

export function ComponentShowcaseClient({
  processedFiles,
  item,
  name,
}: ComponentShowcaseClientProps) {
  const [activeTab, setActiveTab] = useState<string>("preview");

  const FoundComponent = Index[name];

  const ComponentDemo = useMemo(
    () => FoundComponent?.component,
    [FoundComponent]
  );

  return (
    <div
      className={cn(
        "PureUIComponentShowcase [.PureCodeBlockWrapper+&]:mt-7 [.PureUIComponentShowcase:has(+.PureP)]:mb-5! relative mb-12"
      )}
    >
      <LayoutGroup>
        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col gap-4">
            <Tabs.List className="relative flex items-center gap-3">
              {tabs.map((tab) => (
                <ComponentShowcaseTab
                  key={tab.name}
                  tab={tab}
                  isActive={activeTab === tab.name}
                />
              ))}
              <Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 rounded-sm bg-muted transition-all duration-270 ease-[cubic-bezier(0.175,0.885,0.32,1.1)]">
                {/* <span className="absolute left-0 right-0 top-[0px] h-4.5 rounded-full bg-gradient-to-t z-1 from-background to-primary opacity-10 blur-[2px]"></span> */}
              </Tabs.Indicator>
            </Tabs.List>

            <AnimatePresence initial={false}>
              {activeTab === "preview" && (
                <Tabs.Panel value="preview" keepMounted>
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: -10, height: "auto" }}
                    animate={{ opacity: 1, x: 0, height: "100%" }}
                    exit={{ opacity: 0, x: 10, height: "auto" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                    style={{
                      willChange: "height",
                    }}
                    className="rounded-2xl bg-code border border-border relative bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding"
                  >
                    <div className="px-8 flex items-center justify-center pb-12 pt-12 h-full">
                      <div className="h-full w-full">
                        <div className="flex items-center justify-center min-h-full h-full">
                          {ComponentDemo ? (
                            <div className="w-full flex items-center justify-center py-4">
                              <ComponentDemo />
                            </div>
                          ) : (
                            <div className="text-center p-8">
                              <p className="text-white font-medium">
                                Demo Loading...
                              </p>
                              <p className="text-gray-400 text-sm mt-2">
                                {FoundComponent.title}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tabs.Panel>
              )}

              {activeTab === "code" && (
                <Tabs.Panel value="code" keepMounted>
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, x: 10, height: "auto" }}
                    animate={{ opacity: 1, x: 0, height: "100%" }}
                    exit={{ opacity: 0, x: 10, height: "auto" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.175, 0.885, 0.32, 1.1],
                    }}
                    style={{
                      willChange: "height",
                    }}
                    className="rounded-2xl bg-code border border-border relative bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-2xl)+4px)] after:border after:border-border/50 after:bg-clip-padding"
                  >
                    <ComponentSources
                      name={name}
                      processedFiles={processedFiles}
                      item={item}
                    />
                  </motion.div>
                </Tabs.Panel>
              )}
            </AnimatePresence>
          </div>
        </Tabs.Root>
      </LayoutGroup>
    </div>
  );
}
