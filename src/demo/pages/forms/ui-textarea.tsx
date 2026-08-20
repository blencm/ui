import * as React from "react";

import { UiTextarea } from "@/components/ui/ui-textarea";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiTextareaDemoPage() {
  const t = useCopy({
    en: {
      notes: "Notes",
      placeholder: "Write something...",
      min10: "Minimum 10 characters",
    },
    es: {
      notes: "Notas",
      placeholder: "Escribe algo...",
      min10: "Mínimo 10 caracteres",
    },
  });

  const [value, setValue] = React.useState("");

  const code = `import * as React from 'react';
import { UiTextarea } from '@blencm/ui';

export function UiTextareaDemo() {
  const [value, setValue] = React.useState('');

  return (
    <UiTextarea
      label="${t.notes}"
      requiredLabel
      placeholder="${t.placeholder}"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      errorMessage={
        value.length > 0 && value.length < 10
          ? '${t.min10}'
          : undefined
      }
      rows={4}
    />
  );
}`;

  return (
    <DemoPage title="UiTextarea">
      <DemoPreview code={code} className="max-w-md">
        <UiTextarea
          label={t.notes}
          requiredLabel
          placeholder={t.placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          errorMessage={
            value.length > 0 && value.length < 10 ? t.min10 : undefined
          }
          rows={4}
        />
      </DemoPreview>
    </DemoPage>
  );
}
