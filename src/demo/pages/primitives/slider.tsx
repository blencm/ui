import * as React from "react";

import { Slider } from "@/components/slider";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { Slider } from '@blencm/ui';

export function SliderDemo() {
  const [value, setValue] = React.useState([40]);

  return (
    <div className="max-w-md space-y-3">
      <Slider value={value} onValueChange={setValue} max={100} step={1} />
      <p className="text-sm text-muted-foreground">Valor: {value[0]}</p>
    </div>
  );
}`;

export default function SliderDemoPage() {
  const [value, setValue] = React.useState([40]);

  return (
    <DemoPage title="Slider" description="Control deslizante de valor.">
      <DemoPreview code={code} className="max-w-md space-y-3">
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <p className="text-muted-foreground text-sm">Valor: {value[0]}</p>
      </DemoPreview>
    </DemoPage>
  );
}
