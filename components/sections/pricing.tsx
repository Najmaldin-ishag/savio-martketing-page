"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with smart savings.",
    features: [
      "Basic savings analysis",
      "1 connected account",
      "Monthly reports",
      "Email support",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$29",
    period: "per month",
    description: "For serious savers ready to accelerate growth.",
    features: [
      "Advanced AI recommendations",
      "5 connected accounts",
      "Real-time tracking",
      "Priority support",
      "Custom savings goals",
      "Spending insights",
      "Export reports",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$79",
    period: "per month",
    description: "Enterprise-grade features for maximum growth.",
    features: [
      "Everything in Growth",
      "Unlimited accounts",
      "Family sharing (5 users)",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Advanced analytics",
      "White-glove onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-savio-dark-light">
      <SectionHeader>
        <SectionTitle>
          Simple, Transparent{" "}
          <span className="text-savio-orange">Pricing</span>
        </SectionTitle>
        <SectionDescription>
          Choose the plan that fits your savings goals. All plans include a 14-day free trial.
        </SectionDescription>
      </SectionHeader>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-savio-orange text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "h-full rounded-2xl border p-8 transition-all duration-300",
                  plan.popular
                    ? "bg-gradient-to-b from-savio-orange/10 to-savio-dark border-savio-orange/50 shadow-lg shadow-savio-orange/10"
                    : "bg-savio-dark border-savio-dark-lighter hover:border-savio-dark-lighter/80"
                )}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-savio-text mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-savio-text-muted text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-savio-text">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-savio-text-muted ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-savio-orange shrink-0 mt-0.5" />
                      <span className="text-savio-text-muted text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Annual discount note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-savio-text-muted mt-8"
        >
          Save 20% with annual billing.{" "}
          <button className="text-savio-orange hover:underline">
            Switch to yearly
          </button>
        </motion.p>
      </div>
    </Section>
  );
}
