import * as React from "react";

import { Label } from "@/components/Label/label";
import { Switch } from "@/components/switch";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { Label, Switch } from '@blencm/ui';

export function SwitchDemo() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      <Switch id="airplane" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="airplane">Modo avión {enabled ? 'on' : 'off'}</Label>
    </div>
  );
}`;

export default function SwitchDemoPage() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <DemoPage title="Switch" description="Interruptor on/off.">
      <DemoPreview code={code} className="flex items-center gap-3">
        <Switch
          id="airplane"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        <Label htmlFor="airplane">Modo avión {enabled ? "on" : "off"}</Label>
      </DemoPreview>
    </DemoPage>
  );
}
