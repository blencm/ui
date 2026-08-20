import * as React from "react";

import { UiDate } from "@/components/ui/ui-date";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { UiDate } from '@blencm/ui';

export function UiDateDemo() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <UiDate
      label="Fecha"
      placeholder="Seleccione una fecha"
      value={date}
      onChange={setDate}
      requiredLabel
    />
  );
}`;

export default function UiDateDemoPage() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <DemoPage
      title="UiDate"
      description="Selector de fecha con label, independiente de React Hook Form."
    >
      <DemoPreview code={code} className="max-w-sm">
        <UiDate
          label="Fecha"
          placeholder="Seleccione una fecha"
          value={date}
          onChange={setDate}
          requiredLabel
        />
      </DemoPreview>
    </DemoPage>
  );
}
