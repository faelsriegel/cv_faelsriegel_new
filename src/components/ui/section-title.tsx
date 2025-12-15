"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 
        className="text-3xl md:text-4xl font-bold text-theme"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-theme-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
