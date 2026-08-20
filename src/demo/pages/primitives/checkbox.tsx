import * as React from "react";

import { Checkbox } from "@/components/checkbox";
import { Label } from "@/components/Label/label";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
      Acepto los términos
    </label>
  );
}`;

export default function CheckboxDemoPage() {
  const [checked, setChecked] = React.useState(false);

  return (
    <DemoPage title="Checkbox" description="Casilla de verificación con tamaños y variantes.">
      <DemoPreview code={code} className="flex flex-col gap-4">
        <label className="flex items-center gap-2 text-sm">
          <Checkbox
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          Acepto los términos
        </label>
        <div className="flex items-center gap-3">
          <Checkbox defaultChecked size="sm" />
          <Checkbox defaultChecked size="md" variant="success" />
          <Checkbox defaultChecked size="lg" variant="destructive" />
        </div>
        <Label className="text-muted-foreground text-sm">
          Estado: {checked ? "marcado" : "sin marcar"}
        </Label>
      </DemoPreview>
    </DemoPage>
  );
}
