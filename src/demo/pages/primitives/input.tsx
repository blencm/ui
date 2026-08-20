import * as React from "react";

import { Input } from "@/components/input";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Input } from '@blencm/ui';

export function InputDemo() {
  return <Input placeholder="Nombre" />;
}`;

export default function InputDemoPage() {
  const [value, setValue] = React.useState("");

  return (
    <DemoPage title="Input" description="Campo de texto con variantes y tamaños del sistema de formularios.">
      <DemoPreview code={code} className="max-w-sm space-y-3">
        <Input
          placeholder="Nombre"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Input placeholder="Con error" invalid />
        <Input placeholder="Deshabilitado" disabled />
      </DemoPreview>
    </DemoPage>
  );
}
