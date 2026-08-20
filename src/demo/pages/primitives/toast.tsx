import { Button } from "@/components/Button/button";
import { useToast } from "@/components/use-toast";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ToastDemoPage() {
  const { toast } = useToast();
  const t = useCopy({
    en: {
      show: "Show toast",
      title: "Saved",
      description: "Changes were saved successfully.",
      comment: "Mount <Toaster /> once in the app layout.",
    },
    es: {
      show: "Mostrar toast",
      title: "Guardado",
      description: "Los cambios se guardaron correctamente.",
      comment: "Monta <Toaster /> una vez en el layout de la app.",
    },
  });

  const code = `import { Button, useToast } from '@blencm/ui';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: '${t.title}',
          description: '${t.description}'
        });
      }}
    >
      ${t.show}
    </Button>
  );
}

// ${t.comment}`;

  return (
    <DemoPage title="Toast">
      <DemoPreview code={code}>
        <Button
          onClick={() => {
            toast({
              title: t.title,
              description: t.description,
            });
          }}
        >
          {t.show}
        </Button>
      </DemoPreview>
    </DemoPage>
  );
}
