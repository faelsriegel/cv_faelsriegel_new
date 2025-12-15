"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";
import { useLanguage } from "../providers/language-provider";
import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaJava,
  FaJs,
  FaLinux,
  FaWindows,
  FaAws,
  FaFreebsd,
  FaWordpress,
  FaPython,
  FaUbuntu
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiJenkins,
  SiVercel,
  SiCplusplus,
  SiBootstrap,
  SiTerraform,
  SiElementor,
  SiDjango,
  SiHeroku,
  SiFlask,
  SiGitlab,
  SiKalilinux,
  SiAnthropic,
  SiGooglegemini,
  SiOpenai,
  SiDigitalocean,
  SiGooglecloud
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbChartHistogram } from "react-icons/tb";
import { ImGit } from "react-icons/im";

// Mapa de ícones react-icons para cada skill
const skillIconMap: Record<string, IconType> = {
  // Sistemas Operacionais
  "Windows": FaWindows,
  "Linux": FaLinux,
  "FreeBSD": FaFreebsd,
  "Ubuntu": FaUbuntu,
  "Kali Linux": SiKalilinux,
  // Linguagens
  "Java": FaJava,
  "C++": SiCplusplus,
  "Python": FaPython,
  "Django": SiDjango,
  "Flask": SiFlask,
  // Frontend
  "HTML": FaHtml5,
  "CSS": FaCss3,
  "Bootstrap CSS": SiBootstrap,
  "Tailwind CSS": SiTailwindcss,
  "Figma": SiFigma,
  "Javascript": FaJs,
  "Typescript": SiTypescript,
  "React.js": FaReact,
  "Node.js": FaNodeJs,
  "Next.js": SiNextdotjs,
  // Deploy & Cloud
  "Vercel": SiVercel,
  "Heroku": SiHeroku,
  "Git": ImGit,
  "Gitlab": SiGitlab,
  "Wordpress": FaWordpress,
  "Elementor": SiElementor,
  // DevOps
  "Docker": FaDocker,
  "Jenkins": SiJenkins,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "Zabbix": TbChartHistogram,
  // Cloud Providers
  "AWS": FaAws,
  "Azure": VscAzure,
  "Google Cloud": SiGooglecloud,
  "Digital Ocean": SiDigitalocean,
  // AI
  "Claude Code": SiAnthropic,
  "ChatGPT": SiOpenai,
  "Google Gemini": SiGooglegemini,
};

export function Skills() {
  const { t, locale } = useLanguage();
  
  const getExperienceText = (years: number) => {
    if (locale === "en") {
      if (years < 1) {
        const months = Math.round(years * 12);
        return `${months}+ ${months === 1 ? "month" : "months"} experience`;
      }
      return `${years}+ ${years === 1 ? "year" : "years"} experience`;
    }
    if (years < 1) {
      const months = Math.round(years * 12);
      return `+ de ${months} ${months === 1 ? "mês" : "meses"} de experiência`;
    }
    return `+ de ${years} ${years === 1 ? "ano" : "anos"} de experiência`;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={t.sections.skills} />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {skills.map((skill, index) => {
              const IconComponent = skillIconMap[skill.name];
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group"
                >
                  <div className="glass-card rounded-2xl p-6 text-center h-full flex flex-col justify-center items-center transition-all duration-300">
                    {/* Skill Icon */}
                    <div className="mb-4 group-hover:scale-110 transition-all duration-300">
                      {IconComponent ? (
                        <IconComponent className="text-5xl text-theme" />
                      ) : (
                        <span className="text-4xl font-bold text-theme">
                          {skill.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-theme text-sm mb-2">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-theme-muted">
                      {getExperienceText(skill.years)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
