"use client";

import { Button } from "@/registry/default/components/ui/button";
import { toast } from "@/registry/default/components/ui/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Event has been created",
          });
        }}
      >
        Default Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Event has been created",
            description: "Monday, January 3rd at 6:00pm",
            data: {
              radius: "md",
              position: "top-center",
            },
          });
        }}
      >
        With Description
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Event has been created",
            description: "Monday, January 3rd at 6:00pm",
            type: "info",
          });
        }}
      >
        With Icon
      </Button>
    </div>
  );
}
