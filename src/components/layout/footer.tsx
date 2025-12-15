"use client";

import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin, FaBusinessTime } from "react-icons/fa";
import { SiReplit } from "react-icons/si";
import { useLanguage } from "../providers/language-provider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { href: personalInfo.social.empresa, icon: FaBusinessTime, label: "Empresa" },
    { href: personalInfo.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: personalInfo.social.github, icon: FaGithub, label: "GitHub" },
    { href: personalInfo.social.replit, icon: SiReplit, label: "Replit" },
  ];

  return (
    <footer className="py-8 sm:py-10 glass-card !rounded-none !border-x-0 !border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-badge text-theme-muted hover:text-theme transition-all duration-300 hover:scale-110"
                title={social.label}
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
