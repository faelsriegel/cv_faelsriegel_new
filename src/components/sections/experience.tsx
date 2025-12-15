"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";

const experiences = [
  {
    id: 1,
    role: {
      pt: "Proprietário & Engenheiro de Computação",
      en: "Owner & Computer Engineer"
    },
    company: "Stuepp Riegel Company LTDA",
    period: {
      pt: "2020 - Presente",
      en: "2020 - Present"
    },
    description: {
      pt: "Fundador e responsável pela gestão e execução de projetos em tecnologia da informação, incluindo desenvolvimento web, consultoria em infraestrutura, segurança da informação e adequação à LGPD.",
      en: "Founder responsible for managing and executing IT projects, including web development, infrastructure consulting, information security, and LGPD compliance."
    },
    highlights: {
      pt: ["Desenvolvimento Full-Stack", "Consultoria em TI", "DPO as a Service", "Gestão de Projetos"],
      en: ["Full-Stack Development", "IT Consulting", "DPO as a Service", "Project Management"]
    },
    current: true,
  },
  {
    id: 2,
    role: {
      pt: "Estagiário em Engenharia de Computação",
      en: "Computer Engineering Intern"
    },
    company: "Instituto Federal Catarinense - IFC",
    period: {
      pt: "2018 - 2020",
      en: "2018 - 2020"
    },
    description: {
      pt: "Atuação em projetos de pesquisa e extensão na área de tecnologia, desenvolvimento de sistemas web e suporte técnico à infraestrutura do campus.",
      en: "Worked on research and extension projects in technology, web systems development, and technical support for campus infrastructure."
    },
    highlights: {
      pt: ["Pesquisa Acadêmica", "Desenvolvimento Web", "Suporte Técnico", "Redes"],
      en: ["Academic Research", "Web Development", "Technical Support", "Networking"]
    },
    current: false,
  },
];

export function Experience() {
  const { locale, t } = useLanguage();
  const lang = locale as 'pt' | 'en';

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.sections.experience} />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Coluna da Foto - Fixa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="glass-card rounded-2xl p-6 text-center">
                  {/* Foto */}
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/avatar.jpeg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  
                  {/* Nome e Cargo */}
                  <h3 className="text-lg font-bold text-theme mb-1">
                    {personalInfo.name}
                  </h3>
                  <p className="text-theme-muted text-sm mb-4">
                    {lang === 'pt' ? 'Engenheiro de Computação' : 'Computer Engineer'}
                  </p>
                  
                  {/* Info rápida */}
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2 text-theme-subtle text-xs">
                      <Building2 className="w-4 h-4" />
                      <span>{personalInfo.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-theme-subtle text-xs">
                      <Briefcase className="w-4 h-4" />
                      <span>{lang === 'pt' ? '5+ anos de experiência' : '5+ years of experience'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coluna da Timeline */}
            <div className="lg:col-span-2 space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                    {/* Badge de atual */}
                    {exp.current && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                          {lang === 'pt' ? 'Atual' : 'Current'}
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-theme">
                          {exp.role[lang]}
                        </h4>
                        <p className="text-theme-muted font-medium">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1 text-theme-subtle text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period[lang]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Descrição */}
                    <p className="text-theme-muted text-sm mb-4 leading-relaxed">
                      {exp.description[lang]}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights[lang].map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-3 py-1 glass-badge text-theme-subtle text-xs font-medium rounded-lg"
                        >
                          <ChevronRight className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
