"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/lib/i18n/config";

type Dictionary = (typeof dictionaries)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(`${localeCookieName}=`))
      ?.split("=")[1];

    if (cookieValue && isLocale(cookieValue)) {
      setLocaleState(cookieValue);
      document.documentElement.lang = cookieValue;
      return;
    }

    document.documentElement.lang = defaultLocale;
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
