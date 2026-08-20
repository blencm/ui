import { PageHead } from "@/shared/page-head";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { PageHead } from '@blencm/ui';

export function PageHeadDemo() {
  return <PageHead title="PageHead demo · @blencm/ui" />;
}`;

export default function PageHeadDemoPage() {
  return (
    <DemoPage
      title="PageHead"
      description="Actualiza el título del documento con react-helmet-next."
    >
      <PageHead title="PageHead demo · @blencm/ui" />
      <DemoPreview code={code}>
        <p className="text-sm">
          Mira el título de la pestaña del navegador: este componente lo cambia
          a <strong>PageHead demo · @blencm/ui</strong>.
        </p>
      </DemoPreview>
    </DemoPage>
  );
}
