"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import { cn } from "@/lib/classes";

type TabsVariant = "segmented" | "underline" | "card";

function isValidVariant(variant: TabsVariant): variant is TabsVariant {
  return (
    variant === "segmented" || variant === "underline" || variant === "card"
  );
}

interface TabsContextType {
  variant?: TabsVariant;
}

const TabsContext = createContext<TabsContextType>({
  variant: "segmented",
});

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
}

interface TabsProps extends TabsPrimitive.Root.Props {
  variant?: TabsVariant;
}

function Tabs({ className, variant = "segmented", ...props }: TabsProps) {
  const finalVariant = isValidVariant(variant) ? variant : "segmented";

  return (
    <TabsContext.Provider value={{ variant: finalVariant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(
          "flex gap-2 data-[orientation=vertical]:flex-row data-[orientation=horizontal]:flex-col",
          className
        )}
        {...props}
      />
    </TabsContext.Provider>
  );
}

interface TabsListProps extends TabsPrimitive.List.Props {}

function TabsList({ className, children, ...props }: TabsListProps) {
  const { variant } = useTabs();

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative z-0 flex max-w-full w-fit items-center justify-start gap-x-0.5 text-muted-foreground data-[orientation=vertical]:flex-col max-sm:data-[orientation=horizontal]:overflow-x-auto max-sm:data-[orientation=horizontal]:overflow-y-hidden",
        variant === "segmented" && "rounded-[12px] bg-muted p-1",
        variant === "underline" &&
          "data-[orientation=vertical]:px-1 data-[orientation=horizontal]:py-1",
        variant === "card" && "p-1",
        className
      )}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        data-slot="tabs-indicator"
        className={cn(
          "-translate-y-(--active-tab-bottom) absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[translate,width] duration-200 ease-[cubic-bezier(.25,.46,.45,.94)] will-change-[translate,width] transform-gpu",
          variant === "segmented" &&
            "h-(--active-tab-height) rounded-md bg-card dark:bg-secondary shadow-sm border border-border/10 -z-1",
          variant === "underline" &&
            "data-[orientation=vertical]:-translate-x-px z-10 bg-primary data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:translate-y-[1.3px]",
          variant === "card" &&
            "rounded-md bg-secondary border border-border/10 -z-1"
        )}
      />
    </TabsPrimitive.List>
  );
}

interface TabsTriggerProps extends TabsPrimitive.Tab.Props {}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  const { variant } = useTabs();

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "flex items-center justify-center gap-2 shrink-0 cursor-pointer whitespace-nowrap text-sm text-secondary-foreground/66 data-active:text-foreground hover:text-foreground px-3 py-1 font-medium break-keep outline-none [transition-property:color] duration-200 ease-[cubic-bezier(.25,.46,.45,.94)] data-[orientation=vertical]:w-full [&_svg]:size-4 [&_svg]:shrink-0",
        variant === "segmented" && "rounded-md",
        variant === "underline" &&
          "data-[orientation=vertical]:px-2 data-[orientation=horizontal]:py-1.5 data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start",
        variant === "card" && "rounded-md",
        className
      )}
      {...props}
    />
  );
}

interface TabsPanelWrapperProps {
  children: React.ReactNode;
}

function TabsPanelsWrapper({ children }: TabsPanelWrapperProps) {
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect();

        setHeight(rect.height);
      }
    });

    if (contentContainerRef.current) {
      resizeObserver.observe(contentContainerRef.current);
    }

    return () => {
      if (contentContainerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden [transition-property:height] duration-200 ease-[cubic-bezier(.25,.46,.45,.94)]"
      style={{ height: height ?? null }}
    >
      <div data-slot="tabs-panel-wrapper" ref={contentContainerRef}>
        {children}
      </div>
    </div>
  );
}

interface TabsPanelProps extends TabsPrimitive.Panel.Props {}

function TabsPanel({ className, ...props }: TabsPanelProps) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn(className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsPanelsWrapper, TabsPanel };
