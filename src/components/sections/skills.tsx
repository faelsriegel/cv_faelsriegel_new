"use client";

import { skills, sectionTitles } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/section-title";

// Mapa de ícones devicon para cada skill
const skillIconMap: Record<string, string> = {
  // Sistemas Operacionais
  "Windows": "devicon-windows11-original colored",
  "Linux": "devicon-linux-plain",
  "FreeBSD": "devicon-unix-original",
  "Ubuntu": "devicon-ubuntu-plain colored",
  "Kali Linux": "devicon-linux-plain colored",
  // Linguagens
  "Java": "devicon-java-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  "Python": "devicon-python-plain colored",
  "Django": "devicon-django-plain colored",
  "Flask": "devicon-flask-original",
  // Frontend
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "Bootstrap CSS": "devicon-bootstrap-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  "Figma": "devicon-figma-plain colored",
  "Javascript": "devicon-javascript-plain colored",
  "Typescript": "devicon-typescript-plain colored",
  "React.js": "devicon-react-original colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Next.js": "devicon-nextjs-plain",
  // Deploy & Cloud
  "Vercel": "devicon-vercel-original",
  "Heroku": "devicon-heroku-original colored",
  "Git": "devicon-git-plain colored",
  "Gitlab": "devicon-gitlab-plain colored",
  "Wordpress": "devicon-wordpress-plain colored",
  "Elementor": "devicon-wordpress-plain colored",
  // DevOps
  "Docker": "devicon-docker-plain colored",
  "Jenkins": "devicon-jenkins-plain colored",
  "Kubernetes": "devicon-kubernetes-plain colored",
  "Terraform": "devicon-terraform-plain colored",
  "Prometheus": "devicon-prometheus-original colored",
  "Grafana": "devicon-grafana-plain colored",
  "Zabbix": "devicon-linux-plain colored",
  // Cloud Providers
  "AWS": "devicon-amazonwebservices-plain-wordmark colored",
  "Azure": "devicon-azure-plain colored",
  "Google Cloud": "devicon-googlecloud-plain colored",
  "Digital Ocean": "devicon-digitalocean-plain colored",
  // AI
  "Claude Code": "devicon-vscode-plain colored",
  "ChatGPT": "devicon-openai-plain",
  "Google Gemini": "devicon-google-plain colored",
};

export function Skills() {
  const getExperienceText = (years: number) => {
    if (years < 1) {
      const months = Math.round(years * 12);
      return `+ de ${months} ${months === 1 ? "mês" : "meses"} de experiência`;
    }
    return `+ de ${years} ${years === 1 ? "ano" : "anos"} de experiência`;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={sectionTitles.skills} />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const iconClass = skillIconMap[skill.name];
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group"
                >
                  <div className="glass-card rounded-2xl p-6 text-center h-full flex flex-col justify-center hover:border-[var(--primary)]/50 transition-all duration-300">
                    {/* Skill Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl glass-badge flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      {iconClass ? (
                        <i className={`${iconClass} text-2xl`}></i>
                      ) : (
                        <span className="text-xl font-bold text-[var(--primary)]">
                          {skill.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)]">
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
