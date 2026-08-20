import * as React from "react";

import { UiDate } from "@/components/ui/ui-date";
import { useCopy } from "../../i18n/copy";
import { useDateFnsLocale } from "../../i18n/date-locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function UiDateDemoPage() {
  const dateLocale = useDateFnsLocale();
  const t = useCopy({
    en: {
      label: "Date",
      placeholder: "Select a date",
    },
    es: {
      label: "Fecha",
      placeholder: "Seleccione una fecha",
    },
  });

  const [date, setDate] = React.useState<Date | undefined>();

  const code = `import * as React from 'react';
import { UiDate } from '@blencm/ui';

export function UiDateDemo() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <UiDate
      label="${t.label}"
      placeholder="${t.placeholder}"
      value={date}
      onChange={setDate}
      requiredLabel
    />
  );
}`;

  return (
    <DemoPage title="UiDate">
      <DemoPreview code={code} className="max-w-sm">
        <UiDate
          label={t.label}
          placeholder={t.placeholder}
          locale={dateLocale}
          value={date}
          onChange={setDate}
          requiredLabel
        />
      </DemoPreview>
    </DemoPage>
  );
}
