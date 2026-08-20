import * as React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/Button/button";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AlertDialogDemoPage() {
  const [confirmed, setConfirmed] = React.useState(false);
  const t = useCopy({
    en: {
      delete: "Delete",
      title: "Delete this item?",
      description: "This action cannot be undone.",
      cancel: "Cancel",
      confirm: "Confirm",
      confirmed: "Confirmed",
    },
    es: {
      delete: "Eliminar",
      title: "Eliminar este elemento?",
      description: "Esta acción no se puede deshacer.",
      cancel: "Cancelar",
      confirm: "Confirmar",
      confirmed: "Confirmado",
    },
  });
  const code = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button
} from '@blencm/ui';

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">${t.delete}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>${t.title}</AlertDialogTitle>
          <AlertDialogDescription>
            ${t.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>${t.cancel}</AlertDialogCancel>
          <AlertDialogAction>${t.confirm}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;

  return (
    <DemoPage title="AlertDialog">
      <DemoPreview code={code} className="flex flex-wrap items-center gap-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">{t.delete}</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t.title}</AlertDialogTitle>
              <AlertDialogDescription>{t.description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t.cancel}</AlertDialogCancel>
              <AlertDialogAction onClick={() => setConfirmed(true)}>
                {t.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {confirmed ? (
          <span className="text-muted-foreground text-sm">{t.confirmed}</span>
        ) : null}
      </DemoPreview>
    </DemoPage>
  );
}
