"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { forwardRef, type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  animate?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, animate = true, children, ...props }, ref) => {
    if (animate) {
      return (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn("py-20 px-4 md:px-8", className)}
          {...props}
        >
          {children}
        </motion.section>
      );
    }

    return (
      <section ref={ref} className={cn("py-20 px-4 md:px-8", className)} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-center max-w-3xl mx-auto mb-16", className)}
      {...props}
    />
  )
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-savio-text mb-4",
        className
      )}
      {...props}
    />
  )
);
SectionTitle.displayName = "SectionTitle";

const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-savio-text-muted text-lg md:text-xl", className)}
      {...props}
    />
  )
);
SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionTitle, SectionDescription };
