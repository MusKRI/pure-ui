import { Tabs, TabsList, TabsTrigger } from "@/registry/pure-ui/ui/tabs";

export function TabsVerticalOrientationDemo() {
  return (
    <div className="flex flex-row flex-wrap gap-10">
      <Tabs defaultValue="docs" orientation="vertical" variant="segmented">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="docs" orientation="vertical" variant="underline">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>

      <Tabs defaultValue="docs" orientation="vertical" variant="card">
        <TabsList>
          <TabsTrigger value="docs">Docs</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
