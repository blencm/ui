import { enUS, es } from "date-fns/locale";

import { useLocale } from "./locale";

export function useDateFnsLocale() {
  const { locale } = useLocale();
  return locale === "es" ? es : enUS;
}
