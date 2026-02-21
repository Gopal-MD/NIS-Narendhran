"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Monitor,
  Printer,
  FileText,
  Network,
  Camera,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Printer,
  FileText,
  Network,
  Camera,
  Headphones,
};

const serviceDetails: Record<string, string[]> = {
  "IT Hardware Supply": [
    "Laptops, desktops, servers, and workstations",
    "Peripherals: monitors, keyboards, mice, headsets",
    "Storage devices: SSDs, HDDs, NAS drives",
    "Genuine products from authorized channels",
    "Volume pricing for corporate orders",
    "Free delivery across the UAE",
  ],
  "Printer Installation & Repair": [
    "Expert installation of all printer types",
    "Laser, inkjet, and multifunction printers",
    "Diagnosis and repair of all major brands",
    "Firmware updates and driver configuration",
    "Network printer setup and sharing",
    "Same-day service available",
  ],
  "Printer AMC Contracts": [
    "Monthly and annual contract options",
    "Scheduled preventive maintenance visits",
    "Unlimited breakdown call support",
    "Toner and consumables included (optional)",
    "Dedicated account manager",
    "SLA-backed response times",
  ],
  "Network Setup & Configuration": [
    "LAN, WAN, and Wi-Fi network design",
    "Structured cabling (Cat6, Cat6A, fiber)",
    "Switch, router, and firewall configuration",
    "Network security and access control",
    "VPN and remote access setup",
    "Network performance optimization",
  ],
  "CCTV Installation": [
    "IP and HD analog camera systems",
    "NVR and DVR setup and configuration",
    "Indoor and outdoor camera installation",
    "Remote viewing and mobile app setup",
    "Night vision and motion detection",
    "Annual maintenance packages available",
  ],
  "On-Site & Remote Technical Support": [
    "Dedicated on-site engineers",
    "Remote desktop troubleshooting",
    "Hardware and software fault resolution",
    "OS installation and configuration",
    "Data backup and recovery assistance",
    "Available across all Emirates",
  ],
};

export function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              End-to-End IT Service Solutions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From hardware supply and installation to ongoing maintenance and
              support, we offer a full spectrum of IT services designed to keep
              your business running efficiently and securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Monitor;
            const details = serviceDetails[service.title] || [];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div
                    className={`grid lg:grid-cols-2 ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                  >
                    <div
                      className={`p-8 md:p-12 ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button className="gradient-primary text-white">
                          Request This Service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div
                      className={`gradient-hero flex items-center justify-center p-12 ${
                        isEven ? "order-2" : "order-2 lg:order-1"
                      }`}
                    >
                      <div className="text-center">
                        {service.image ? (
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={320}
                            height={240}
                            className="mx-auto mb-4 drop-shadow-lg"
                          />
                        ) : (
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                            <Icon className="h-12 w-12 text-white" />
                          </div>
                        )}
                        <p className="text-white/80 font-medium">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Service Process
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We assess your requirements and recommend tailored solutions for your business.",
              },
              {
                step: "02",
                title: "Proposal",
                desc: "Receive a detailed proposal with transparent pricing and clear deliverables.",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Our certified engineers deliver and deploy solutions with minimal disruption.",
              },
              {
                step: "04",
                title: "Ongoing Support",
                desc: "We provide continuous monitoring, maintenance, and support to ensure optimal performance.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mb-4">
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
