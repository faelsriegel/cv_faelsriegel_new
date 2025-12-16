"use client";

import { portfolioFullStack, portfolioLandingPages } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiDjango,
  SiTelegram,
  SiVercel,
} from "react-icons/si";

// Mapa de ícones react-icons para skills
const skillIconMap: Record<string, IconType> = {
  "Typescript": SiTypescript,
  "React": FaReact,
  "Next": SiNextdotjs,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  "HTML/CSS": FaHtml5,
  "HTML": FaHtml5,
  "CSS": FaCss3,
  "Javascript": FaReact,
  "Python": FaPython,
  "Django": SiDjango,
  "Bootstrap": SiBootstrap,
  "Tailwind": SiTailwindcss,
  "Telegram API": SiTelegram,
  "Vercel": SiVercel,
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

function ProjectCard({ project, index, comingSoonText = "Em breve" }: { project: Project; index: number; comingSoonText?: string }) {
  const isPlaceholder = project.isPlaceholder || project.skills.includes("Em breve") || project.skills.includes("Coming soon");
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isPlaceholder ? "opacity-60" : ""}
    >
      <div className="group h-full glass-card rounded-2xl overflow-hidden flex flex-col">
        {/* Image - aspect ratio fixo com contain */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-600/5 to-purple-600/5 overflow-hidden">
          {project.image && !project.image.includes("placeholder") ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Folder className="w-16 h-16 text-theme-subtle" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-theme mb-2 line-clamp-2">
            {project.name}
          </h3>

          <p className="text-xs text-theme-muted line-clamp-3 mb-4 flex-1">
            {project.description}
          </p>

          {/* Skills/Tags with Icons - centered */}
          <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
            {project.skills.map((skill) => {
              const Icon = skillIconMap[skill];
              return (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 glass-badge text-theme-muted text-[10px] font-medium rounded-xl"
                  title={skill}
                >
                  {Icon && <Icon className="text-sm" />}
                  {!Icon && skill}
                </span>
              );
            })}
          </div>

          {/* Button */}
          {!isPlaceholder && project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 glass-button rounded-xl text-sm font-medium text-theme hover:scale-[1.02] transition-all duration-300"
            >
              <ExternalLink size={16} />
              {locale === "pt" ? "Ver Projeto" : "View Project"}
            </a>
          ) : (
            <div className="py-2.5 px-4 glass-badge rounded-xl text-sm font-medium text-theme-muted text-center">
              {comingSoonText}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const { t } = useLanguage();
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Full-Stack Portfolio */}
        <SectionTitle title={t.sections.portfolioFull} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {portfolioFullStack.map((project, index) => {
            const translatedProject = t.portfolio.fullStack[index];
            return (
              <ProjectCard 
                key={project.id} 
                project={{
                  ...project,
                  name: translatedProject?.name || project.name,
                  description: translatedProject?.description || project.description,
                }} 
                index={index}
                comingSoonText={t.portfolio.comingSoon}
              />
            );
          })}
        </div>

        {/* Landing Pages Portfolio */}
        <SectionTitle title={t.sections.portfolioLanding} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioLandingPages.map((project, index) => {
            const translatedProject = t.portfolio.landingPages[index];
            return (
              <ProjectCard 
                key={project.id} 
                project={{
                  ...project,
                  name: translatedProject?.name || project.name,
                  description: translatedProject?.description || project.description,
                }} 
                index={index}
                comingSoonText={t.portfolio.comingSoon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
