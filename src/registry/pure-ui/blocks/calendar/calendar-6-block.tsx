"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function Calendar6Block() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 18),
    to: new Date(2025, 6, 7),
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-5 min-h-[500px]">
      <Calendar
        animate
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        min={2}
        max={20}
      />
      <div className="text-muted-foreground text-center text-xs">
        Your stay must be between 2 and 20 nights
      </div>
    </div>
  );
}
