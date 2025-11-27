"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Brain,
  LineChart,
  Leaf,
  Shield,
  Layers,
} from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Smart Savings",
    description:
      "Automated savings analysis that identifies opportunities to save without impacting your daily life.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description:
      "Personalized growth plans powered by machine learning that adapt to your spending patterns.",
  },
  {
    icon: LineChart,
    title: "Real-time Tracking",
    description:
      "Monitor your progress instantly with beautiful dashboards and detailed insights.",
  },
  {
    icon: Leaf,
    title: "No Lifestyle Changes",
    description:
      "Save money effortlessly without sacrificing the things you love or changing habits.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Bank-level encryption and security protocols to keep your financial data safe.",
  },
  {
    icon: Layers,
    title: "Multi-account Support",
    description:
      "Connect and manage multiple bank accounts, cards, and investments in one place.",
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-savio-dark">
      <SectionHeader>
        <SectionTitle>
          Powerful Features for{" "}
          <span className="text-savio-orange">Smarter Savings</span>
        </SectionTitle>
        <SectionDescription>
          Everything you need to take control of your finances and grow your wealth automatically.
        </SectionDescription>
      </SectionHeader>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-savio-orange/10 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-savio-orange" />
                  </motion.div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
