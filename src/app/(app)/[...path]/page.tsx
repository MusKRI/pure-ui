import { Effect } from "effect";
import { notFound } from "next/navigation";

import { ContentBody, ContentInfoHeader } from "components/composed/content-ui";
import { getContentByPath } from "@/lib/content-parser";
import { parseSlug } from "@/lib/slug-parser";
import { getStaticPaths } from "@/lib/static-paths";
import { getAppUrl } from "@/lib/env";

export async function generateMetadata(props: PageProps<"/[...path]">) {
  const { path = [] } = await props.params;

  const parsedSlug = await Effect.runPromise(parseSlug(path));

  if (!parsedSlug.isValidPath || !parsedSlug.validPath) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const contentExit = await Effect.runPromiseExit(
    getContentByPath(parsedSlug.validPath)
  );

  if (contentExit._tag === "Failure") {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const content = contentExit.value;

  const { title, description, features = [] } = content.frontmatter;

  return {
    title: `${title} - Pure UI`,
    description: description,
    keywords: [
      "pure ui",
      "design system",
      "base ui",
      "typescript",
      "tailwind css",
    ],
    openGraph: {
      title: `${title} - Pure UI`,
      description: description,
      type: "article",
      url: `${getAppUrl()}/${parsedSlug.validPath}`,
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: `${title} - Pure UI Component`,
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
      canonical: `${getAppUrl()}/${parsedSlug.validPath}`,
    },
    category: "technology",
  };
}

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
