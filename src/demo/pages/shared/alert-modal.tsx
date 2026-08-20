import * as React from "react";

import { AlertModal } from "@/shared/alert-modal";
import { Button } from "@/components/Button/button";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { AlertModal, Button } from '@blencm/ui';

export function AlertModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete item
      </Button>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        loading={false}
      />
    </>
  );
}`;

export default function AlertModalDemoPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <DemoPage
      title="AlertModal"
      description="Modal de confirmación listo para flujos de eliminar / confirmar."
    >
      <DemoPreview code={code}>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete item
        </Button>
        <AlertModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          loading={false}
        />
      </DemoPreview>
    </DemoPage>
  );
}
