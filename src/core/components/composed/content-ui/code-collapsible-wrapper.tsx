"use client";

import * as React from "react";

import { cn } from "@/lib/classes";
import { Button } from "@/registry/default/components/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/registry/default/components/ui/collapsible";
import { Separator } from "@/registry/default/components/ui/separator";

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn("group/collapsible relative md:-mx-1", className)}
      {...props}
    >
      <div className="absolute top-1.5 right-10 z-10 flex items-center">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" className="text-muted-foreground">
              {isOpened ? "Collapse" : "Expand"}
            </Button>
          }
        />
        <Separator orientation="vertical" className="mx-1.5 h-5" />
      </div>
      <CollapsiblePanel
        className="relative mt-6 h-full overflow-hidden data-closed:max-h-64 [&>figure]:mt-0 [&>figure]:md:mx-0!"
        keepMounted
        hidden={false}
      >
        {children}
      </CollapsiblePanel>
      <CollapsibleTrigger className="absolute inset-x-0 -bottom-2 flex h-20 cursor-pointer items-center justify-center rounded-b-lg bg-linear-to-b from-transparent via-background via-50% to-background text-sm font-medium text-muted-foreground transition-colors group-data-open/collapsible:hidden hover:text-foreground">
        {isOpened ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
