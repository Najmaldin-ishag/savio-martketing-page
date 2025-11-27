"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface StarProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export function Star({ className, size = 24, animate = true }: StarProps) {
  const StarSVG = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-savio-orange", className)}
    >
      <path
        d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {StarSVG}
      </motion.div>
    );
  }

  return StarSVG;
}

export function Sparkles({ className }: { className?: string }) {
  return (
    <motion.span
      className={cn("inline-flex items-center", className)}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✨
    </motion.span>
  );
}
