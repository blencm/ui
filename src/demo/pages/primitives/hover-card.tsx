import { Button } from "@/components/Button/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/hover-card";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function HoverCardDemoPage() {
  const t = useCopy({
    en: {
      body: "React component library with Tailwind CSS and Radix primitives.",
    },
    es: {
      body: "Librería de componentes React con Tailwind CSS y primitivas Radix.",
    },
  });
  const code = `import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@blencm/ui';

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@blencm/ui</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        ${t.body}
      </HoverCardContent>
    </HoverCard>
  );
}`;

  return (
    <DemoPage title="HoverCard">
      <DemoPreview code={code}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@blencm/ui</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">{t.body}</HoverCardContent>
        </HoverCard>
      </DemoPreview>
    </DemoPage>
  );
}
