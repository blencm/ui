import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/menubar";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Nuevo</MenubarItem>
          <MenubarItem>Abrir</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Salir</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Deshacer</MenubarItem>
          <MenubarItem>Rehacer</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

export default function MenubarDemoPage() {
  return (
    <DemoPage title="Menubar" description="Barra de menús de aplicación.">
      <DemoPreview code={code}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Archivo</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Nuevo</MenubarItem>
              <MenubarItem>Abrir</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Salir</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Editar</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Deshacer</MenubarItem>
              <MenubarItem>Rehacer</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </DemoPreview>
    </DemoPage>
  );
}
