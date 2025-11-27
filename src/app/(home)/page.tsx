import Link from "next/link";

import { cn } from "@/lib/classes";
import { Button } from "@/registry/pure-ui/ui/button";
import { RollingText } from "components/composed/rolling-text";

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
            <div className="flex h-full w-full snap-start flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-4">
                <RollingText
                  text="Pure"
                  speed={0.05}
                  duration={3}
                  className="text-5xl uppercase sm:text-7xl lg:text-8xl font-semibold"
                />
                <RollingText
                  text="UI"
                  speed={0.05}
                  duration={3}
                  className="text-5xl uppercase sm:text-7xl lg:text-8xl font-semibold"
                />
              </div>
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
              <Button
                size="lg"
                render={<Link href="/docs" />}
                nativeButton={false}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
