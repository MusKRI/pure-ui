"use client";

import { Button } from "@/registry/pure-ui/ui/button";
import { toast } from "@/registry/pure-ui/ui/toast";

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
            timeout: 10000000,
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
