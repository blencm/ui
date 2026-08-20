import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group";

import { useLocale, type Locale } from "../i18n/locale";

export function LanguageToggle() {
  const { locale, setLocale, m } = useLocale();

  return (
    <ToggleGroup
      type="single"
      size="sm"
      variant="outline"
      value={locale}
      onValueChange={(value) => {
        if (value === "en" || value === "es") setLocale(value as Locale);
      }}
      aria-label={m.language}
      className="bg-background gap-0 rounded-md border p-0.5"
    >
      <ToggleGroupItem
        value="en"
        aria-label="English"
        className="h-7 rounded-sm border-0 px-2.5 text-xs shadow-none"
      >
        EN
      </ToggleGroupItem>
      <ToggleGroupItem
        value="es"
        aria-label="Español"
        className="h-7 rounded-sm border-0 px-2.5 text-xs shadow-none"
      >
        ES
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
