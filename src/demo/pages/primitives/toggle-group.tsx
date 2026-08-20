import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { ToggleGroup, ToggleGroupItem } from '@blencm/ui';

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Izquierda</ToggleGroupItem>
      <ToggleGroupItem value="center">Centro</ToggleGroupItem>
      <ToggleGroupItem value="right">Derecha</ToggleGroupItem>
    </ToggleGroup>
  );
}`;

export default function ToggleGroupDemoPage() {
  return (
    <DemoPage title="ToggleGroup" description="Grupo de toggles con un valor compartido.">
      <DemoPreview code={code}>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left">Izquierda</ToggleGroupItem>
          <ToggleGroupItem value="center">Centro</ToggleGroupItem>
          <ToggleGroupItem value="right">Derecha</ToggleGroupItem>
        </ToggleGroup>
      </DemoPreview>
    </DemoPage>
  );
}
