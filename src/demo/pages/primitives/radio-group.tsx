import { Label } from "@/components/Label/label";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Label, RadioGroup, RadioGroupItem } from '@blencm/ui';

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-xs">
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </label>
    </RadioGroup>
  );
}`;

export default function RadioGroupDemoPage() {
  return (
    <DemoPage title="RadioGroup" description="Grupo de opciones mutuamente excluyentes.">
      <DemoPreview code={code}>
        <RadioGroup defaultValue="comfortable" className="max-w-xs">
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </label>
        </RadioGroup>
      </DemoPreview>
    </DemoPage>
  );
}
