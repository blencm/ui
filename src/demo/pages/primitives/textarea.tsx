import { Textarea } from "@/components/textarea";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Textarea } from '@blencm/ui';

export function TextareaDemo() {
  return <Textarea placeholder="Escribe una nota..." rows={4} />;
}`;

export default function TextareaDemoPage() {
  return (
    <DemoPage title="Textarea" description="Campo de texto multilínea.">
      <DemoPreview code={code} className="max-w-md">
        <Textarea placeholder="Escribe una nota..." rows={4} />
      </DemoPreview>
    </DemoPage>
  );
}
