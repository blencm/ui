import * as React from "react";

import { SearchInput } from "@/components/search-input";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { SearchInput } from '@blencm/ui';

export function SearchInputDemo() {
  const [search, setSearch] = React.useState('');

  return (
    <SearchInput
      value={search}
      placeholder="Search documents..."
      debounceTime={400}
      onSearch={(value) => setSearch(value ?? '')}
    />
  );
}`;

export default function SearchInputDemoPage() {
  const [search, setSearch] = React.useState("");

  return (
    <DemoPage
      title="SearchInput"
      description="Input de búsqueda con debounce."
    >
      <DemoPreview code={code} className="max-w-sm space-y-3">
        <SearchInput
          value={search}
          placeholder="Search documents..."
          debounceTime={400}
          onSearch={(value) => setSearch(value ?? "")}
        />
        <p className="text-muted-foreground text-sm">
          Valor: {search || "(vacío)"}
        </p>
      </DemoPreview>
    </DemoPage>
  );
}
