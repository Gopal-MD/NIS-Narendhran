"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { STATS, COMPANY } from "@/lib/constants";
import {
  Target,
  Eye,
  Award,
  Building2,
  Globe,
  Shield,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

const strengths = [
  {
    icon: Award,
    title: "Authorized Partnerships",
    description:
      "We are authorized resellers of HP, Dell, Lenovo, Canon, Epson, Cisco, Hikvision, and other leading global IT brands.",
  },
  {
    icon: Users,
    title: "Expert Technical Team",
    description:
      "Our certified engineers and technicians hold industry-recognized certifications and bring years of hands-on experience.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "We maintain strategic inventory levels and streamlined logistics to ensure quick delivery and installation timelines.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every product we supply is 100% genuine with full manufacturer warranty. Every service follows strict quality protocols.",
  },
  {
    icon: Globe,
    title: "Pan-UAE Coverage",
    description:
      "From our base in Ajman, we serve clients across all seven Emirates with dedicated field teams in major business hubs.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Whether you are a startup or an enterprise, our solutions are designed to grow with your business needs.",
  },
];

const industries = [
  "Government & Public Sector",
  "Banking & Financial Services",
  "Healthcare & Hospitals",
  "Education & Universities",
  "Retail & Hospitality",
  "Real Estate & Construction",
  "Manufacturing & Logistics",
  "Oil, Gas & Energy",
];

export function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About NIS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Powering Businesses with Reliable IT Solutions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Since our inception, NATHI INTEGRATED IT SOLUTIONS FZE LLC has
              been at the forefront of delivering innovative and reliable IT
              solutions to businesses across the United Arab Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Company Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY.name} is a leading IT solutions company headquartered
                  at the prestigious Amber Gem Tower in Ajman, UAE. Established
                  with a vision to bridge the gap between world-class technology
                  and regional business needs, we have grown into a trusted name
                  in the UAE&apos;s IT sector.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our portfolio spans the entire IT ecosystem — from enterprise
                  hardware procurement and network infrastructure design to
                  security surveillance systems and managed IT services. We
                  serve a diverse clientele including government agencies,
                  multinational corporations, SMEs, and educational institutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As authorized channel partners of leading global technology
                  brands, we offer genuine products with full manufacturer
                  warranty, backed by our in-house team of certified engineers
                  and technicians who deliver world-class installation, support,
                  and maintenance services.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 text-center border border-primary/10"
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-3xl font-bold text-primary"
                    />
                    <p className="text-muted-foreground text-sm mt-2">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, reliable, and cost-effective IT
                  solutions that empower businesses to achieve operational
                  excellence. We are committed to building long-term
                  partnerships with our clients by providing exceptional
                  products, responsive support, and strategic technology
                  consulting that drives measurable business outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred IT solutions partner
                  in the UAE, recognized for our technical excellence, customer
                  commitment, and the ability to transform business challenges
                  into technology opportunities. We aspire to set the benchmark
                  for quality and service in the regional IT industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Company Strengths
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              What sets us apart is our unwavering commitment to quality,
              strategic partnerships, and a customer-first philosophy that
              permeates everything we do.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Industries We Serve
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our diverse portfolio of IT solutions has been successfully
              deployed across a wide range of industries, giving us unmatched
              cross-sector expertise.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <Building2 className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
