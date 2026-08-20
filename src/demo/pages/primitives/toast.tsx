import { Button } from "@/components/Button/button";
import { useToast } from "@/components/use-toast";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Button, useToast } from '@blencm/ui';

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Guardado',
          description: 'Los cambios se guardaron correctamente.'
        });
      }}
    >
      Mostrar toast
    </Button>
  );
}

// Monta <Toaster /> una vez en el layout de la app.`;

export default function ToastDemoPage() {
  const { toast } = useToast();

  return (
    <DemoPage
      title="Toast"
      description="Notificaciones con useToast. El Toaster global está montado en el layout."
    >
      <DemoPreview code={code}>
        <Button
          onClick={() => {
            toast({
              title: "Guardado",
              description: "Los cambios se guardaron correctamente.",
            });
          }}
        >
          Mostrar toast
        </Button>
      </DemoPreview>
    </DemoPage>
  );
}
