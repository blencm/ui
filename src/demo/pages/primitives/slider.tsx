import * as React from "react";

import { Slider } from "@/components/slider";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SliderDemoPage() {
  const [value, setValue] = React.useState([40]);
  const t = useCopy({
    en: { value: "Value" },
    es: { value: "Valor" },
  });

  const code = `import * as React from 'react';
import { Slider } from '@blencm/ui';

export function SliderDemo() {
  const [value, setValue] = React.useState([40]);

  return (
    <div className="max-w-md space-y-3">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <p className="text-sm text-muted-foreground">${t.value}: {value[0]}</p>
    </div>
  );
}`;

  return (
    <DemoPage title="Slider">
      <DemoPreview code={code} className="max-w-md space-y-3">
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <p className="text-muted-foreground text-sm">
          {t.value}: {value[0]}
        </p>
      </DemoPreview>
    </DemoPage>
  );
}
