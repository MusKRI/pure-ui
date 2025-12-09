"use client";

import { useState } from "react";

import { Calendar } from "@/registry/pure-ui/ui/calendar";

export function Calendar7Block() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-5 min-h-[500px]">
      <Calendar
        animate
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        disabled={{
          before: new Date(2025, 5, 12),
        }}
      />
    </div>
  );
}
