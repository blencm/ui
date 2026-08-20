import { Button } from "@/components/Button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function DialogDemoPage() {
  const t = useCopy({
    en: {
      open: "Open dialog",
      title: "Create note",
      body: "Use this area for a form, message, or confirmation.",
    },
    es: {
      open: "Abrir dialog",
      title: "Crear nota",
      body: "Usa esta área para un formulario, mensaje o confirmación.",
    },
  });
  const code = `import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@blencm/ui';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>${t.open}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>${t.title}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          ${t.body}
        </p>
      </DialogContent>
    </Dialog>
  );
}`;

  return (
    <DemoPage title="Dialog">
      <DemoPreview code={code}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>{t.open}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.title}</DialogTitle>
              <DialogDescription>{t.body}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DemoPreview>
    </DemoPage>
  );
}
