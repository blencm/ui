import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Alert, AlertDescription, AlertTitle } from '@blencm/ui';

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Cambios guardados</AlertTitle>
      <AlertDescription>Tu perfil se actualizó correctamente.</AlertDescription>
    </Alert>
  );
}`;

export default function AlertDemoPage() {
  return (
    <DemoPage
      title="Alert"
      description="Mensajes inline para información o errores."
    >
      <DemoPreview code={code} className="space-y-4">
        <Alert>
          <AlertTitle>Cambios guardados</AlertTitle>
          <AlertDescription>
            Tu perfil se actualizó correctamente.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>No se pudo guardar</AlertTitle>
          <AlertDescription>
            Revisa los campos requeridos e inténtalo de nuevo.
          </AlertDescription>
        </Alert>
      </DemoPreview>
    </DemoPage>
  );
}
