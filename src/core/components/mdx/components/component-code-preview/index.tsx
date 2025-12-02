import { Effect } from "effect";
import { getComponentRegistryItemCached } from "@/lib/registry/process-registry";
import { processFilesWithErrorCollection } from "@/lib/registry/component-processor";
import { ComponentCodePreviewClient } from "./component-code-preview.client";

interface ComponentCodePreviewProps {
  name: string;
}

export async function ComponentCodePreview({
  name,
}: ComponentCodePreviewProps) {
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
    <ComponentCodePreviewClient
      processedFiles={result.successful}
      item={item}
      name={name}
    />
  );
}
