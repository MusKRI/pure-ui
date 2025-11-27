"use client";

import { useEffect, useState } from "react";

import { Button } from "@/registry/pure-ui/ui/button";
import { Spinner } from "@/registry/pure-ui/ui/spinner";

export function ButtonLoadingDemo() {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    isPending && setTimeout(() => setIsPending(false), 2000);
  }, [isPending]);

  return (
    <Button disabled={isPending} onClick={() => setIsPending(true)}>
      {isPending ? <Spinner size="sm" /> : null}
      {isPending ? "Submitting..." : "Submit"}
    </Button>
  );
}
