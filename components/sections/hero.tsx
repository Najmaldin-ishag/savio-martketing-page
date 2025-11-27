"use client";

// Fix: The original import used "motion/react" which can cause module/type errors
// in typical Next.js + Framer Motion setups; import from "framer-motion" instead.
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/icons/star";
import { GradientTriangle, CoralStar } from "@/components/icons/triangle";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-savio-orange/20 via-savio-dark to-savio-dark" /> */}
      <Image
        src="/imgs/Effect.png"
        alt="Effect gradient"
        className="object-cover"
        fill
      />

      {/* Animated background bars */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end justify-center gap-2 px-4 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              // animate={{ height: `${Math.random() * 60 + 20}%` }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="w-6 md:w-10 bg-linear-to-t from-savio-orange/40 to-savio-orange/10 rounded-t-sm"
            />
          ))}
        </div>
      </div> */}

      {/* Decorative elements */}
      {/* <GradientTriangle
        className="absolute top-32 left-8 md:left-20 opacity-80"
        size={100}
      /> */}
      {/* <CoralStar className="absolute bottom-40 right-8 md:right-20" size={70} /> */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-savio-dark-light/80 border border-savio-dark-lighter mb-8"
        >
          <Sparkles />
          <span className="text-sm text-savio-text-muted">
            We are launching soon. Stay Tuned
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-savio-text leading-tight mb-6"
        >
          Take Control Of Your
          <br />
          Financial{" "}
          <span className="italic font-serif text-savio-text">Growth</span>
          <motion.span
            className="inline-block ml-2"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-savio-text-muted max-w-2xl mx-auto mb-10"
        >
          AI-powered money management that helps you grow savings without
          changing your lifestyle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={() => scrollToSection("waitlist")}>
            Start Saving Today
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-16"
      >
        <div className="relative">
          {/* Glow effect behind dashboard
          <div className="absolute -inset-4 bg-gradient-to-r from-savio-orange/20 via-savio-orange/10 to-savio-coral/20 rounded-3xl blur-2xl" />

          {/* Dashboard container with image */}
          <Image
            src="/imgs/Dashboard.png"
            alt="Savio Dashboard"
            width={800}
            height={800}
            className="w-full h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </motion.div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-savio-dark to-transparent" />
    </section>
  );
}
