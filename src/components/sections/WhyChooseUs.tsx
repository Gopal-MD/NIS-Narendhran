"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Clock,
  DollarSign,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const icons = [Award, Users, Clock, DollarSign, Settings, TrendingUp];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Why NIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We combine technical expertise, industry partnerships, and a
            customer-first approach to deliver IT solutions that drive real
            business value.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index] || CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats counter bar */}
        <div className="rounded-2xl gradient-hero p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-3xl md:text-4xl font-bold text-white"
                />
                <p className="text-white/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
