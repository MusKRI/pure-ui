"use client";

import { useState } from "react";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function CalendarMultipleMonthsDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <Calendar
      animate
      mode="single"
      defaultMonth={date}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
    />
  );
}
