import { Button } from "@/components/Button/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/context-menu";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import {
  Button,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from '@blencm/ui';

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Button variant="outline">Clic derecho aquí</Button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copiar</ContextMenuItem>
        <ContextMenuItem>Pegar</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Eliminar</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`;

export default function ContextMenuDemoPage() {
  return (
    <DemoPage
      title="ContextMenu"
      description="Menú contextual al hacer clic derecho."
    >
      <DemoPreview code={code}>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">Clic derecho aquí</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Copiar</ContextMenuItem>
            <ContextMenuItem>Pegar</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Eliminar</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoPreview>
    </DemoPage>
  );
}
