import { Breadcrumbs } from "@/shared/breadcrumbs";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function BreadcrumbsDemoPage() {
  const t = useCopy({
    en: {
      home: "Home",
      projects: "Projects",
      website: "Website",
    },
    es: {
      home: "Inicio",
      projects: "Proyectos",
      website: "Sitio web",
    },
  });

  const items = [
    { title: t.home, link: "#" },
    { title: t.projects, link: "#" },
    { title: t.website },
  ];

  const code = `import { Breadcrumbs } from '@blencm/ui';

export function BreadcrumbsDemo() {
  return (
    <Breadcrumbs
      items={[
        { title: '${t.home}', link: '#' },
        { title: '${t.projects}', link: '#' },
        { title: '${t.website}' }
      ]}
    />
  );
}`;

  return (
    <DemoPage title="Breadcrumbs">
      <DemoPreview code={code}>
        <Breadcrumbs items={items} />
      </DemoPreview>
    </DemoPage>
  );
}
