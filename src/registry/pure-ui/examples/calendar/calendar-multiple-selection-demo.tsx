"use client";

import { useState } from "react";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function CalendarMultipleSelectionDemo() {
  const [dates, setDates] = useState<Date[]>([
    new Date(2025, 5, 12),
    new Date(2025, 6, 24),
  ]);

  return (
    <Calendar
      animate
      mode="multiple"
      numberOfMonths={2}
      defaultMonth={dates[0]}
      required
      selected={dates}
      onSelect={setDates}
      max={5}
    />
  );
}
