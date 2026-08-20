import { toast } from "sonner";

import { Button } from "@/components/Button/button";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SonnerDemoPage() {
  const t = useCopy({
    en: {
      success: "Success",
      error: "Error",
      successMessage: "Operation completed",
      errorMessage: "Something went wrong",
      comment: "Mount <ToasterSonner /> once in the app layout.",
    },
    es: {
      success: "Success",
      error: "Error",
      successMessage: "Operación completada",
      errorMessage: "Algo falló",
      comment: "Monta <ToasterSonner /> una vez en el layout de la app.",
    },
  });

  const code = `import { toast } from 'sonner';
import { Button } from '@blencm/ui';

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast.success('${t.successMessage}')}>${t.success}</Button>
      <Button variant="outline" onClick={() => toast.error('${t.errorMessage}')}>
        ${t.error}
      </Button>
    </div>
  );
}

// ${t.comment}`;

  return (
    <DemoPage title="Sonner">
      <DemoPreview code={code} className="flex flex-wrap gap-3">
        <Button onClick={() => toast.success(t.successMessage)}>
          {t.success}
        </Button>
        <Button variant="outline" onClick={() => toast.error(t.errorMessage)}>
          {t.error}
        </Button>
      </DemoPreview>
    </DemoPage>
  );
}
