"use client";

import { education, sectionTitles } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { SectionTitle } from "../ui/section-title";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitles.education} />

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block glass-card rounded-2xl p-8 hover:border-[var(--primary)]/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={40} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {edu.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">
                      {edu.institution} | DURAÇÃO: {edu.duration} | TURNO: {edu.schedule} | MODALIDADE: {edu.modality}
                    </p>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 glass-badge text-[var(--text-secondary)] text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
