"use client";

import { motion } from "framer-motion";
import { PARTNER_BRANDS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function BrandCarousel() {
  const brands = [...PARTNER_BRANDS, ...PARTNER_BRANDS];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <AnimatedSection className="text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">
            Authorized Brand Partners
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: [0, -50 * PARTNER_BRANDS.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {brands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex-shrink-0 w-40 h-20 rounded-xl bg-white shadow-sm border border-border/50 flex items-center justify-center hover:shadow-md transition-shadow group"
            >
              <span className="text-lg font-bold text-primary/60 group-hover:text-primary transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
