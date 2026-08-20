import * as React from "react";

import { UiInput } from "@/components/ui/input";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiInputDemoPage() {
  const t = useCopy({
    en: {
      name: "Name",
      placeholder: "Enter your name",
      min2: "Minimum 2 characters",
    },
    es: {
      name: "Nombre",
      placeholder: "Ingresa tu nombre",
      min2: "Mínimo 2 caracteres",
    },
  });

  const [name, setName] = React.useState("");

  const code = `import * as React from 'react';
import { UiInput } from '@blencm/ui';

export function UiInputDemo() {
  const [name, setName] = React.useState('');

  return (
    <UiInput
      htmlFormItemId="name"
      label="${t.name}"
      requiredLabel
      placeholder="${t.placeholder}"
      value={name}
      onChange={(event) => setName(event.target.value)}
      errorMessage={
        name.length > 0 && name.trim().length < 2
          ? '${t.min2}'
          : undefined
      }
    />
  );
}`;

  return (
    <DemoPage title="UiInput">
      <DemoPreview code={code} className="max-w-sm">
        <UiInput
          htmlFormItemId="name"
          label={t.name}
          requiredLabel
          placeholder={t.placeholder}
          value={name}
          onChange={(event) => setName(event.target.value)}
          errorMessage={
            name.length > 0 && name.trim().length < 2 ? t.min2 : undefined
          }
        />
      </DemoPreview>
    </DemoPage>
  );
}
