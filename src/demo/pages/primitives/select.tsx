import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SelectDemoPage() {
  const [value, setValue] = React.useState("");
  const t = useCopy({
    en: {
      placeholder: "Choose a theme",
      system: "System",
    },
    es: {
      placeholder: "Elige un tema",
      system: "Sistema",
    },
  });

  const code = `import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@blencm/ui';

export function SelectDemo() {
  const [value, setValue] = React.useState('');

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="${t.placeholder}" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">${t.system}</SelectItem>
      </SelectContent>
    </Select>
  );
}`;

  return (
    <DemoPage title="Select">
      <DemoPreview code={code} className="max-w-xs">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder={t.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">{t.system}</SelectItem>
          </SelectContent>
        </Select>
      </DemoPreview>
    </DemoPage>
  );
}
