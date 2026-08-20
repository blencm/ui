import { Button } from "@/components/Button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/hover-card";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@blencm/ui';

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@blencm/ui</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        Librería de componentes React con Tailwind CSS.
      </HoverCardContent>
    </HoverCard>
  );
}`;

export default function HoverCardDemoPage() {
  return (
    <DemoPage title="HoverCard" description="Tarjeta que aparece al pasar el cursor.">
      <DemoPreview code={code}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@blencm/ui</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            Librería de componentes React con Tailwind CSS y primitivas Radix.
          </HoverCardContent>
        </HoverCard>
      </DemoPreview>
    </DemoPage>
  );
}
