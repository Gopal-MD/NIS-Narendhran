"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-white text-lg shadow-md">
              N
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-lg leading-tight transition-colors",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                {COMPANY.shortName}
              </span>
              <span
                className={cn(
                  "text-[10px] leading-tight transition-colors hidden sm:block",
                  scrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  pathname === link.href
                    ? scrolled
                      ? "text-primary bg-primary/10"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute bottom-0 left-2 right-2 h-0.5 rounded-full",
                      scrolled ? "bg-primary" : "bg-white"
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button
                size="sm"
                className="gradient-primary text-white shadow-md hover:shadow-lg transition-shadow"
              >
                <Phone className="h-4 w-4 mr-2" />
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 gradient-hero">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                        N
                      </div>
                      <div>
                        <p className="font-bold text-white">{COMPANY.shortName}</p>
                        <p className="text-sm text-white/70">IT Solutions</p>
                      </div>
                    </div>
                  </div>
                  <nav className="flex-1 p-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all",
                          pathname === link.href
                            ? "bg-primary text-white"
                            : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full gradient-primary text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
