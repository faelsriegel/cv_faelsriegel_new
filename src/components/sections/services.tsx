"use client";

import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaLaptopCode } from "react-icons/fa";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";

const iconMap: Record<string, React.ElementType> = {
  server: FaServer,
  shield: FaShieldAlt,
  laptop: FaLaptopCode,
};

export function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.sections.services} />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const translatedService = t.services[index];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-card rounded-2xl p-6 h-full"
              >
                {/* Header com Icon e Tags lado a lado */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl glass-badge flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-theme" />
                  </div>
                  
                  {/* Tags como badges pequenos */}
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                    {translatedService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 glass-badge text-theme-subtle text-[10px] font-semibold rounded-xl uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="text-lg font-bold text-theme mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}
                >
                  {translatedService.name}
                </h3>

                {/* Description */}
                <p className="text-theme-muted leading-relaxed text-sm">
                  {translatedService.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
