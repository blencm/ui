import { Button } from "@/components/Button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@blencm/ui';

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Ver más</Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
        Contenido adicional.
      </CollapsibleContent>
    </Collapsible>
  );
}`;

export default function CollapsibleDemoPage() {
  return (
    <DemoPage title="Collapsible" description="Muestra u oculta un bloque de contenido.">
      <DemoPreview code={code}>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline">Ver más</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="text-muted-foreground mt-3 text-sm">
            Contenido adicional que se revela al pulsar el trigger.
          </CollapsibleContent>
        </Collapsible>
      </DemoPreview>
    </DemoPage>
  );
}
