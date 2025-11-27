"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TriangleProps {
  className?: string;
  size?: number;
}

export function GradientTriangle({ className, size = 120 }: TriangleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={cn("", className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B4A" />
            <stop offset="50%" stopColor="#FF8B6F" />
            <stop offset="100%" stopColor="#E040FB" />
          </linearGradient>
        </defs>
        <polygon
          points="60,10 110,100 10,100"
          fill="url(#triangleGradient)"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}

export function CoralStar({ className, size = 80 }: TriangleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className={cn("", className)}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B4A" />
            <stop offset="100%" stopColor="#FFA07A" />
          </linearGradient>
        </defs>
        <path
          d="M40 5L45 30L70 25L50 40L70 55L45 50L40 75L35 50L10 55L30 40L10 25L35 30L40 5Z"
          fill="url(#starGradient)"
        />
      </motion.svg>
    </motion.div>
  );
}
