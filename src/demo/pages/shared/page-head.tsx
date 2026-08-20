import { PageHead } from "@/shared/page-head";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function PageHeadDemoPage() {
  const t = useCopy({
    en: {
      docTitle: "PageHead demo · @blencm/ui",
      hint: "Look at the browser tab title: this component changes it to",
    },
    es: {
      docTitle: "PageHead demo · @blencm/ui",
      hint: "Mira el título de la pestaña del navegador: este componente lo cambia a",
    },
  });

  const code = `import { PageHead } from '@blencm/ui';

export function PageHeadDemo() {
  return <PageHead title="${t.docTitle}" />;
}`;

  return (
    <DemoPage title="PageHead">
      <PageHead title={t.docTitle} />
      <DemoPreview code={code}>
        <p className="text-sm">
          {t.hint} <strong>{t.docTitle}</strong>.
        </p>
      </DemoPreview>
    </DemoPage>
  );
}
