"use client";

import { portfolioFullStack, portfolioLandingPages, sectionTitles } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";

// Mapa de ícones devicon para skills
const skillIconMap: Record<string, string> = {
  "Typescript": "devicon-typescript-plain colored",
  "React": "devicon-react-original colored",
  "Next": "devicon-nextjs-plain",
  "HTML/CSS": "devicon-html5-plain colored",
  "Javascript": "devicon-javascript-plain colored",
  "Python": "devicon-python-plain colored",
  "Django": "devicon-django-plain colored",
  "Bootstrap": "devicon-bootstrap-plain colored",
  "Em breve": "",
};

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  skills: string[];
  websiteUrl?: string;
  isPlaceholder?: boolean;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlaceholder = project.isPlaceholder || project.skills.includes("Em breve");

  const CardContent = (
    <div className="group h-full glass-card rounded-2xl overflow-hidden hover:border-[var(--primary)]/50 hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600/10 to-purple-600/10 overflow-hidden">
        {project.image && !project.image.includes("placeholder") ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-16 h-16 text-zinc-300 dark:text-zinc-700" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          {!isPlaceholder && (
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <ExternalLink size={16} />
              Ver Projeto
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Skills/Tags with Icons */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.skills.map((skill) => {
            const iconClass = skillIconMap[skill];
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full glass-badge ${
                  skill === "Em breve"
                    ? "text-[var(--text-muted)]"
                    : "text-[var(--primary)]"
                }`}
              >
                {iconClass && <i className={`${iconClass} text-sm`}></i>}
                {skill}
              </span>
            );
          })}
        </div>

        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (isPlaceholder || !project.websiteUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="opacity-60"
      >
        {CardContent}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={project.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {CardContent}
    </motion.a>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Full-Stack Portfolio */}
        <SectionTitle title={sectionTitles.portfolioFull} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {portfolioFullStack.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Landing Pages Portfolio */}
        <SectionTitle title={sectionTitles.portfolioLanding} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioLandingPages.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
