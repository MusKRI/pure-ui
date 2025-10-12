import { Effect } from "effect";
import { notFound } from "next/navigation";

import {
  ContentBody,
  ContentInfoHeader,
} from "@/core/components/composed/content-ui";
import { getContentByPath } from "@/lib/content-parser";
import { parseSlug } from "@/lib/slug-parser";

export default async function PureUIFlowPage(props: PageProps<"/[...path]">) {
  const { path = [] } = await props.params;

  const parsedSlug = await Effect.runPromise(parseSlug(path));

  if (!parsedSlug.isValidPath || !parsedSlug.validPath) {
    notFound();
  }

  const contentExit = await Effect.runPromiseExit(
    getContentByPath(parsedSlug.validPath)
  );

  if (contentExit._tag === "Failure") {
    notFound();
  }

  const content = contentExit.value;

  return (
    <div className="flex flex-col scroll-smooth">
      <ContentInfoHeader content={content} />
      <ContentBody parsedContent={content} />
    </div>
  );
}
