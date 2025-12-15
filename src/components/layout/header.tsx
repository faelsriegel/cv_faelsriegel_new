"use client";

import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { LanguageToggle } from "../ui/language-toggle";
import { useLanguage } from "../providers/language-provider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.skills, href: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "header-glass !rounded-none !border-t-0 !border-x-0" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-base sm:text-xl font-bold text-theme truncate max-w-[180px] sm:max-w-none"
          style={{ fontFamily: "'Nasalization', sans-serif" }}
        >
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-theme-muted hover:text-theme transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 sm:p-2 text-theme"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className={cn(
          "lg:hidden overflow-hidden",
          scrolled ? "glass-card !rounded-none !border-t-0" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 sm:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-theme-muted hover:text-theme transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
