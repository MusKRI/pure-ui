"use client";

import { useState } from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function CalendarMultiMonthsRangeSelectionDemo() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <Calendar
      animate
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
    />
  );
}
