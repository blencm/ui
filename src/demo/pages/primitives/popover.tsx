import { Button } from "@/components/Button/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function PopoverDemoPage() {
  const t = useCopy({
    en: {
      open: "Open popover",
      body: "Popover content. You can put a form or a short menu.",
    },
    es: {
      open: "Abrir popover",
      body: "Contenido del popover. Puedes poner un formulario o un menú corto.",
    },
  });

  const code = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@blencm/ui';

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">${t.open}</Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm">
        ${t.body}
      </PopoverContent>
    </Popover>
  );
}`;

  return (
    <DemoPage title="Popover">
      <DemoPreview code={code}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{t.open}</Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm">{t.body}</PopoverContent>
        </Popover>
      </DemoPreview>
    </DemoPage>
  );
}
