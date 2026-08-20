import { Button } from "@/components/Button/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Button, Popover, PopoverContent, PopoverTrigger } from '@blencm/ui';

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir popover</Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm">
        Contenido del popover. Puedes poner un formulario o un menú corto.
      </PopoverContent>
    </Popover>
  );
}`;

export default function PopoverDemoPage() {
  return (
    <DemoPage title="Popover" description="Panel flotante anclado a un botón.">
      <DemoPreview code={code}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Abrir popover</Button>
          </PopoverTrigger>
          <PopoverContent className="text-sm">
            Contenido del popover. Puedes poner un formulario o un menú corto.
          </PopoverContent>
        </Popover>
      </DemoPreview>
    </DemoPage>
  );
}
