"use client";

import { services, sectionTitles } from "@/lib/data";
import { motion } from "framer-motion";
import { Server, Shield, Laptop } from "lucide-react";
import { SectionTitle } from "../ui/section-title";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  shield: Shield,
  laptop: Laptop,
};

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitles.services} />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-card rounded-2xl p-8"
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 glass-badge text-[var(--primary)] text-xs font-medium rounded-full uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
