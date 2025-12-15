"use client";

import { useLanguage } from "../providers/language-provider";
import { Locale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 glass-badge rounded-xl px-1 py-1">
      <button
        onClick={() => setLocale("pt")}
        className={`w-8 px-2 py-1 text-xs font-semibold rounded-lg transition-all duration-200 text-center ${
          locale === "pt"
            ? "bg-white/20 dark:bg-white/10 text-theme"
            : "text-theme-muted hover:text-theme"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`w-8 px-2 py-1 text-xs font-semibold rounded-lg transition-all duration-200 text-center ${
          locale === "en"
            ? "bg-white/20 dark:bg-white/10 text-theme"
            : "text-theme-muted hover:text-theme"
        }`}
      >
        EN
      </button>
    </div>
  );
}
