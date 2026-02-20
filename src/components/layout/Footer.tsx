import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="NIS Logo"
                width={44}
                height={52}
              />
              <div>
                <h3 className="font-bold text-lg">{COMPANY.shortName}</h3>
                <p className="text-xs text-white/60">IT Solutions</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {COMPANY.tagline}. Delivering enterprise-grade IT hardware,
              networking, security, and managed services to businesses across the
              UAE.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary shrink-0" />
                <p className="text-white/70 text-sm">{COMPANY.address}</p>
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white/70 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white/70 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
