"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We deliver end-to-end IT solutions that keep your business running
            efficiently. From hardware procurement to ongoing support, our
            services cover every aspect of your technology infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
