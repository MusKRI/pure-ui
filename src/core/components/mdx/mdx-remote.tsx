import { Suspense } from "react";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";

interface MDXRemoteProps {
  content: string;
}

export const MDXRemote = ({ content }: MDXRemoteProps) => {
  return (
    <Suspense>
      <NextMDXRemote source={content} components={mdxComponents} />
    </Suspense>
  );
};
