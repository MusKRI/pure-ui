"use client";

import { Button } from "@/registry/default/components/ui/button";
import { toast } from "@/registry/default/components/ui/toast";

export function ToastPromiseDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise(
          new Promise<string>((resolve, reject) => {
            const shouldSucceed = Math.random() > 0.3;
            setTimeout(() => {
              if (shouldSucceed) {
                resolve("Data loaded successfully");
              } else {
                reject(new Error("Failed to load data"));
              }
            }, 2000);
          }),
          {
            loading: {
              title: "Loading…",
              description: "The promise is loading.",
            },
            success: (data: string) => ({
              title: "This is a success toast!",
              description: `Success: ${data}`,
            }),
            error: () => ({
              title: "Something went wrong",
              description: "Please try again.",
            }),
          }
        );
      }}
    >
      Run Promise
    </Button>
  );
}
