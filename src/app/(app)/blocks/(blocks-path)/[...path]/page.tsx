import { Effect } from "effect";
import { notFound } from "next/navigation";

import {
  BlocksContentBody,
  BlocksContentInfoHeader,
} from "components/composed/blocks-content-ui";
import { getBlockContentByPath } from "@/lib/block-content-parser";
import { parseBlockSlug } from "@/lib/block-slug-parser";

export default async function BlocksPathPage(
  props: PageProps<"/blocks/[...path]">
) {
  const { path = [] } = await props.params;

  const parsedBlockSlug = await Effect.runPromise(parseBlockSlug(path));

  if (!parsedBlockSlug.isValidPath || !parsedBlockSlug.validPath) {
    notFound();
  }

  const contentExit = await Effect.runPromiseExit(
    getBlockContentByPath(parsedBlockSlug.validPath)
  );

  if (contentExit._tag === "Failure") {
    notFound();
  }

  const content = contentExit.value;

  return (
    <div className="p-4">
      <BlocksContentInfoHeader content={content} />
      <BlocksContentBody parsedContent={content} />
    </div>
  );
}
