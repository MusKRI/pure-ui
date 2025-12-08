import { ParsedBlockContent } from "@/lib/block-content-parser";
import { cn } from "@/lib/classes";

type Props = {
  content: ParsedBlockContent;
};

export const BlocksContentInfoHeader = ({ content }: Props) => {
  const { title, description } = content.frontmatter;

  return (
    <div className="relative">
      <div
        className={cn(
          "pt-18 md:pt-10 mx-auto pb-7 flex flex-col gap-6 max-w-[calc(85ch+260px)]"
        )}
      >
        <h1 className="relative px-6 md:px-12 lg:px-20 md:mt-7 scroll-mt-32 md:scroll-mt-7 md:text-4xl tracking-8 text-balance text-3xl font-chillax font-medium">
          <span className="absolute left-0 top-[0.5em] right-0 h-3 border-b border-border border-dashed"></span>
          <span className="relative">{title}</span>
        </h1>
      </div>
    </div>
  );
};
