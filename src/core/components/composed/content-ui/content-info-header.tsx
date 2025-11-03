import { cn } from "@/lib/classes";
import { ParsedContent } from "@/lib/content-parser";
import { CopyMarkdown } from "./copy-markdown";
import { Tick01Icon } from "@/core/icons/pack1";

type Props = {
  content: ParsedContent;
  relativePath: string;
};

export const ContentInfoHeader = ({ content, relativePath }: Props) => {
  const { title, description, features = [] } = content.frontmatter;

  const headingsLength = content.headings.length > 0;

  return (
    <div className="bg-code/50 dark:bg-code border-b border-border md:mt-0">
      <div
        className={cn(
          "pt-18 md:pt-4 lg:pt-0 mx-auto px-6 pb-7 flex flex-col gap-6",
          headingsLength ? "max-w-[calc(85ch+260px)]" : "max-w-[85ch]"
        )}
      >
        <div className="">
          <h1 className="relative md:mt-20 scroll-mt-32 md:scroll-mt-20 text-3xl md:text-4xl tracking-8 font-medium text-balance font-chillax">
            {title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-[64ch]">
            {description}
          </p>
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className="relative">
            <ul className="flex flex-col gap-3 md:gap-4">
              {features.map((feature: string, index: number) => (
                <li
                  key={index}
                  className="inline-flex items-center gap-2 relative"
                >
                  <span
                    className={cn(
                      "mr-2 p-1 shrink-0 bg-secondary/60 border border-border text-muted-foreground rounded-full relative z-2"
                    )}
                  >
                    <Tick01Icon className="size-4 relative z-2 text-foreground/90" />
                  </span>
                  <p className="relative z-2 text-base text-pretty m-0 my-0.5 text-secondary-foreground">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col justify-between gap-0 border-t border-dashed border-border py-6">
          <CopyMarkdown relativePath={relativePath} />
        </div>
      </div>
    </div>
  );
};
