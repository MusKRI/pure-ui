import { ParsedContent } from "@/lib/content-parser";

type Props = {
  content: ParsedContent;
};

export const ContentInfoHeader = ({ content }: Props) => {
  const { title, description, features = [] } = content.frontmatter;

  return (
    <div className="bg-muted border-b border-border md:mt-0">
      <div className="max-w-[calc(85ch+260px)] pt-18 md:pt-4 lg:pt-0 mx-auto px-6 pb-7">
        <div className="mb-8">
          <h1 className="relative md:mt-20 scroll-mt-32 md:scroll-mt-20 text-3xl md:text-4xl tracking-8 font-medium text-balance font-mono">
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
                  <span className="mr-2 p-1 shrink-0 bg-secondary/50 border border-border/35 text-muted-foreground rounded-full relative z-2 overflow-hidden">
                    <span className="absolute size-6 rounded-full bg-gradient-to-t z-1 -top-1/4 left-1/2 -translate-x-1/2 from-background to-popover-foreground/80 opacity-50 blur-[2px]"></span>
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
                  <p className="relative z-2 text-base tracking-3 font-normal text-pretty m-0 my-0.5 text-secondary-foreground">
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
