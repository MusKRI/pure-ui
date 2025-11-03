import { getContentByPathEffect } from "@/lib/content-parser";
import { Effect } from "effect";
import { CopyMarkdownClient } from "./copy-markdown.client";

type Props = {
  relativePath: string;
};

export const CopyMarkdown = async ({ relativePath }: Props) => {
  const fileContent = await Effect.runPromise(
    getContentByPathEffect(relativePath)
  );

  return <CopyMarkdownClient rawContent={fileContent} />;
};
