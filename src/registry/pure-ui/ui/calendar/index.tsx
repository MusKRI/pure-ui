"use client";
import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { Button, buttonVariants } from "@/registry/pure-ui/ui/button";
import { cn } from "@/lib/classes";

type CalendarProps = React.ComponentProps<typeof DayPicker> & {};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "border border-border rounded-md bg-background [--cell-size:--spacing(8)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        className
      )}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      captionLayout={captionLayout}
      classNames={{
        root: cn("w-fit shadow-xs overflow-hidden", defaultClassNames.root),
        months: cn(
          "flex flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn(
          "flex flex-col w-full [.rdp-month+&]:border-l [.rdp-month+&]:border-border/50 dark:[.rdp-month+&]:border-border/80",
          defaultClassNames.month
        ),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 z-0 justify-between p-1.5 rounded-t-md",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: "ghost", size: "sm", radius: "sm" }),
          "active:scale-100 border-[0.5px] border-border",
          "size-[calc(var(--cell-size)-6px)] aria-disabled:opacity-50 p-0 select-none bg-background dark:bg-accent",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", size: "sm", radius: "sm" }),
          "active:scale-100 border-[0.5px] border-border",
          "size-[calc(var(--cell-size)-6px)] aria-disabled:opacity-50 p-0 select-none bg-background dark:bg-accent",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center w-full px-(--cell-size) [height:calc(var(--cell-size)+6px)] border-b border-border/50 bg-[#f9f9f9] dark:bg-secondary",
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn(
          "flex bg-[#f9f9f9] dark:bg-secondary p-[calc(var(--spacing)*1.5+0.5px)] border-b border-border/50 border-t border-t-background/70 dark:border-t-background/30",
          defaultClassNames.weekdays
        ),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none ",
          defaultClassNames.weekday
        ),
        weeks: cn(
          "p-1.5 pt-0 block bg-background rounded-b-md",
          defaultClassNames.weeks
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative text-[0.8rem] w-full h-full p-0 text-center group/day aspect-square select-none",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "[&:last-child[data-selected=true]>button:not([data-range-end=false][data-range-start=false])]:rounded-r-none [&:last-child[data-selected=true]>button[data-range-end=true]]:rounded-r-md! [&:first-child[data-selected=true]>button:not([data-range-end=false][data-range-start=false])]:rounded-l-none [&:first-child[data-selected=true]>button[data-range-start=true]]:rounded-l-md!",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn("[transition:height_0.3s_ease-in-out]", className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            );
          }
          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            );
          }
          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },

        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      // data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "active:scale-100 duration-50 disabled:bg-transparent [[data-outside=true]>&]:text-muted-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-l-none data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-r-none [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { Calendar };
