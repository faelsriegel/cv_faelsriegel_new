"use client";

import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";

export function Education() {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.sections.education} />

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
                className="group block glass-card rounded-2xl p-8 transition-all duration-300"
              >
                {/* Header com logo ECO e título centralizado */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Logo ECO em cima */}
                  <div className="w-52 h-36 rounded-2xl flex items-center justify-center overflow-hidden mb-4">
                    <Image
                      src={edu.imageEco}
                      alt="ECO Logo"
                      width={200}
                      height={130}
                      className="object-contain edu-logo-filter"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-theme">
                      {t.education.degree}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-theme-subtle" />
                  </div>
                </div>

                {/* Skills Grid - usando traduções */}
                <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                  {t.education.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 glass-badge text-theme-subtle text-[10px] font-medium rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Logo IFC embaixo das disciplinas */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={edu.image}
                      alt="IFC Logo"
                      width={56}
                      height={56}
                      className="object-contain edu-logo-filter"
                    />
                  </div>
                </div>

                {/* Instituição por último */}
                <p className="text-theme-muted text-[11px] text-center whitespace-nowrap">
                  {t.education.institution} | {t.education.labels.duration}: {t.education.duration} | {t.education.labels.schedule}: {t.education.schedule} | {t.education.labels.modality}: {t.education.modality}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
