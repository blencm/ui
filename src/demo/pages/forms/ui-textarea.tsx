import * as React from "react";

import { UiTextarea } from "@/components/ui/ui-textarea";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiTextarea } from '@blencm/ui';

export function UiTextareaDemo() {
  const [value, setValue] = React.useState('');

  return (
    <UiTextarea
      label="Notas"
      requiredLabel
      placeholder="Escribe algo..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      errorMessage={
        value.length > 0 && value.length < 10
          ? 'Mínimo 10 caracteres'
          : undefined
      }
      rows={4}
    />
  );
}`;

export default function UiTextareaDemoPage() {
  const [value, setValue] = React.useState("");

  return (
    <DemoPage
      title="UiTextarea"
      description="Textarea con label y error, independiente de React Hook Form."
    >
      <DemoPreview code={code} className="max-w-md">
        <UiTextarea
          label="Notas"
          requiredLabel
          placeholder="Escribe algo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          errorMessage={
            value.length > 0 && value.length < 10
              ? "Mínimo 10 caracteres"
              : undefined
          }
          rows={4}
        />
      </DemoPreview>
    </DemoPage>
  );
}
