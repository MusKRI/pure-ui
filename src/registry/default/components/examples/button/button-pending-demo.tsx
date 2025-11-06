"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/registry/default/components/ui/button";

export function ButtonPendingDemo() {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    isPending && setTimeout(() => setIsPending(false), 2000);
  }, [isPending]);

  return (
    <Button onClick={() => setIsPending(true)} pending={isPending}>
      Pure UI Button
    </Button>
  );
}
