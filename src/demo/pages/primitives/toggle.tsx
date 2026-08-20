import { Toggle } from "@/components/toggle";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Toggle } from '@blencm/ui';

export function ToggleDemo() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Negrita">B</Toggle>
      <Toggle variant="outline" aria-label="Itálica">
        I
      </Toggle>
    </div>
  );
}`;

export default function ToggleDemoPage() {
  return (
    <DemoPage title="Toggle" description="Botón de estado pulsado / no pulsado.">
      <DemoPreview code={code} className="flex gap-2">
        <Toggle aria-label="Negrita">B</Toggle>
        <Toggle variant="outline" aria-label="Itálica">
          I
        </Toggle>
      </DemoPreview>
    </DemoPage>
  );
}
