import { Tabs, TabsList, TabsTrigger } from "@/registry/pure-ui/ui/tabs";

export function TabsHorizontalOrientationDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="docs" orientation="horizontal" variant="segmented">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="docs" orientation="horizontal" variant="underline">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="docs" orientation="horizontal" variant="card">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
