import { ScrollArea } from "@/components/scroll-area";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { ScrollArea } from '@blencm/ui';

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-full max-w-sm rounded-md border p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index} className="text-sm">
          Línea {index + 1}
        </p>
      ))}
    </ScrollArea>
  );
}`;

export default function ScrollAreaDemoPage() {
  return (
    <DemoPage title="ScrollArea" description="Área con scroll estilizado.">
      <DemoPreview code={code}>
        <ScrollArea className="h-40 w-full max-w-sm rounded-md border p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index} className="text-sm">
              Línea {index + 1}
            </p>
          ))}
        </ScrollArea>
      </DemoPreview>
    </DemoPage>
  );
}
