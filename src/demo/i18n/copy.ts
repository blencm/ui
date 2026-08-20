import { useLocale } from "./locale";

export function useCopy<T extends Record<string, string>>(dict: {
  en: T;
  es: T;
}): T {
  const { locale } = useLocale();
  return dict[locale];
}
