"use client";

import { Button } from "@/registry/pure-ui/ui/button";
import { toast } from "@/registry/pure-ui/ui/toast";

export function ToastPositionsDemo() {
  const positions = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {positions.map((position) => (
        <Button
          key={position}
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Toast title",
              description: "Toast displayed successfully",
            })
          }
        >
          {position}
        </Button>
      ))}
    </div>
  );
}
