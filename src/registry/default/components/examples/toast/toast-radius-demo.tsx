"use client";

import { Button } from "@/registry/default/components/ui/button";
import { toast } from "@/registry/default/components/ui/toast";

export function ToastRadiusDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      {[
        ["None", "none"],
        ["Small", "sm"],
        ["Medium", "md"],
        ["Large", "lg"],
        ["Full", "full"],
      ].map((radius) => (
        <Button
          key={radius[1]}
          variant="outline"
          onClick={() =>
            toast.add({
              title: "Toast title",
              description: "Toast displayed successfully",
              data: {
                radius: radius[1],
              },
              timeout: 10000000,
            })
          }
        >
          {radius[0]}
        </Button>
      ))}
    </div>
  );
}
