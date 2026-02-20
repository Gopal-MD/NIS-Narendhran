"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Printer, Network, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop,
  Printer,
  Network,
  Shield,
};

export function ProductCategories() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            IT Product Categories
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We supply a comprehensive range of IT products from the world&apos;s
            leading manufacturers, ensuring quality, reliability, and value for
            your business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCT_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon] || Laptop;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-primary/10 hover:border-primary/20 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {category.description.substring(0, 120)}...
                    </p>
                    <Link href="/products">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:text-primary p-0 h-auto font-medium group/btn"
                      >
                        Explore Products
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="gradient-primary text-white">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
