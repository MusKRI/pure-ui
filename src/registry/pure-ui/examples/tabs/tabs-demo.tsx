import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanelsWrapper,
  TabsTrigger,
} from "@/registry/pure-ui/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="docs">
      <TabsList>
        <TabsTrigger value="docs">Docs</TabsTrigger>
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="blocks">Blocks</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
