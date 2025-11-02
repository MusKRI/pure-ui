"use client";

import { Tabs } from "@base-ui-components/react/tabs";

import { cn } from "@/lib/classes";

import { tabs } from "./component-showcase.client";

interface ShowcaseTabProps {
  tab: (typeof tabs)[number];
  isActive: boolean;
}

export function ComponentShowcaseTab({ tab, isActive }: ShowcaseTabProps) {
  return (
    <Tabs.Tab
      value={tab.name}
      className={cn(
        "relative flex items-center gap-2 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 ease-spring-soft rounded-lg transform cursor-pointer z-2 transform-gpu font-mono",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <tab.icon className="w-4 h-4" />
      <span className="capitalize">{tab.name}</span>
    </Tabs.Tab>
  );
}
