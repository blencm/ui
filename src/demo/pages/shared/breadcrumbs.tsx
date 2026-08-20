import { Breadcrumbs } from "@/shared/breadcrumbs";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Breadcrumbs } from '@blencm/ui';

export function BreadcrumbsDemo() {
  return (
    <Breadcrumbs
      items={[
        { title: 'Inicio', link: '#' },
        { title: 'Proyectos', link: '#' },
        { title: 'Website' }
      ]}
    />
  );
}`;

export default function BreadcrumbsDemoPage() {
  return (
    <DemoPage
      title="Breadcrumbs"
      description="Helper de breadcrumbs a partir de una lista de items."
    >
      <DemoPreview code={code}>
        <Breadcrumbs
          items={[
            { title: "Inicio", link: "#" },
            { title: "Proyectos", link: "#" },
            { title: "Website" },
          ]}
        />
      </DemoPreview>
    </DemoPage>
  );
}
