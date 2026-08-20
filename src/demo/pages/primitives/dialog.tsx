import { Button } from "@/components/Button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create note</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Use this area for a form, message, or confirmation content.
        </p>
      </DialogContent>
    </Dialog>
  );
}`;

export default function DialogDemoPage() {
  return (
    <DemoPage title="Dialog" description="Modal accesible basado en Radix Dialog.">
      <DemoPreview code={code}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Abrir dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear nota</DialogTitle>
              <DialogDescription>
                Usa esta área para un formulario, mensaje o confirmación.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </DemoPreview>
    </DemoPage>
  );
}
