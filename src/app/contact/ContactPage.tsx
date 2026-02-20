"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { COMPANY } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export function ContactPage() {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Let&apos;s Talk About Your IT Needs
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you have a question, need a quote, or want to discuss a
              custom IT solution, our team is ready to help. Reach out to us
              through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        Office Address
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        Email
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {COMPANY.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        Phone
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {COMPANY.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">
                        Business Hours
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Sunday – Thursday: 9:00 AM – 6:00 PM
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Friday – Saturday: Closed
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors border border-green-200"
                  >
                    <div className="w-11 h-11 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 text-sm">
                        WhatsApp
                      </p>
                      <p className="text-green-600 text-sm">
                        Chat with us instantly
                      </p>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white rounded-2xl shadow-lg border p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                  <ContactForm variant="full" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-96 relative">
        <iframe
          src={COMPANY.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NIS Office Location - Amber Gem Tower, Ajman"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
