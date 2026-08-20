import * as React from "react";

import { Calendar } from "@/components/calendar";
import { useDateFnsLocale } from "../../i18n/date-locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function CalendarDemoPage() {
  const dateLocale = useDateFnsLocale();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const code = `import * as React from 'react';
import { Calendar } from '@blencm/ui';

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}`;

  return (
    <DemoPage title="Calendar">
      <DemoPreview code={code} className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={dateLocale}
          className="rounded-md border"
        />
      </DemoPreview>
    </DemoPage>
  );
}
