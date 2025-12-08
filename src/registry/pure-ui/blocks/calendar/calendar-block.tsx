"use client";

import { useState } from "react";
import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function CalendarBlock() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <div className="flex items-center justify-center p-5 h-[500px]">
      <Calendar
        animate
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="border shadow-sm"
      />
    </div>
  );
}
