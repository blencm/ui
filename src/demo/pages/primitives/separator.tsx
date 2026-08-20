import { Separator } from "@/components/separator";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SeparatorDemoPage() {
  const t = useCopy({
    en: {
      subtitle: "Component library",
      blog: "Blog",
      docs: "Docs",
      source: "Source",
    },
    es: {
      subtitle: "Librería de componentes",
      blog: "Blog",
      docs: "Docs",
      source: "Source",
    },
  });

  const code = `import { Separator } from '@blencm/ui';

export function SeparatorDemo() {
  return (
    <div className="max-w-sm space-y-4">
      <div>
        <p className="text-sm font-medium">@blencm/ui</p>
        <p className="text-sm text-muted-foreground">${t.subtitle}</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>${t.blog}</span>
        <Separator orientation="vertical" />
        <span>${t.docs}</span>
        <Separator orientation="vertical" />
        <span>${t.source}</span>
      </div>
    </div>
  );
}`;

  return (
    <DemoPage title="Separator">
      <DemoPreview code={code} className="max-w-sm space-y-4">
        <div>
          <p className="text-sm font-medium">@blencm/ui</p>
          <p className="text-muted-foreground text-sm">{t.subtitle}</p>
        </div>
        <Separator />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>{t.blog}</span>
          <Separator orientation="vertical" />
          <span>{t.docs}</span>
          <Separator orientation="vertical" />
          <span>{t.source}</span>
        </div>
      </DemoPreview>
    </DemoPage>
  );
}
