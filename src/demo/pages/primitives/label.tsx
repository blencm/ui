import { Label } from "@/components/Label/label";
import { Input } from "@/components/input";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Input, Label } from '@blencm/ui';

export function LabelDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="jane@example.com" />
    </div>
  );
}`;

export default function LabelDemoPage() {
  return (
    <DemoPage title="Label" description="Etiqueta accesible para controles de formulario.">
      <DemoPreview code={code} className="max-w-sm space-y-2">
        <Label htmlFor="email-demo">Email</Label>
        <Input id="email-demo" placeholder="jane@example.com" />
      </DemoPreview>
    </DemoPage>
  );
}
