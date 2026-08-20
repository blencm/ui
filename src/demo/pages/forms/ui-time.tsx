import * as React from "react";

import { UiTime } from "@/components/ui/ui-time";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiTimeDemoPage() {
  const t = useCopy({
    en: {
      label: "Time",
      placeholder: "Select a time",
    },
    es: {
      label: "Hora",
      placeholder: "Seleccione una hora",
    },
  });

  const [time, setTime] = React.useState<Date | undefined>();

  const code = `import * as React from 'react';
import { UiTime } from '@blencm/ui';

export function UiTimeDemo() {
  const [time, setTime] = React.useState<Date | undefined>();

  return (
    <UiTime
      label="${t.label}"
      placeholder="${t.placeholder}"
      value={time}
      onChange={setTime}
    />
  );
}`;

  return (
    <DemoPage title="UiTime">
      <DemoPreview code={code} className="max-w-sm">
        <UiTime
          label={t.label}
          placeholder={t.placeholder}
          value={time}
          onChange={setTime}
        />
      </DemoPreview>
    </DemoPage>
  );
}
