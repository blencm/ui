import * as React from "react";

import { Input } from "@/components/input";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function InputDemoPage() {
  const [value, setValue] = React.useState("");
  const t = useCopy({
    en: { name: "Name", error: "With error", disabled: "Disabled" },
    es: { name: "Nombre", error: "Con error", disabled: "Deshabilitado" },
  });
  const code = `import { Input } from '@blencm/ui';

export function InputDemo() {
  return <Input placeholder="${t.name}" />;
}`;

  return (
    <DemoPage title="Input">
      <DemoPreview code={code} className="max-w-sm space-y-3">
        <Input
          placeholder={t.name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Input placeholder={t.error} invalid />
        <Input placeholder={t.disabled} disabled />
      </DemoPreview>
    </DemoPage>
  );
}
