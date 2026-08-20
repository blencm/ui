import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ToggleGroupDemoPage() {
  const t = useCopy({
    en: { left: "Left", center: "Center", right: "Right" },
    es: { left: "Izquierda", center: "Centro", right: "Derecha" },
  });

  const code = `import { ToggleGroup, ToggleGroupItem } from '@blencm/ui';

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">${t.left}</ToggleGroupItem>
      <ToggleGroupItem value="center">${t.center}</ToggleGroupItem>
      <ToggleGroupItem value="right">${t.right}</ToggleGroupItem>
    </ToggleGroup>
  );
}`;

  return (
    <DemoPage title="ToggleGroup">
      <DemoPreview code={code}>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left">{t.left}</ToggleGroupItem>
          <ToggleGroupItem value="center">{t.center}</ToggleGroupItem>
          <ToggleGroupItem value="right">{t.right}</ToggleGroupItem>
        </ToggleGroup>
      </DemoPreview>
    </DemoPage>
  );
}
