import * as React from "react";

import { SearchInput } from "@/components/search-input";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SearchInputDemoPage() {
  const t = useCopy({
    en: {
      placeholder: "Search documents...",
      value: "Value",
      empty: "(empty)",
    },
    es: {
      placeholder: "Buscar documentos...",
      value: "Valor",
      empty: "(vacío)",
    },
  });

  const [search, setSearch] = React.useState("");

  const code = `import * as React from 'react';
import { SearchInput } from '@blencm/ui';

export function SearchInputDemo() {
  const [search, setSearch] = React.useState('');

  return (
    <SearchInput
      value={search}
      placeholder="${t.placeholder}"
      debounceTime={400}
      onSearch={(value) => setSearch(value ?? '')}
    />
  );
}`;

  return (
    <DemoPage title="SearchInput">
      <DemoPreview code={code} className="max-w-sm space-y-3">
        <SearchInput
          value={search}
          placeholder={t.placeholder}
          debounceTime={400}
          onSearch={(value) => setSearch(value ?? "")}
        />
        <p className="text-muted-foreground text-sm">
          {t.value}: {search || t.empty}
        </p>
      </DemoPreview>
    </DemoPage>
  );
}
