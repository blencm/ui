import * as React from "react";

import { Checkbox } from "@/components/checkbox";
import { Label } from "@/components/Label/label";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function CheckboxDemoPage() {
  const [checked, setChecked] = React.useState(false);
  const t = useCopy({
    en: {
      terms: "I accept the terms",
      status: "Status",
      checked: "checked",
      unchecked: "unchecked",
    },
    es: {
      terms: "Acepto los términos",
      status: "Estado",
      checked: "marcado",
      unchecked: "sin marcar",
    },
  });
  const code = `import * as React from 'react';
import { Checkbox } from '@blencm/ui';

export function CheckboxDemo() {
  const [checked, setChecked] = React.useState(false);

  return (
    <label className="flex items-center gap-2 text-sm">
      <Checkbox
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      />
      ${t.terms}
    </label>
  );
}`;

  return (
    <DemoPage title="Checkbox">
      <DemoPreview code={code} className="flex flex-col gap-4">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          {t.terms}
        </label>
        <div className="flex items-center gap-3">
          <Checkbox defaultChecked size="sm" />
          <Checkbox defaultChecked size="md" variant="success" />
          <Checkbox defaultChecked size="lg" variant="destructive" />
        </div>
        <Label className="text-muted-foreground text-sm">
          {t.status}: {checked ? t.checked : t.unchecked}
        </Label>
      </DemoPreview>
    </DemoPage>
  );
}
