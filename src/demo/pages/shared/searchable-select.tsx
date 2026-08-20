import * as React from "react";

import { SearchableSelect } from "@/components/searchable-select";
import { COUNTRY_ITEMS } from "../../data";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { SearchableSelect } from '@blencm/ui';

export function SearchableSelectDemo() {
  const [fruit, setFruit] = React.useState('');

  return (
    <SearchableSelect
      value={fruit}
      onValueChange={setFruit}
      placeholder="Select a fruit"
      searchPlaceholder="Search fruit..."
      items={[
        { label: 'Apple', value: 'apple', keywords: 'fruit red green sweet' },
        { label: 'Banana', value: 'banana', keywords: 'fruit yellow tropical' },
        { label: 'Orange', value: 'orange', keywords: 'fruit citrus vitamin c' }
      ]}
    />
  );
}`;

export default function SearchableSelectDemoPage() {
  const [fruit, setFruit] = React.useState("");
  const [country, setCountry] = React.useState("");

  return (
    <DemoPage
      title="SearchableSelect"
      description="Select con buscador, portal y filtrado por keywords."
    >
      <DemoPreview code={code} className="max-w-sm space-y-6">
        <SearchableSelect
          value={fruit}
          onValueChange={setFruit}
          placeholder="Select a fruit"
          searchPlaceholder="Search fruit..."
          items={[
            { label: "Apple", value: "apple", keywords: "fruit red green sweet" },
            { label: "Banana", value: "banana", keywords: "fruit yellow tropical" },
            { label: "Orange", value: "orange", keywords: "fruit citrus vitamin c" },
            {
              label: "Strawberry",
              value: "strawberry",
              keywords: "fruit berry red sweet",
            },
          ]}
        />
        <SearchableSelect
          items={COUNTRY_ITEMS}
          value={country}
          placeholder="Select a country"
          searchPlaceholder="Search a country..."
          emptyText="No countries"
          onValueChange={setCountry}
        />
      </DemoPreview>
    </DemoPage>
  );
}
