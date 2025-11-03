import { Suspense } from "react";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerMetaDiff } from "@/lib/mdx/transformer-meta-diff";
import { transformerCodeBlock } from "@/lib/mdx/transformer-code-block";
import { pureUIShikiTheme } from "@/lib/mdx/shiki-theme";

interface MDXRemoteProps {
  content: string;
}

export const MDXRemote = ({ content }: MDXRemoteProps) => {
  return (
    <Suspense>
      <NextMDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypeShiki,
                {
                  theme: pureUIShikiTheme,
                  inline: "tailing-curly-colon",
                  transformers: [
                    transformerNotationHighlight(),
                    transformerNotationDiff(),
                    transformerNotationWordHighlight(),
                    transformerCodeBlock(),
                    transformerMetaDiff(),
                    transformerMetaWordHighlight(),
                    transformerMetaHighlight(),
                  ],
                },
              ],
            ],
          },
        }}
      />
    </Suspense>
  );
};
