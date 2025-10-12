import Link from "next/link";

import { cn } from "@/lib/classes";
import { Button } from "@/registry/default/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-svh flex items-center justify-center">
      <div
        className={cn(
          "max-w-[1180px] mx-auto px-4 w-full flex flex-col isolate",
          `[--line-color:rgba(0,0,0,0.4)] dark:[--line-color:rgba(255,255,255,0.4)]`
        )}
      >
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            <div className="relative bg-foreground p-2 rounded-xl overflow-hidden shadow-2xl max-md:hidden">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 md:size-18 text-background"
              >
                <path
                  d="M6 20C6 20 9 14 13 14C17 14 19 17 22 17C25 17 28 12 28 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col relative">
              <h1
                className={cn(
                  "[--text-color:linear-gradient(180deg,#555_0%,#000_100%)] dark:[--text-color:linear-gradient(180deg,#fff_0%,#adadad_100%)]",
                  "bg-clip-text text-transparent bg-[image:var(--text-color)] font-bold relative text-[max(48px,min(5vw,66px))] font-mono"
                )}
              >
                Pure UI
              </h1>
              <div className="h-px w-full absolute bottom-0 left-0 right-0 bg-[linear-gradient(to_right,var(--line-color),var(--line-color)_100%,transparent_0,transparent)] [mask-image:linear-gradient(to_left,var(--background)_63%,transparent),linear-gradient(to_right,var(--background)_63%,transparent),linear-gradient(black,black)] [mask-composite:exclude]" />
            </div>
          </div>
          <div className="px-[32px] relative leading-[1.8] text-center mt-8">
            <p className="mx-auto max-w-md text-lg text-foreground/80 font-light">
              A design system for building modern web applications with pure
              aesthetics and minimal complexity.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center gap-4 p-8">
              <Button asChild size="lg">
                <Link href="/docs" className="text-base">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
