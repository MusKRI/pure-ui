"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function Calendar8Block() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 17),
    to: new Date(2025, 5, 20),
  });

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-5 h-[500px]">
      <Calendar
        animate
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        disabled={{ dayOfWeek: [0, 6] }}
        excludeDisabled
      />
    </div>
  );
}
