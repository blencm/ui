import { Button } from "@/components/Button/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/drawer";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function DrawerDemoPage() {
  const t = useCopy({
    en: {
      open: "Open drawer",
      title: "Filters",
      description: "Adjust the options and confirm.",
      done: "Done",
    },
    es: {
      open: "Abrir drawer",
      title: "Filtros",
      description: "Ajusta las opciones y confirma.",
      done: "Listo",
    },
  });
  const code = `import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@blencm/ui';

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">${t.open}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>${t.title}</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>${t.done}</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`;

  return (
    <DemoPage title="Drawer">
      <DemoPreview code={code}>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">{t.open}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t.title}</DrawerTitle>
              <DrawerDescription>{t.description}</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>{t.done}</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DemoPreview>
    </DemoPage>
  );
}
