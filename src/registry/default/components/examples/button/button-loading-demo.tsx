"use client";

import { useEffect, useState } from "react";

import { Button } from "@/registry/default/components/ui/button";
import { Spinner } from "@/registry/default/components/ui/spinner";

export function ButtonLoadingDemo() {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    isPending && setTimeout(() => setIsPending(false), 2000);
  }, [isPending]);

  return (
    <Button
      radius="full"
      disabled={isPending}
      onClick={() => setIsPending(true)}
    >
      {isPending ? <Spinner size="sm" /> : null}
      {isPending ? "Uploading..." : "Upload"}
    </Button>
  );
}
