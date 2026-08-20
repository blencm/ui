import { Pencil, Trash2 } from "lucide-react";

import { IconButton } from "@/components/Button/icon-button";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Pencil, Trash2 } from 'lucide-react';
import { IconButton } from '@blencm/ui';

export function IconButtonDemo() {
  return (
    <div className="flex gap-2">
      <IconButton aria-label="Edit item" variant="outline">
        <Pencil />
      </IconButton>
      <IconButton aria-label="Delete item" variant="softDestructive">
        <Trash2 />
      </IconButton>
    </div>
  );
}`;

export default function IconButtonDemoPage() {
  return (
    <DemoPage
      title="IconButton"
      description="Botón cuadrado pensado para un único icono."
    >
      <DemoPreview code={code} className="flex flex-wrap gap-2">
        <IconButton aria-label="Editar" variant="outline">
          <Pencil />
        </IconButton>
        <IconButton aria-label="Eliminar" variant="softDestructive">
          <Trash2 />
        </IconButton>
        <IconButton aria-label="Editar" variant="soft">
          <Pencil />
        </IconButton>
        <IconButton aria-label="Editar" variant="ghost">
          <Pencil />
        </IconButton>
      </DemoPreview>
    </DemoPage>
  );
}
