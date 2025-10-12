"use client";

import { Effect, Duration } from "effect";
import { useState, useEffect, type ReactNode } from "react";

interface DelayedRenderProps {
  children: ReactNode;
  delayMs?: number;
}

export const DelayedRender = ({
  children,
  delayMs = 2000,
}: DelayedRenderProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const delayEffect = Effect.gen(function* () {
      // Wait for the specified duration
      yield* Effect.sleep(Duration.millis(delayMs));

      // Set the render flag to true
      return true;
    });

    // Run the effect and update state when complete
    Effect.runPromise(delayEffect).then((result) => {
      setShouldRender(result);
    });
  }, [delayMs]);

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
};
