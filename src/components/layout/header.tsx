"use client";

import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import { LanguageToggle } from "../ui/language-toggle";
import { useLanguage } from "../providers/language-provider";
import type { Locale } from "@/lib/i18n";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale } = useLanguage();
  const languageOptions: Locale[] = ["pt", "en"];

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

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-clip",
        scrolled || isOpen
          ? "header-glass !rounded-none !border-t-0 !border-x-0"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="w-full px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between box-border">
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 text-theme"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <a
            href="#about"
            className="hidden sm:block text-base sm:text-xl font-bold text-theme truncate max-w-[180px] sm:max-w-none"
            style={{ fontFamily: "'Nasalization', sans-serif" }}
          >
            {personalInfo.name}
          </a>
        </div>

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

        {/* Mobile Controls */}
        <div
          className={cn(
            "flex items-center gap-1 lg:hidden shrink-0",
            isOpen && "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex items-center rounded-full border border-white/15 bg-white/5 text-[10px] font-semibold backdrop-blur">
            {languageOptions.map((option) => (
              <button
                key={option}
                onClick={() => setLocale(option)}
                className={cn(
                  "px-1.5 py-0.5 rounded-full transition-colors",
                  locale === option
                    ? "bg-white text-black"
                    : "text-theme-muted"
                )}
                aria-pressed={locale === option}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "lg:hidden fixed inset-x-0 top-14 bottom-0 z-40 backdrop-blur-xl px-4 py-6",
          "bg-[var(--background)]/95 border-t border-[var(--glass-border)]",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-3 mb-4">
            <span
              className="text-lg font-semibold text-theme"
              style={{ fontFamily: "'Nasalization', sans-serif" }}
            >
              {personalInfo.name}
            </span>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-theme-muted hover:text-theme py-2 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                transition={{ delay: 0.03 * index, duration: 0.15 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-[var(--glass-border)] pt-3 text-xs text-theme-subtle">
            <p>{personalInfo.role}</p>
            <p className="opacity-70 mt-0.5">{personalInfo.email}</p>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
