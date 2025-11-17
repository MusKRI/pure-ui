"use client";

import { Button } from "@/registry/default/components/ui/button";
import { toast } from "@/registry/default/components/ui/toast";

export function ToastWithStatusDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Success!",
            description: "Your changes have been saved.",
            type: "success",
          });
        }}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            type: "error",
          });
        }}
      >
        Error Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Heads up!",
            description: "You can add components to your app using the cli.",
            type: "info",
          });
        }}
      >
        Info Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.add({
            title: "Warning!",
            description: "Your session is about to expire.",
            type: "warning",
          });
        }}
      >
        Warning Toast
      </Button>
    </div>
  );
}
