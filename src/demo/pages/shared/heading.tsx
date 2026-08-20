import { Heading } from "@/shared/heading";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function HeadingDemoPage() {
  const t = useCopy({
    en: {
      title: "Projects",
      description: "Manage the active projects in the workspace.",
    },
    es: {
      title: "Proyectos",
      description: "Gestiona los proyectos activos del workspace.",
    },
  });

  const code = `import { Heading } from '@blencm/ui';

export function HeadingDemo() {
  return (
    <Heading
      title="${t.title}"
      description="${t.description}"
    />
  );
}`;

  return (
    <DemoPage title="Heading">
      <DemoPreview code={code}>
        <Heading title={t.title} description={t.description} />
      </DemoPreview>
    </DemoPage>
  );
}
