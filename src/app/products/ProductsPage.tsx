"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProductCard } from "@/components/shared/ProductCard";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { BrandCarousel } from "@/components/sections/BrandCarousel";
import { CTASection } from "@/components/sections/CTASection";

export function ProductsPage() {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Enterprise IT Products & Solutions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We supply a comprehensive range of IT products from the
              world&apos;s leading manufacturers. From computing hardware to
              networking equipment and security systems, we have everything your
              business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Browse our product categories and request a customized quote for
              your specific requirements. All products come with full
              manufacturer warranty and our local support guarantee.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <ProductCard
                key={category.slug}
                title={category.title}
                description={category.description}
                features={category.features}
                icon={category.icon}
                slug={category.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <BrandCarousel />
      <CTASection />
    </>
  );
}
