import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion/accordion";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AccordionDemoPage() {
  const t = useCopy({
    en: {
      trigger1: "What's included in the package?",
      content1:
        "Accessible components, Tailwind CSS styles, and reusable form helpers.",
      trigger2: "How do I install it?",
      content2: "Run pnpm add @blencm/ui and import the global CSS once.",
    },
    es: {
      trigger1: "Qué incluye el paquete?",
      content1:
        "Componentes accesibles, estilos con Tailwind CSS y helpers de formulario reutilizables.",
      trigger2: "Cómo se instala?",
      content2: "Usa pnpm add @blencm/ui e importa el CSS global una vez.",
    },
  });
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
        <AccordionTrigger>${t.trigger1}</AccordionTrigger>
        <AccordionContent>
          ${t.content1}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`;

  return (
    <DemoPage title="Accordion">
      <DemoPreview code={code}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t.trigger1}</AccordionTrigger>
            <AccordionContent>{t.content1}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t.trigger2}</AccordionTrigger>
            <AccordionContent>{t.content2}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoPreview>
    </DemoPage>
  );
}
