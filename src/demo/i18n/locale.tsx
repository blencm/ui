import * as React from "react";

import { messages, type Messages } from "./messages";
import type { Locale } from "./types";

export type { Locale };

const STORAGE_KEY = "blencm-ui-locale";

function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Ignore storage access errors (private mode, etc.).
  }

  const tags = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  for (const tag of tags) {
    const base = tag.toLowerCase().split("-")[0];
    if (base === "es") return "es";
    if (base === "en") return "en";
  }

  return "en";
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  m: Messages;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(detectLocale);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage write errors.
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = React.useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      m: messages[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
