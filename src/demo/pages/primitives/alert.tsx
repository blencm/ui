import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AlertDemoPage() {
  const t = useCopy({
    en: {
      savedTitle: "Changes saved",
      savedBody: "Your profile was updated successfully.",
      errorTitle: "Could not save",
      errorBody: "Check the required fields and try again.",
    },
    es: {
      savedTitle: "Cambios guardados",
      savedBody: "Tu perfil se actualizó correctamente.",
      errorTitle: "No se pudo guardar",
      errorBody: "Revisa los campos requeridos e inténtalo de nuevo.",
    },
  });
  const code = `import { Alert, AlertDescription, AlertTitle } from '@blencm/ui';

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>${t.savedTitle}</AlertTitle>
      <AlertDescription>${t.savedBody}</AlertDescription>
    </Alert>
  );
}`;

  return (
    <DemoPage title="Alert">
      <DemoPreview code={code} className="space-y-4">
        <Alert>
          <AlertTitle>{t.savedTitle}</AlertTitle>
          <AlertDescription>{t.savedBody}</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>{t.errorTitle}</AlertTitle>
          <AlertDescription>{t.errorBody}</AlertDescription>
        </Alert>
      </DemoPreview>
    </DemoPage>
  );
}
