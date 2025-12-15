import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Building2, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 glass-card !rounded-none !border-x-0 !border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            © {currentYear} {personalInfo.name}. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-badge text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-badge text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.social.replit}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-badge text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              <Code size={20} />
            </a>
            <a
              href={personalInfo.social.empresa}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-badge text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              <Building2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
