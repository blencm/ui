import { Button } from "@/components/Button/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@blencm/ui';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Abrir sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ajustes</SheetTitle>
          <SheetDescription>Cambia las preferencias desde este panel.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`;

export default function SheetDemoPage() {
  return (
    <DemoPage title="Sheet" description="Panel lateral sobre el contenido.">
      <DemoPreview code={code}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Abrir sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Ajustes</SheetTitle>
              <SheetDescription>
                Cambia las preferencias desde este panel.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </DemoPreview>
    </DemoPage>
  );
}
