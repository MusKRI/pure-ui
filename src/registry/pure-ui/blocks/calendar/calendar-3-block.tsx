"use client";

import { useState } from "react";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function Calendar3Block() {
  const [dates, setDates] = useState<Date[]>([
    new Date(2025, 5, 12),
    new Date(2025, 6, 24),
  ]);

  return (
    <div className="flex items-center justify-center p-5 h-[500px]">
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
    </div>
  );
}
