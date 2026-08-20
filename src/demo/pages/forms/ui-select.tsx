import * as React from "react";

import { UiSelect } from "@/components/ui/select";
import { COUNTRY_ITEMS } from "../../data";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiSelect } from '@blencm/ui';

export function UiSelectDemo() {
  const [language, setLanguage] = React.useState('');

  return (
    <UiSelect
      htmlFormItemId="language"
      label="Language"
      placeholder="Select a language"
      value={language}
      onChange={setLanguage}
      items={[
        { label: 'English', value: 'en' },
        { label: 'Spanish', value: 'es' },
        { label: 'Portuguese', value: 'pt' },
        { label: 'French', value: 'fr' },
        { label: 'Japanese', value: 'ja', disabled: true }
      ]}
      errorMessage={!language ? 'Select a language.' : undefined}
    />
  );
}`;

export default function UiSelectDemoPage() {
  const [language, setLanguage] = React.useState("");

  return (
    <DemoPage
      title="UiSelect"
      description="Select con label y validación visual, listo para usar fuera de RHF."
    >
      <DemoPreview code={code} className="max-w-sm">
        <UiSelect
          htmlFormItemId="language"
          label="Language"
          placeholder="Select a language"
          value={language}
          onChange={setLanguage}
          items={[
            { label: "English", value: "en" },
            { label: "Spanish", value: "es" },
            { label: "Portuguese", value: "pt" },
            { label: "French", value: "fr" },
            { label: "Japanese", value: "ja", disabled: true },
          ]}
          errorMessage={!language ? "Select a language." : undefined}
        />
        <div className="mt-4">
          <UiSelect
            label="Country"
            placeholder="Select a country"
            items={COUNTRY_ITEMS}
          />
        </div>
      </DemoPreview>
    </DemoPage>
  );
}
