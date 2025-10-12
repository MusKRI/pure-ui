"use client";

import { motion } from "motion/react";

import { useMediaQuery } from "hooks/use-media-query";
import { useSidebar } from "../sidebar/use-sidebar";
import { Sidebar } from "../sidebar";

export function PureUILayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebar();

  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="h-full flex-1 flex flex-row mt-16">
      <Sidebar />
      <motion.div
        initial={false}
        animate={{
          marginLeft: isOpen && !isMobile ? 260 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}
