"use client";

import { AnimatePresence, motion } from "motion/react";

import { Card, CardFooter } from "@/registry/default/components/ui/card";

export function CardWithImageDemo() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Card className="w-[220px] gap-2 p-1">
        <img
          alt="Harry Potter Collections"
          className="block aspect-square w-full shrink-0 select-none rounded-lg object-cover align-middle"
          loading="lazy"
          src="https://pbs.twimg.com/media/G0uYIupbcAQDPry?format=jpg&name=medium"
        />
        <CardFooter className="flex items-center justify-between px-2 text-sm">
          <span>Harry Potter</span>
          <span
            aria-label="18 pictures in collection"
            className="text-muted-foreground"
          >
            18 pictures
          </span>
        </CardFooter>
      </Card>

      <Card className="w-[220px] gap-2 p-1">
        <img
          alt="Hell's Paradise"
          className="block aspect-square w-full shrink-0 select-none rounded-lg object-cover align-middle"
          loading="lazy"
          src="https://pbs.twimg.com/media/G2B8SNGXwAACC9G?format=jpg&name=small"
        />
        <CardFooter className="flex items-center justify-between px-2 text-sm">
          <span>Hell's Paradise</span>
          <span
            aria-label="56 pictures in collection"
            className="text-muted-foreground"
          >
            56 pictures
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
