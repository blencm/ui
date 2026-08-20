import { ScrollArea } from "@/components/scroll-area";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ScrollAreaDemoPage() {
  const t = useCopy({
    en: { line: "Line" },
    es: { line: "Línea" },
  });

  const code = `import { ScrollArea } from '@blencm/ui';

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-full max-w-sm rounded-md border p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <p key={index} className="text-sm">
          ${t.line} {index + 1}
        </p>
      ))}
    </ScrollArea>
  );
}`;

  return (
    <DemoPage title="ScrollArea">
      <DemoPreview code={code}>
        <ScrollArea className="h-40 w-full max-w-sm rounded-md border p-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index} className="text-sm">
              {t.line} {index + 1}
            </p>
          ))}
        </ScrollArea>
      </DemoPreview>
    </DemoPage>
  );
}
