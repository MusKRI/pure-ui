"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/classes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className={cn("rounded-full size-4.5 cursor-pointer")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <clipPath id="toggle-theme">
          <motion.path
            animate={{ y: isDark ? 5 : 0, x: isDark ? -20 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
          />
        </clipPath>
        <g clipPath="url(#toggle-theme)">
          <circle cx="16" cy="16" r="15" />
        </g>
      </svg>
    </button>
  );
}
