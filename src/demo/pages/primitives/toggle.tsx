import { Toggle } from "@/components/toggle";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ToggleDemoPage() {
  const t = useCopy({
    en: { bold: "Bold", italic: "Italic" },
    es: { bold: "Negrita", italic: "Itálica" },
  });

  const code = `import { Toggle } from '@blencm/ui';

export function ToggleDemo() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="${t.bold}">B</Toggle>
      <Toggle variant="outline" aria-label="${t.italic}">
        I
      </Toggle>
    </div>
  );
}`;

  return (
    <DemoPage title="Toggle">
      <DemoPreview code={code} className="flex gap-2">
        <Toggle aria-label={t.bold}>B</Toggle>
        <Toggle variant="outline" aria-label={t.italic}>
          I
        </Toggle>
      </DemoPreview>
    </DemoPage>
  );
}
