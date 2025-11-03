import { Effect } from "effect";
import { notFound } from "next/navigation";

import { ContentBody, ContentInfoHeader } from "components/composed/content-ui";
import { getContentByPath } from "@/lib/content-parser";
import { parseSlug } from "@/lib/slug-parser";
import { getStaticPaths } from "@/lib/static-paths";

export async function generateStaticParams() {
  const staticPaths = await getStaticPaths();

  return staticPaths;
}

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
      <ContentInfoHeader
        content={content}
        relativePath={parsedSlug.validPath}
      />
      <ContentBody parsedContent={content} />
    </div>
  );
}
