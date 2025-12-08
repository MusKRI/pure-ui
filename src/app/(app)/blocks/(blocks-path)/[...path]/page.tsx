import { Effect } from "effect";
import { notFound } from "next/navigation";

import {
  BlocksContentBody,
  BlocksContentInfoHeader,
} from "components/composed/blocks-content-ui";
import { getBlockContentByPath } from "@/lib/block-content-parser";
import { parseBlockSlug } from "@/lib/block-slug-parser";
import { getBlockStaticPaths } from "@/lib/static-paths";
import { getAppUrl } from "@/lib/env";

export async function generateMetadata(props: PageProps<"/blocks/[...path]">) {
  const { path = [] } = await props.params;

  const parsedBlockSlug = await Effect.runPromise(parseBlockSlug(path));

  if (!parsedBlockSlug.isValidPath || !parsedBlockSlug.validPath) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const contentExit = await Effect.runPromiseExit(
    getBlockContentByPath(parsedBlockSlug.validPath)
  );

  if (contentExit._tag === "Failure") {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const content = contentExit.value;

  const { title, description } = content.frontmatter;

  // Construct URL path from route params
  const urlPath = path.length > 0 ? `blocks/${path.join("/")}` : "blocks";

  return {
    metadataBase: new URL(getAppUrl()),
    title: `${title} Blocks - Pure UI`,
    description: description,
    keywords: [
      "pure ui",
      "design system",
      "base ui",
      "typescript",
      "tailwind css",
      "blocks",
    ],
    openGraph: {
      title: `${title} - Pure UI`,
      description: description,
      type: "article",
      url: `${getAppUrl()}/${urlPath}`,
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: `${title} - Pure UI Block`,
        },
      ],
      siteName: "Pure UI",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Pure UI`,
      description: description,
      images: ["/images/og.png"],
    },
    alternates: {
      canonical: `${getAppUrl()}/${urlPath}`,
    },
    category: "technology",
  };
}

export async function generateStaticParams() {
  const staticPaths = await getBlockStaticPaths();

  return staticPaths;
}

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
