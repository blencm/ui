import * as React from "react";

import { Label } from "@/components/Label/label";
import { Switch } from "@/components/switch";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SwitchDemoPage() {
  const [enabled, setEnabled] = React.useState(false);
  const t = useCopy({
    en: { airplane: "Airplane mode" },
    es: { airplane: "Modo avión" },
  });

  const code = `import * as React from 'react';
import { Label, Switch } from '@blencm/ui';

export function SwitchDemo() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="airplane">${t.airplane} {enabled ? 'on' : 'off'}</Label>
    </div>
  );
}`;

  return (
    <DemoPage title="Switch">
      <DemoPreview code={code} className="flex items-center gap-3">
        <Switch
          id="airplane"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="airplane">
          {t.airplane} {enabled ? "on" : "off"}
        </Label>
      </DemoPreview>
    </DemoPage>
  );
}
