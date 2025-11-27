"use client";

import { Button } from "@/registry/pure-ui/ui/button";
import { toast } from "@/registry/pure-ui/ui/toast";

export function ToastLoadingDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.add({
          title: "Loading…",
          description: "Please wait while we process your request.",
          type: "loading",
          timeout: 3000,
        });
      }}
    >
      Loading Toast
    </Button>
  );
}
