import { Effect } from "effect";

import { getComponentRegistryItemCached } from "@/lib/registry/process-registry";
import { processFilesWithErrorCollection } from "@/lib/registry/component-processor";
import { BlockShowcaseClient } from "./block-showcase.client";

interface BlockShowcaseProps {
  name: string;
}

export async function BlockShowcase({ name }: BlockShowcaseProps) {
  const item = await getComponentRegistryItemCached(name);

  if (!item || !item.files) {
    return <div>Block not found</div>;
  }

  const result = await Effect.runPromise(
    processFilesWithErrorCollection(item.files)
  );

  return (
    <BlockShowcaseClient
      processedFiles={result.successful}
      item={item}
      name={name}
    />
  );
}
