export function useCopy<T extends Record<string, string>>(dict: {
  en: T;
}): T {
  return dict.en;
}
