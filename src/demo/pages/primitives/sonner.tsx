import { toast } from "sonner";

import { Button } from "@/components/Button/button";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { toast } from 'sonner';
import { Button } from '@blencm/ui';

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast.success('Operación completada')}>Success</Button>
      <Button variant="outline" onClick={() => toast.error('Algo falló')}>
        Error
      </Button>
    </div>
  );
}

// Monta <ToasterSonner /> una vez en el layout de la app.`;

export default function SonnerDemoPage() {
  return (
    <DemoPage
      title="Sonner"
      description="Toasts de sonner. ToasterSonner está montado en el layout."
    >
      <DemoPreview code={code} className="flex flex-wrap gap-3">
        <Button onClick={() => toast.success("Operación completada")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.error("Algo falló")}>
          Error
        </Button>
      </DemoPreview>
    </DemoPage>
  );
}
