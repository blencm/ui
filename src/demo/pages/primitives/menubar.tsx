import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/menubar";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function MenubarDemoPage() {
  const t = useCopy({
    en: {
      file: "File",
      new: "New",
      open: "Open",
      exit: "Exit",
      edit: "Edit",
      undo: "Undo",
      redo: "Redo",
    },
    es: {
      file: "Archivo",
      new: "Nuevo",
      open: "Abrir",
      exit: "Salir",
      edit: "Editar",
      undo: "Deshacer",
      redo: "Rehacer",
    },
  });

  const code = `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@blencm/ui';

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>${t.file}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>${t.new}</MenubarItem>
          <MenubarItem>${t.open}</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>${t.exit}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>${t.edit}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>${t.undo}</MenubarItem>
          <MenubarItem>${t.redo}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

  return (
    <DemoPage title="Menubar">
      <DemoPreview code={code}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{t.file}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{t.new}</MenubarItem>
              <MenubarItem>{t.open}</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>{t.exit}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{t.edit}</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>{t.undo}</MenubarItem>
              <MenubarItem>{t.redo}</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoPreview>
    </DemoPage>
  );
}
