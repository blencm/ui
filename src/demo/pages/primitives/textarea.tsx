import { Textarea } from "@/components/textarea";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function TextareaDemoPage() {
  const t = useCopy({
    en: { placeholder: "Write a note..." },
    es: { placeholder: "Escribe una nota..." },
  });

  const code = `import { Textarea } from '@blencm/ui';

export function TextareaDemo() {
  return <Textarea placeholder="${t.placeholder}" rows={4} />;
}`;

  return (
    <DemoPage title="Textarea">
      <DemoPreview code={code} className="max-w-md">
        <Textarea placeholder={t.placeholder} rows={4} />
      </DemoPreview>
    </DemoPage>
  );
}
