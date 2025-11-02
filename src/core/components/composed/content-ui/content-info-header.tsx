import { cn } from "@/lib/classes";
import { ParsedContent } from "@/lib/content-parser";

type Props = {
  content: ParsedContent;
};

export const ContentInfoHeader = ({ content }: Props) => {
  const { title, description, features = [] } = content.frontmatter;

  const headingsLength = content.headings.length > 0;

  return (
    <div className="bg-code/50 dark:bg-code border-b border-border md:mt-0">
      <div
        className={cn(
          "pt-18 md:pt-4 lg:pt-0 mx-auto px-6 pb-7",
          headingsLength ? "max-w-[calc(85ch+260px)]" : "max-w-[85ch]"
        )}
      >
        <div className="mb-8">
          <h1 className="relative md:mt-20 scroll-mt-32 md:scroll-mt-20 text-3xl md:text-4xl tracking-8 font-medium text-balance font-chillax">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-[64ch]">
            {description}
          </p>
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className="mt-10">
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
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 relative z-2 text-foreground/90"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <p className="relative z-2 text-base text-pretty m-0 my-0.5 text-secondary-foreground">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
