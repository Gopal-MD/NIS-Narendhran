"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl gradient-hero flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">NIS</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">
                    NATHI INTEGRATED IT SOLUTIONS
                  </p>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Trusted Service
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-6">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                  Your Trusted IT Partner in the UAE
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                NATHI INTEGRATED IT SOLUTIONS FZE LLC is a premier IT solutions
                provider headquartered in Ajman, UAE. With over 15 years of
                industry experience, we specialize in delivering comprehensive
                IT hardware, networking, security, and managed service solutions
                to businesses of all sizes across the Emirates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As authorized channel partners of leading global technology
                brands, we bridge the gap between cutting-edge technology and
                business needs, ensuring our clients stay ahead in an
                ever-evolving digital landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Authorized Brand Partner",
                  "Certified Professionals",
                  "End-to-End Solutions",
                  "Pan-UAE Coverage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="gradient-primary text-white mt-2">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
