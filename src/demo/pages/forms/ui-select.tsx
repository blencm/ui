import * as React from "react";

import { UiSelect } from "@/components/ui/select";
import { getCountryItems } from "../../data";
import { useCopy } from "../../i18n/copy";
import { useLocale } from "../../i18n/locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiSelectDemoPage() {
  const { locale } = useLocale();
  const countries = getCountryItems(locale);
  const t = useCopy({
    en: {
      language: "Language",
      languagePlaceholder: "Select a language",
      languageError: "Select a language.",
      english: "English",
      spanish: "Spanish",
      portuguese: "Portuguese",
      french: "French",
      japanese: "Japanese",
      country: "Country",
      countryPlaceholder: "Select a country",
    },
    es: {
      language: "Idioma",
      languagePlaceholder: "Selecciona un idioma",
      languageError: "Selecciona un idioma.",
      english: "Inglés",
      spanish: "Español",
      portuguese: "Portugués",
      french: "Francés",
      japanese: "Japonés",
      country: "País",
      countryPlaceholder: "Selecciona un país",
    },
  });

  const [language, setLanguage] = React.useState("");

  const languageItems = [
    { label: t.english, value: "en" },
    { label: t.spanish, value: "es" },
    { label: t.portuguese, value: "pt" },
    { label: t.french, value: "fr" },
    { label: t.japanese, value: "ja", disabled: true },
  ];

  const code = `import * as React from 'react';
import { UiSelect } from '@blencm/ui';

export function UiSelectDemo() {
  const [language, setLanguage] = React.useState('');

  return (
    <UiSelect
      htmlFormItemId="language"
      label="${t.language}"
      placeholder="${t.languagePlaceholder}"
      value={language}
      onChange={setLanguage}
      items={[
        { label: '${t.english}', value: 'en' },
        { label: '${t.spanish}', value: 'es' },
        { label: '${t.portuguese}', value: 'pt' },
        { label: '${t.french}', value: 'fr' },
        { label: '${t.japanese}', value: 'ja', disabled: true }
      ]}
      errorMessage={!language ? '${t.languageError}' : undefined}
    />
  );
}`;

  return (
    <DemoPage title="UiSelect">
      <DemoPreview code={code} className="max-w-sm">
        <UiSelect
          htmlFormItemId="language"
          label={t.language}
          placeholder={t.languagePlaceholder}
          value={language}
          onChange={setLanguage}
          items={languageItems}
          errorMessage={!language ? t.languageError : undefined}
        />
        <div className="mt-4">
          <UiSelect
            label={t.country}
            placeholder={t.countryPlaceholder}
            items={countries}
          />
        </div>
      </DemoPreview>
    </DemoPage>
  );
}
