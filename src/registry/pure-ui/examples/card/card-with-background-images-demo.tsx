import { ArrowUpRight } from "lucide-react";

import { Card, CardHeader } from "@/registry/pure-ui/ui/card";
import { Button } from "@/registry/pure-ui/ui/button";

export function CardWithBackgroundImagesDemo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <Card className="w-[320px] aspect-square before:absolute before:left-0 before:right-0 before:top-0 before:h-[44px] before:bg-linear-to-b before:from-black/80 before:to-transparent before:z-10">
        <img
          alt="Beautiful aerial view of Buenos Aires cityscape"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          src="https://pbs.twimg.com/media/G2gchvnWoAAvkGG?format=jpg&name=large"
        />
        <CardHeader className="z-10 flex flex-row items-center justify-between w-full">
          <div>
            <div className="text-sm font-medium text-white">Naruto</div>
            <div className="text-xs text-white/60">Shonen</div>
          </div>
          <Button
            aria-label="View Buenos Aires on map"
            size="sm"
            variant="link"
            className="text-white"
          >
            Season 2
            <ArrowUpRight className="size-4 ml-2" />
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}
