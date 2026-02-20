"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Monitor,
  Printer,
  Network,
  Shield,
  Laptop,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Printer,
  Network,
  Shield,
  Laptop,
};

interface ProductCardProps {
  title: string;
  description: string;
  features: readonly string[];
  icon: string;
  slug: string;
  index?: number;
}

export function ProductCard({
  title,
  description,
  features,
  icon,
  slug,
  index = 0,
}: ProductCardProps) {
  const IconComponent = iconMap[icon] || Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group">
        <div className="h-2 gradient-primary" />
        <CardHeader className="pb-3">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <CardTitle className="text-xl font-bold text-primary">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 4).map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-primary/5 text-primary border-primary/10 text-xs"
              >
                {feature}
              </Badge>
            ))}
            {features.length > 4 && (
              <Badge
                variant="secondary"
                className="bg-muted text-muted-foreground text-xs"
              >
                +{features.length - 4} more
              </Badge>
            )}
          </div>
          <Link href={`/contact?product=${slug}`}>
            <Button
              variant="outline"
              className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-white transition-all group/btn"
            >
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
