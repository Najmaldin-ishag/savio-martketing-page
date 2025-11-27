"use client";

import { motion } from "motion/react";
import { Target, Heart, Zap, Users } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe everyone deserves financial freedom without sacrifice.",
  },
  {
    icon: Heart,
    title: "User-First",
    description: "Your success is our success. We build with you in mind.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge AI to solve real financial challenges.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join thousands growing their savings together.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-savio-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-savio-orange font-medium mb-4 block">
              About Savio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-savio-text mb-6 leading-tight">
              Building the Future of{" "}
              <span className="text-savio-orange">Personal Finance</span>
            </h2>
            <div className="space-y-4 text-savio-text-muted text-lg">
              <p>
                We started Savio with a simple belief: saving money shouldn&apos;t
                mean giving up the things you love. Traditional budgeting apps
                focus on restriction, but we focus on intelligent optimization.
              </p>
              <p>
                Our AI analyzes your spending patterns and finds hidden
                opportunities to save — without you lifting a finger or changing
                your lifestyle. It&apos;s like having a personal financial advisor
                that works 24/7.
              </p>
              <p>
                Join us in revolutionizing how people think about and grow their
                savings.
              </p>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-savio-dark-light border border-savio-dark-lighter"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-savio-orange/10 flex items-center justify-center mb-4"
                >
                  <value.icon className="w-6 h-6 text-savio-orange" />
                </motion.div>
                <h3 className="text-lg font-semibold text-savio-text mb-2">
                  {value.title}
                </h3>
                <p className="text-savio-text-muted text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "$12M+", label: "Savings Generated" },
            { value: "4.9", label: "App Store Rating" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-savio-orange mb-2">
                {stat.value}
              </div>
              <div className="text-savio-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
