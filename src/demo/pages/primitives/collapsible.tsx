import { Button } from "@/components/Button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function CollapsibleDemoPage() {
  const t = useCopy({
    en: {
      more: "Show more",
      extra: "Additional content revealed when you press the trigger.",
    },
    es: {
      more: "Ver más",
      extra: "Contenido adicional que se revela al pulsar el trigger.",
    },
  });
  const code = `import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@blencm/ui';

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">${t.more}</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
        ${t.extra}
      </CollapsibleContent>
    </Collapsible>
  );
}`;

  return (
    <DemoPage title="Collapsible">
      <DemoPreview code={code}>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline">{t.more}</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="text-muted-foreground mt-3 text-sm">
            {t.extra}
          </CollapsibleContent>
        </Collapsible>
      </DemoPreview>
    </DemoPage>
  );
}
