import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion/accordion";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@blencm/ui';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Qué incluye el paquete?</AccordionTrigger>
        <AccordionContent>
          Componentes accesibles, estilos con Tailwind CSS y helpers de formulario.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

export default function AccordionDemoPage() {
  return (
    <DemoPage
      title="Accordion"
      description="Secciones expandibles para mostrar u ocultar contenido."
    >
      <DemoPreview code={code}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Qué incluye el paquete?</AccordionTrigger>
            <AccordionContent>
              Componentes accesibles, estilos con Tailwind CSS y helpers de
              formulario reutilizables.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Cómo se instala?</AccordionTrigger>
            <AccordionContent>
              Usa pnpm add @blencm/ui e importa el CSS global una vez.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoPreview>
    </DemoPage>
  );
}
