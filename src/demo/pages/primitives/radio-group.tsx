import { Label } from "@/components/Label/label";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function RadioGroupDemoPage() {
  const t = useCopy({
    en: {
      default: "Default",
      comfortable: "Comfortable",
      compact: "Compact",
    },
    es: {
      default: "Predeterminado",
      comfortable: "Cómodo",
      compact: "Compacto",
    },
  });

  const code = `import { Label, RadioGroup, RadioGroupItem } from '@blencm/ui';

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-xs">
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">${t.default}</Label>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">${t.comfortable}</Label>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">${t.compact}</Label>
      </label>
    </RadioGroup>
  );
}`;

  return (
    <DemoPage title="RadioGroup">
      <DemoPreview code={code}>
        <RadioGroup defaultValue="comfortable" className="max-w-xs">
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">{t.default}</Label>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">{t.comfortable}</Label>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">{t.compact}</Label>
          </label>
        </RadioGroup>
      </DemoPreview>
    </DemoPage>
  );
}
