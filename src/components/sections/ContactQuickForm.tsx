"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function ContactQuickForm() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                  Let&apos;s Discuss Your IT Needs
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a single printer or a complete IT overhaul, our
                team is ready to help. Reach out to us for a free consultation
                and customized quote.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <a
                      href={`mailto:${COMPANY.emails.join(",")}`}
                      className="font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {COMPANY.emails.join(" / ")}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="font-semibold text-primary">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-primary mb-6">
                Quick Quote Request
              </h3>
              <ContactForm variant="compact" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
