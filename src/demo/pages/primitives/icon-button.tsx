import { Pencil, Trash2 } from "lucide-react";

import { IconButton } from "@/components/Button/icon-button";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function IconButtonDemoPage() {
  const t = useCopy({
    en: { edit: "Edit", delete: "Delete" },
    es: { edit: "Editar", delete: "Eliminar" },
  });
  const code = `import { Pencil, Trash2 } from 'lucide-react';
import { IconButton } from '@blencm/ui';

export function IconButtonDemo() {
  return (
    <div className="flex gap-2">
      <IconButton aria-label="${t.edit}" variant="outline">
        <Pencil />
      </IconButton>
      <IconButton aria-label="${t.delete}" variant="softDestructive">
        <Trash2 />
      </IconButton>
    </div>
  );
}`;

  return (
    <DemoPage title="IconButton">
      <DemoPreview code={code} className="flex flex-wrap gap-2">
        <IconButton aria-label={t.edit} variant="outline">
          <Pencil />
        </IconButton>
        <IconButton aria-label={t.delete} variant="softDestructive">
          <Trash2 />
        </IconButton>
        <IconButton aria-label={t.edit} variant="soft">
          <Pencil />
        </IconButton>
        <IconButton aria-label={t.edit} variant="ghost">
          <Pencil />
        </IconButton>
      </DemoPreview>
    </DemoPage>
  );
}
