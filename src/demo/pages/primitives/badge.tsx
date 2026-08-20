import { Badge } from "@/components/badge";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function BadgeDemoPage() {
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

  return (
    <DemoPage title="Badge">
      <DemoPreview code={code} className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </DemoPreview>
    </DemoPage>
  );
}
