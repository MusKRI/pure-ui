"use client";

import { cn } from "@/lib/classes";
import { motion } from "motion/react";

interface RollingTextProps {
  text?: string;
  speed?: number;
  className?: string;
  duration?: number;
}

export function RollingText({
  text = "ROLLING",
  speed = 0.1,
  className = "text-5xl sm:text-7xl lg:text-8xl font-bold",
  duration = 4,
}: RollingTextProps) {
  const centerIndex = Math.floor(text.length / 2);

  return (
    <motion.div className={cn("font-chillax flex", className)}>
      {text.split("").map((letter, index) => {
        const distanceFromCenter = Math.abs(index - centerIndex);
        const delay = distanceFromCenter * speed;
        const rollDuration = 0.2 + distanceFromCenter * 0.15;
        const numberOfRolls = Math.floor(duration / rollDuration);
        const totalMovement = numberOfRolls * 1.2;

        return (
          <div
            key={index}
            className="relative inline-block overflow-hidden"
            style={{ height: "1.1em" }}
          >
            <motion.h1
              className="flex flex-col"
              whileInView={{
                y: `-${totalMovement}em`,
              }}
              transition={{
                duration: duration,
                ease: [0.15, 1, 0.1, 1],
                delay: delay,
              }}
              style={{ willChange: "transform" }}
            >
              {Array(numberOfRolls + 2)
                .fill(null)
                .map((_, copyIndex) => (
                  <span
                    key={copyIndex}
                    className="flex shrink-0 items-center justify-center"
                    style={{ height: "1.2em", willChange: "transform" }}
                  >
                    {letter}
                  </span>
                ))}
            </motion.h1>
          </div>
        );
      })}
    </motion.div>
  );
}
