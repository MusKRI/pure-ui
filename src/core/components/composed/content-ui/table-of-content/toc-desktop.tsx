import { LineLeaning } from "@/core/icons/pack1";
import { Heading } from "@/lib/content-parser";
import { TOCProvider } from "./toc";
import { TOCItems } from "./toc-items";

type Props = {
  headings: Heading[];
};

export const PureUITableOfContent = ({ headings }: Props) => {
  return (
    <div className="py-6 font-mono">
      <div className="font-medium flex items-center">
        <LineLeaning className="w-4 h-4 mr-2" />
        Contents
      </div>
      <TOCProvider toc={headings}>
        <TOCItems />
      </TOCProvider>
    </div>
  );
};
