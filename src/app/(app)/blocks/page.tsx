import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/registry/pure-ui/ui/button";
import { CalendarBlock } from "@/registry/pure-ui/blocks/calendar/calendar-block";
import { Calendar2Block } from "@/registry/pure-ui/blocks/calendar/calendar-2-block";
import { Calendar3Block } from "@/registry/pure-ui/blocks/calendar/calendar-3-block";
import { Calendar4Block } from "@/registry/pure-ui/blocks/calendar/calendar-4-block";

export default function BlocksIndexPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      <div className="mb-20 md:mb-32" />
      <div className="text-center md:text-xl px-6 md:px-12 mb-24">
        <h1 className="font-chillax font-medium text-6xl md:text-[110px] tracking-tight w-fit mx-auto leading-[0.98] mb-4">
          Building Blocks
        </h1>
        <p className="text-foreground/80 font-light max-w-3xl mx-auto text-lg">
          Building blocks for your next project.
        </p>

        <div className="flex gap-2 bg-gray4 w-fit mx-auto rounded-full p-2 shadow-inner border border-gray7 border-dashed font-medium mt-8">
          <Button
            variant="default"
            radius="full"
            render={<Link href="/blocks/calendar" />}
            nativeButton={false}
          >
            Browse Blocks <ArrowRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            radius="full"
            render={<Link href="#" />}
            nativeButton={false}
          >
            Add Block <PlusIcon className="size-4" />
          </Button>
        </div>
      </div>

      <div className="px-0 md:px-10 lg:px-16">
        <div className="bg-background border-y md:border-x border-border relative max-w-[1300px] mx-auto">
          <section className="px-6 py-12 md:p-12 lg:p-20">
            <h2 className="font-chillax font-medium text-4xl text-center mb-6 md:mb-14">
              “Featured Blocks”
            </h2>
          </section>

          <section className="mt-8 pb-10">
            <h2 className="font-chillax font-medium text-3xl relative px-6 md:px-12 lg:px-20">
              <span className="absolute left-0 right-0 bottom-2.5 border-b border-border"></span>
              <span className="relative">Calendar</span>
            </h2>

            <div className="divide-y divide-border -translate-y-[10px] [&>*:last-child]:border-b  ">
              <div className="flex flex-col-reverse md:grid xl:grid-cols-2 relative pb-10 md:pb-0 [&>div]:even:border-r-0">
                <div className="p-6 relative md:border-r border-border flex flex-col justify-center items-center">
                  <CalendarBlock />
                </div>
                <div className="p-6 relative md:border-r border-border flex flex-col justify-center items-center">
                  <Calendar2Block />
                </div>
              </div>
              <div className="flex flex-col-reverse md:grid xl:grid-cols-2 relative pb-10 md:pb-0 [&>div]:even:border-r-0">
                <div className="p-6 relative md:border-r border-border flex flex-col justify-center items-center">
                  <Calendar3Block />
                </div>
                <div className="p-6 relative md:border-r border-border flex flex-col justify-center items-center">
                  <Calendar4Block />
                </div>
              </div>
            </div>
          </section>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-9">
            <Button variant="default" radius="full">
              View All Blocks <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
