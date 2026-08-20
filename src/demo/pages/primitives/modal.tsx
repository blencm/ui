import * as React from "react";

import { Button } from "@/components/Button/button";
import { Modal } from "@/components/modal";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { Button, Modal } from '@blencm/ui';

export function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        title="Detalles"
        description="Un modal controlado con isOpen / onClose."
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p className="text-sm text-muted-foreground">Contenido del modal.</p>
      </Modal>
    </>
  );
}`;

export default function ModalDemoPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <DemoPage
      title="Modal"
      description="Wrapper controlado de Dialog con título y descripción."
    >
      <DemoPreview code={code}>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal
          title="Detalles"
          description="Un modal controlado con isOpen / onClose."
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <p className="text-muted-foreground text-sm">
            Contenido del modal.
          </p>
        </Modal>
      </DemoPreview>
    </DemoPage>
  );
}
