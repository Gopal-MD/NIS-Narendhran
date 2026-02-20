"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { AMC_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Printer,
  FileText,
  Building,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Printer,
  FileText,
  Building,
};

export function AMCRentalPage() {
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
              AMC & Rental
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Maintenance Contracts & Rental Solutions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Protect your IT investments with our flexible maintenance
              contracts and cost-effective rental programs. Choose from
              printer rentals, comprehensive AMC plans, and dedicated corporate
              support packages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Predictable Costs",
                desc: "Fixed monthly fees with no surprise expenses",
              },
              {
                icon: Clock,
                title: "Priority Response",
                desc: "SLA-backed response times as fast as 4 hours",
              },
              {
                icon: Wrench,
                title: "Preventive Maintenance",
                desc: "Regular servicing to minimize downtime",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Plans & Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Choose the plan that best fits your business needs. All our plans
              are customizable and can be tailored to your specific
              requirements.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {AMC_PLANS.map((plan, index) => {
              const Icon = iconMap[plan.icon] || FileText;
              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full border-0 shadow-lg overflow-hidden ${
                      index === 1
                        ? "ring-2 ring-secondary relative"
                        : ""
                    }`}
                  >
                    {index === 1 && (
                      <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div className="h-2 gradient-primary" />
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-primary">
                        {plan.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {plan.description}
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact?service=amc">
                        <Button className="w-full gradient-primary text-white">
                          Get a Custom Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How AMC Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We audit your current IT assets and understand your support requirements.",
              },
              {
                step: "02",
                title: "Custom Plan",
                desc: "We design a tailored maintenance or rental plan that fits your budget and needs.",
              },
              {
                step: "03",
                title: "Deployment",
                desc: "Equipment is delivered, installed, and configured by our certified team.",
              },
              {
                step: "04",
                title: "Ongoing Care",
                desc: "Regular maintenance, fast response to issues, and quarterly performance reviews.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-primary/20" />
                )}
                <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
