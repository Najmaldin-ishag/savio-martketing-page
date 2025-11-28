"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cta";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-savio-orange focus:ring-offset-2 focus:ring-offset-savio-dark disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      cta: "bg-[#a29a97] text-white",
      primary:
        "bg-savio-orange text-white hover:bg-savio-orange-light hover:shadow-lg hover:shadow-savio-orange/25",
      secondary:
        "bg-savio-dark-light text-savio-text border border-savio-dark-lighter hover:bg-savio-dark-lighter",
      outline:
        "border border-savio-text-muted text-savio-text hover:bg-savio-dark-light hover:border-savio-text",
      ghost:
        "text-savio-text-muted hover:text-savio-text hover:bg-savio-dark-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
