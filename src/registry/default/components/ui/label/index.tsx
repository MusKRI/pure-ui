import * as React from "react";

import { cn } from "@/lib/classes";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("inline-flex items-center gap-2 text-sm/4", className)}
      {...props}
    />
  );
}

export { Label };
