"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Building2, Code } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-badge text-theme text-sm font-medium mb-6 uppercase tracking-wider">
              {personalInfo.role}
            </span>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme mb-6 whitespace-nowrap" 
              style={{ fontFamily: "'Nasalization', sans-serif", letterSpacing: '-1px' }}
            >
              {personalInfo.name}
            </h1>

            <p className="text-lg text-theme-muted mb-8 max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <Button size="lg" className="text-theme" asChild>
                <a href="/cv">Currículo</a>
              </Button>
              <Button variant="outline" size="lg" className="text-theme" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Envie um e-mail
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge text-theme-muted hover:text-theme transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge text-theme-muted hover:text-theme transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.replit}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge text-theme-muted hover:text-theme transition-all"
              >
                <Code size={20} />
              </a>
              <a
                href={personalInfo.social.empresa}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-badge text-theme-muted hover:text-theme transition-all"
              >
                <Building2 size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-theme-muted" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
