import * as React from "react";

import { AlertModal } from "@/shared/alert-modal";
import { Button } from "@/components/Button/button";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AlertModalDemoPage() {
  const t = useCopy({
    en: {
      deleteItem: "Delete item",
      title: "Are you sure?",
      description: "Are you sure you want to continue?",
      cancel: "Cancel",
      confirm: "Confirm",
    },
    es: {
      deleteItem: "Eliminar elemento",
      title: "¿Estás seguro?",
      description: "¿Seguro que quieres continuar?",
      cancel: "Cancelar",
      confirm: "Confirmar",
    },
  });

  const [open, setOpen] = React.useState(false);

  const code = `import * as React from 'react';
import { AlertModal, Button } from '@blencm/ui';

export function AlertModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        ${t.deleteItem}
      </Button>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        loading={false}
        title="${t.title}"
        description="${t.description}"
        cancelText="${t.cancel}"
        confirmText="${t.confirm}"
      />
    </>
  );
}`;

  return (
    <DemoPage title="AlertModal">
      <DemoPreview code={code}>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          {t.deleteItem}
        </Button>
        <AlertModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          loading={false}
          title={t.title}
          description={t.description}
          cancelText={t.cancel}
          confirmText={t.confirm}
        />
      </DemoPreview>
    </DemoPage>
  );
}
