import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanelsWrapper,
  TabsTrigger,
} from "@/registry/pure-ui/ui/tabs";

export function TabsAutoHeightDemo() {
  return (
    <div className="max-w-md mx-auto w-full">
      <Tabs defaultValue="docs">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
        <div className="bg-muted p-4 rounded-lg">
          <TabsPanelsWrapper>
            <TabsPanel value="docs">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Docs</h3>
                <p className="text-sm text-muted-foreground">
                  Docs are a great way to learn about the product and how to use
                  it.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value="components">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Components</h3>
                <p className="text-sm text-muted-foreground">
                  Components are a great way to learn about the product and how
                  to use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Components are a great way to learn about the product and how
                  to use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Components are a great way to learn about the product and how
                  to use it.
                </p>
              </div>
            </TabsPanel>
            <TabsPanel value="blocks">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Blocks</h3>
                <p className="text-sm text-muted-foreground">
                  Blocks are a great way to learn about the product and how to
                  use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Blocks are a great way to learn about the product and how to
                  use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Blocks are a great way to learn about the product and how to
                  use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Blocks are a great way to learn about the product and how to
                  use it.
                </p>
                <p className="text-sm text-muted-foreground">
                  Blocks are a great way to learn about the product and how to
                  use it.
                </p>
              </div>
            </TabsPanel>
          </TabsPanelsWrapper>
        </div>
      </Tabs>
    </div>
  );
}
