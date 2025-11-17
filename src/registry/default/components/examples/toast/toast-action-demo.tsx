"use client";

import { Button } from "@/registry/default/components/ui/button";
import { toast } from "@/registry/default/components/ui/toast";

export function ToastActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.add({
          title: "Action performed",
          description: "You can undo this action.",
          type: "success",
          actionProps: {
            children: "Undo",
            onClick: () => {
              toast.close(id);
              toast.add({
                title: "Action undone",
                description: "The action has been reverted.",
                type: "info",
              });
            },
          },
          timeout: 1000000,
        });
      }}
    >
      Perform Action
    </Button>
  );
}
