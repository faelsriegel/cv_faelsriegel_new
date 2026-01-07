"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Building2, Code, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../providers/language-provider";

export function Hero() {
  const { t, locale } = useLanguage();
  
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span 
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-xl glass-badge text-theme text-sm sm:text-lg mb-6 sm:mb-8 capitalize"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {t.role}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-theme mb-4 sm:mb-6 tracking-tight"
              style={{ fontFamily: "'Nasalization', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Bio */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-theme-muted mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.bio}
            </motion.p>

            {/* Subtitle */}
            <motion.p 
              className="text-sm sm:text-base text-theme-subtle mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center items-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  {t.hero.contact}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-theme w-full sm:w-auto"
                asChild
              >
                <a href="/cv/CV_Rafael_Stuepp_Riegel.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  {t.hero.viewCV}
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-3 justify-center flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { href: personalInfo.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: personalInfo.social.github, icon: Github, label: "GitHub" },
                { href: personalInfo.social.replit, icon: Code, label: locale === "pt" ? "Perfil no Replit" : "Replit Profile" },
                { href: personalInfo.social.empresa, icon: Building2, label: locale === "pt" ? "Empresa" : "Company" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl glass-badge text-theme-subtle hover:text-theme transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] group-hover:text-[var(--primary)] transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
