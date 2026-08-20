import { Heading } from "@/shared/heading";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Heading } from '@blencm/ui';

export function HeadingDemo() {
  return (
    <Heading
      title="Proyectos"
      description="Gestiona los proyectos activos del workspace."
    />
  );
}`;

export default function HeadingDemoPage() {
  return (
    <DemoPage
      title="Heading"
      description="Título de página con descripción opcional."
    >
      <DemoPreview code={code}>
        <Heading
          title="Proyectos"
          description="Gestiona los proyectos activos del workspace."
        />
      </DemoPreview>
    </DemoPage>
  );
}
