"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Code, MapPin, User } from "lucide-react";
import { SectionTitle } from "../ui/section-title";

export function About() {
  const stats = [
    { label: "Anos de Experiência", value: "5+" },
    { label: "Projetos Concluídos", value: "50+" },
    { label: "Clientes Satisfeitos", value: "30+" },
    { label: "Tecnologias", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Conheça um pouco mais sobre minha trajetória e o que me motiva"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <User className="w-32 h-32 text-white/80" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-600 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <MapPin size={20} className="text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>

              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho
                experiência em criar soluções web modernas e escaláveis, sempre
                focando na melhor experiência do usuário.
              </p>

              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Minha jornada na programação começou há mais de 5 anos, e desde
                então venho me especializando em tecnologias como React, Node.js,
                TypeScript e cloud computing.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm">
                  <Code className="text-blue-600" size={20} />
                  <span className="text-sm font-medium">Clean Code</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm">
                  <Briefcase className="text-purple-600" size={20} />
                  <span className="text-sm font-medium">Freelancer</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
