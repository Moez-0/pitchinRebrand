"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const nextLocale: Locale = locale === "en" ? "fr" : "en";
  const nextLabel = nextLocale === "en" ? t.language.english : t.language.french;

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      aria-label={`${t.language.label}: ${nextLabel}`}
      title={`${t.language.label}: ${nextLabel}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 hover:text-white"
    >
      <Languages className="h-4 w-4" />
    </button>
  );
}
