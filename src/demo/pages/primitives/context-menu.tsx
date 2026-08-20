import { Button } from "@/components/Button/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/context-menu";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ContextMenuDemoPage() {
  const t = useCopy({
    en: {
      trigger: "Right-click here",
      copy: "Copy",
      paste: "Paste",
      delete: "Delete",
    },
    es: {
      trigger: "Clic derecho aquí",
      copy: "Copiar",
      paste: "Pegar",
      delete: "Eliminar",
    },
  });
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
        <Button variant="outline">${t.trigger}</Button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>${t.copy}</ContextMenuItem>
        <ContextMenuItem>${t.paste}</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>${t.delete}</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`;

  return (
    <DemoPage title="ContextMenu">
      <DemoPreview code={code}>
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <Button variant="outline">{t.trigger}</Button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>{t.copy}</ContextMenuItem>
            <ContextMenuItem>{t.paste}</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>{t.delete}</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </DemoPreview>
    </DemoPage>
  );
}
