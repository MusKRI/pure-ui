import { useEffect, useCallback, RefObject } from "react";

/**
 * Hook that detects clicks outside a referenced element
 * @param ref - React ref object pointing to the element to track
 * @param handler - Callback function to execute when clicking outside
 * @param enabled - Whether the hook is enabled (default: true)
 * @param excludeRefs - Array of refs to exclude from outside click detection
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true,
  excludeRefs: RefObject<HTMLElement | null>[] = []
) {
  const handleClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!enabled || !ref.current) return;

      const target = event.target as Node;

      // Check if click is on any excluded element
      const isExcluded = excludeRefs.some((excludeRef) =>
        excludeRef.current?.contains(target)
      );

      // Check if the click was outside the referenced element and not on excluded elements
      if (!ref.current.contains(target) && !isExcluded) {
        handler(event);
      }
    },
    [ref, handler, enabled, excludeRefs]
  );

  useEffect(() => {
    if (!enabled) return;

    // Listen for both mouse and touch events
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [handleClick, enabled]);
}
