import * as React from "react";

import { Button } from "@/components/Button/button";
import { Modal } from "@/components/modal";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ModalDemoPage() {
  const [open, setOpen] = React.useState(false);
  const t = useCopy({
    en: {
      open: "Open modal",
      title: "Details",
      description: "A controlled modal with isOpen / onClose.",
      body: "Modal content.",
    },
    es: {
      open: "Abrir modal",
      title: "Detalles",
      description: "Un modal controlado con isOpen / onClose.",
      body: "Contenido del modal.",
    },
  });

  const code = `import * as React from 'react';
import { Button, Modal } from '@blencm/ui';

export function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>${t.open}</Button>
      <Modal
        title="${t.title}"
        description="${t.description}"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p className="text-sm text-muted-foreground">${t.body}</p>
      </Modal>
    </>
  );
}`;

  return (
    <DemoPage title="Modal">
      <DemoPreview code={code}>
        <Button onClick={() => setOpen(true)}>{t.open}</Button>
        <Modal
          title={t.title}
          description={t.description}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <p className="text-muted-foreground text-sm">{t.body}</p>
        </Modal>
      </DemoPreview>
    </DemoPage>
  );
}
