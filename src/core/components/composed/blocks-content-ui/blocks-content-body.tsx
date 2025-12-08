import { ParsedBlockContent } from "@/lib/block-content-parser";
import { MDXRemote } from "components/mdx";

interface Props {
  parsedContent: ParsedBlockContent;
}

export const BlocksContentBody = ({ parsedContent }: Props) => {
  return (
    <div className="grid grid-cols-[minmax(0,calc(85ch+260px))] justify-center mx-auto lg:mr-0 w-full">
      <div className="mb-12">
        <main id="main-content" className="mt-16 md:mt-20 lg:mt-12 mb-24">
          <MDXRemote content={parsedContent.source ?? ""} />
        </main>
      </div>
    </div>
  );
};
