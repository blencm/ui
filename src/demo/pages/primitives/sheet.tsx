import { Button } from "@/components/Button/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SheetDemoPage() {
  const t = useCopy({
    en: {
      open: "Open sheet",
      title: "Settings",
      description: "Change preferences from this panel.",
    },
    es: {
      open: "Abrir sheet",
      title: "Ajustes",
      description: "Cambia las preferencias desde este panel.",
    },
  });

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
        <Button variant="outline">${t.open}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>${t.title}</SheetTitle>
          <SheetDescription>${t.description}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`;

  return (
    <DemoPage title="Sheet">
      <DemoPreview code={code}>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">{t.open}</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{t.title}</SheetTitle>
              <SheetDescription>{t.description}</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </DemoPreview>
    </DemoPage>
  );
}
