import * as React from "react";

import { messages, type Messages } from "./messages";
import type { Locale } from "./types";

export type { Locale };

type LocaleContextValue = { locale: Locale; m: Messages };
const LocaleContext = React.createContext<LocaleContextValue | null>(null);
const englishLocale: LocaleContextValue = { locale: "en", m: messages.en };

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return <LocaleContext.Provider value={englishLocale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = React.useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
