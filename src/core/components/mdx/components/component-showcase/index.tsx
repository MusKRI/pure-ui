import { getComponentRegistryItemCached } from "@/lib/registry/process-registry";
import { processFilesWithErrorCollection } from "@/lib/registry/component-processor";
import { Effect } from "effect";
import { ComponentShowcaseClient } from "./component-showcase.client";

interface ComponentShowcaseProps {
  name: string;
}

export async function ComponentShowcase({ name }: ComponentShowcaseProps) {
  // Simple async call - no runtime needed!
  const item = await getComponentRegistryItemCached(name);

  if (!item || !item.files) {
    return <div>Component not found</div>;
  }

  // Process files with error collection
  const result = await Effect.runPromise(
    processFilesWithErrorCollection(item.files)
  );

  return (
    <ComponentShowcaseClient
      processedFiles={result.successful}
      item={item}
      name={name}
    />
  );
}
