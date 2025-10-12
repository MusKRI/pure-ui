import { Effect } from "effect";
import {
  getComponentRegistryItemCachedRefined,
  runtime,
} from "@/lib/registry/process-registry";
import { processFilesWithErrorCollection } from "@/lib/registry/component-processor";
import { ComponentCodePreviewClient } from "./component-code-preview.client";

interface ComponentCodePreviewProps {
  name: string;
}

export async function ComponentCodePreview({
  name,
}: ComponentCodePreviewProps) {
  const program = getComponentRegistryItemCachedRefined(name);

  const result = await Effect.runPromiseExit(
    Effect.provide(program, await Effect.runPromise(runtime))
  );

  if (result._tag === "Failure") {
    return <div>Component not found</div>;
  }

  const item = result.value;

  if (!item?.files) {
    return <div>No files found</div>;
  }

  const processedFilesExit = await Effect.runPromiseExit(
    processFilesWithErrorCollection(item?.files ?? [])
  );

  if (processedFilesExit._tag === "Failure") {
    return <div>Error processing files</div>;
  }

  const processedFiles = processedFilesExit.value?.successful;

  return (
    <ComponentCodePreviewClient
      processedFiles={processedFiles}
      item={item}
      name={name}
    />
  );
}
