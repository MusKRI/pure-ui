"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function Calendar5Block() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 26),
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-5 min-h-[500px]">
      <Calendar
        animate
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={1}
        min={5}
      />
      <div className="text-muted-foreground text-center text-xs">
        A minimum of 5 days is required
      </div>
    </div>
  );
}
