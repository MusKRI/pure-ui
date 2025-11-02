"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/classes";
import { useState } from "react";

type ColorCardProps = {
  color: string;
  darkColor: string;
  title: string;
};

export function ColorCard({ color, title, darkColor }: ColorCardProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const isDark = theme === "dark";

  const handleCopyColor = () => {
    navigator.clipboard.writeText(isDark ? darkColor : color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col gap-1" onClick={handleCopyColor}>
      <div
        className={cn(
          "group relative aspect-square flex border border-border/60 items-center justify-center shadow-[0_0_0_1px_hsla(203,13%,12%,0.02),0_1px_3px_-1px_hsla(203,13%,12%,0.2)] rounded-[12px] overflow-hidden cursor-pointer",
          "bg-(--color) dark:bg-(--dark-color)"
        )}
        style={
          {
            "--color": color,
            "--dark-color": darkColor,
          } as React.CSSProperties
        }
      >
        <div className="absolute left-[2px] top-[2px] text-xs p-2 text-center w-[calc(100%-4px)] bg-code shadow-[0_0_0_1px_hsla(203,13%,12%,0.02),0_1px_3px_-1px_hsla(203,13%,12%,0.2)] rounded-[10px] transition-transform duration-150 ease-out -translate-y-[calc(100%+4px)] group-hover:translate-y-0">
          {copied ? "Copied" : "Copy Color"}
        </div>
      </div>
      <h2 className="text-xs font-medium p-[clamp(0.5rem,0.5rem,0.5rem)] text-center text-muted-foreground">
        {title}
      </h2>
    </div>
  );
}
