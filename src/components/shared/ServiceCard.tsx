"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Monitor,
  Printer,
  FileText,
  Network,
  Camera,
  Headphones,
  Laptop,
  Shield,
  Building,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Printer,
  FileText,
  Network,
  Camera,
  Headphones,
  Laptop,
  Shield,
  Building,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  image,
  index = 0,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Monitor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group overflow-hidden">
        {image && (
          <div className="w-full h-44 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={280}
              height={180}
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-lg font-bold text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
