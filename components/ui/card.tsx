"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const Component = hover ? (motion.div as React.ElementType) : "div";

    const hoverProps = hover
      ? {
          whileHover: { y: -4, scale: 1.01 },
          transition: { duration: 0.2 },
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-2xl bg-savio-dark-light border border-savio-dark-lighter p-6 transition-shadow duration-300",
          hover &&
            "hover:shadow-xl hover:shadow-savio-orange/5 hover:border-savio-dark-lighter/80",
          className
        )}
        {...hoverProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-savio-text", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-savio-text-muted text-sm mt-2", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
