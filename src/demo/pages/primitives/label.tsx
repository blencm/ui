import { Label } from "@/components/Label/label";
import { Input } from "@/components/input";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function LabelDemoPage() {
  const t = useCopy({
    en: { email: "Email" },
    es: { email: "Email" },
  });
  const code = `import { Input, Label } from '@blencm/ui';

export function LabelDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">${t.email}</Label>
      <Input id="email" placeholder="jane@example.com" />
    </div>
  );
}`;

  return (
    <DemoPage title="Label">
      <DemoPreview code={code} className="max-w-sm space-y-2">
        <Label htmlFor="email-demo">{t.email}</Label>
        <Input id="email-demo" placeholder="jane@example.com" />
      </DemoPreview>
    </DemoPage>
  );
}
