import * as React from "react";

import { UiTime } from "@/components/ui/ui-time";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiTime } from '@blencm/ui';

export function UiTimeDemo() {
  const [time, setTime] = React.useState<Date | undefined>();

  return (
    <UiTime
      label="Hora"
      placeholder="Seleccione una hora"
      value={time}
      onChange={setTime}
    />
  );
}`;

export default function UiTimeDemoPage() {
  const [time, setTime] = React.useState<Date | undefined>();

  return (
    <DemoPage
      title="UiTime"
      description="Selector de hora con label, independiente de React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <UiTime
          label="Hora"
          placeholder="Seleccione una hora"
          value={time}
          onChange={setTime}
        />
      </DemoPreview>
    </DemoPage>
  );
}
