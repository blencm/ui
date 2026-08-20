import * as React from "react";

import { Calendar } from "@/components/calendar";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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

export default function CalendarDemoPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <DemoPage title="Calendar" description="Calendario de react-day-picker con estilos de la librería.">
      <DemoPreview code={code} className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </DemoPreview>
    </DemoPage>
  );
}
