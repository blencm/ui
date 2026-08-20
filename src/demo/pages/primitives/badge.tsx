import { Badge } from "@/components/badge";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Badge } from '@blencm/ui';

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`;

export default function BadgeDemoPage() {
  return (
    <DemoPage title="Badge" description="Etiquetas compactas para estado o categoría.">
      <DemoPreview code={code} className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </DemoPreview>
    </DemoPage>
  );
}
