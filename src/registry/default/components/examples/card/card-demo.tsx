import Link from "next/link";
import type { SVGProps } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/registry/default/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-md gap-0">
      <CardHeader className="flex flex-row gap-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative size-14 border border-border/30 p-0.5 shadow rounded-lg overflow-hidden flex items-center justify-center">
            <Cursor className="size-10" />
          </div>
          <div className="flex flex-col">
            <CardTitle>Cursor</CardTitle>
            <div className="flex items-center gap-1 text-xs">
              <span>Today</span>
              <span>•</span>
              <span>03:45 PM</span>
            </div>
          </div>
        </div>
        <div className="font-semibold text-base">$40.89</div>
      </CardHeader>
      <CardContent id="payment-content" className="mt-3">
        <p>Introducing IDE Plugins</p>
      </CardContent>
      <CardFooter>
        <Link
          aria-label="Check out the latest news"
          href="https://kam-ui.com"
          target="_blank"
          className="text-xs hover:bg-accent rounded-md py-1 transition-colors"
        >
          Check out the latest news
        </Link>
      </CardFooter>
    </Card>
  );
}

const Cursor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    id="cursor_dark__Ebene_1"
    version="1.1"
    viewBox="0 0 466.73 532.09"
  >
    <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z" />
  </svg>
);
