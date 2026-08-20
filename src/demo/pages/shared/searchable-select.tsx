import * as React from "react";

import { SearchableSelect } from "@/components/searchable-select";
import { getCountryItems } from "../../data";
import { useCopy } from "../../i18n/copy";
import { useLocale } from "../../i18n/locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SearchableSelectDemoPage() {
  const { locale } = useLocale();
  const countries = getCountryItems(locale);
  const t = useCopy({
    en: {
      fruitPlaceholder: "Select a fruit",
      fruitSearch: "Search fruit...",
      apple: "Apple",
      banana: "Banana",
      orange: "Orange",
      strawberry: "Strawberry",
      countryPlaceholder: "Select a country",
      countrySearch: "Search a country...",
      noCountries: "No countries",
    },
    es: {
      fruitPlaceholder: "Selecciona una fruta",
      fruitSearch: "Buscar fruta...",
      apple: "Manzana",
      banana: "Plátano",
      orange: "Naranja",
      strawberry: "Fresa",
      countryPlaceholder: "Selecciona un país",
      countrySearch: "Buscar un país...",
      noCountries: "No hay países",
    },
  });

  const [fruit, setFruit] = React.useState("");
  const [country, setCountry] = React.useState("");

  const fruitItems = [
    { label: t.apple, value: "apple", keywords: "fruit red green sweet manzana" },
    { label: t.banana, value: "banana", keywords: "fruit yellow tropical platano" },
    { label: t.orange, value: "orange", keywords: "fruit citrus vitamin c naranja" },
    {
      label: t.strawberry,
      value: "strawberry",
      keywords: "fruit berry red sweet fresa",
    },
  ];

  const code = `import * as React from 'react';
import { SearchableSelect } from '@blencm/ui';

export function SearchableSelectDemo() {
  const [fruit, setFruit] = React.useState('');

  return (
    <SearchableSelect
      value={fruit}
      onValueChange={setFruit}
      placeholder="${t.fruitPlaceholder}"
      searchPlaceholder="${t.fruitSearch}"
      items={[
        { label: '${t.apple}', value: 'apple', keywords: 'fruit red green sweet' },
        { label: '${t.banana}', value: 'banana', keywords: 'fruit yellow tropical' },
        { label: '${t.orange}', value: 'orange', keywords: 'fruit citrus vitamin c' }
      ]}
    />
  );
}`;

  return (
    <DemoPage title="SearchableSelect">
      <DemoPreview code={code} className="max-w-sm space-y-6">
        <SearchableSelect
          value={fruit}
          onValueChange={setFruit}
          placeholder={t.fruitPlaceholder}
          searchPlaceholder={t.fruitSearch}
          items={fruitItems}
        />
        <SearchableSelect
          items={countries}
          value={country}
          placeholder={t.countryPlaceholder}
          searchPlaceholder={t.countrySearch}
          emptyText={t.noCountries}
          onValueChange={setCountry}
        />
      </DemoPreview>
    </DemoPage>
  );
}
