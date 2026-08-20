import { Separator } from "@/components/separator";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Separator } from '@blencm/ui';

export function SeparatorDemo() {
  return (
    <div className="max-w-sm space-y-4">
      <div>
        <p className="text-sm font-medium">@blencm/ui</p>
        <p className="text-sm text-muted-foreground">Librería de componentes</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}`;

export default function SeparatorDemoPage() {
  return (
    <DemoPage title="Separator" description="Línea divisoria horizontal o vertical.">
      <DemoPreview code={code} className="max-w-sm space-y-4">
        <div>
          <p className="text-sm font-medium">@blencm/ui</p>
          <p className="text-muted-foreground text-sm">Librería de componentes</p>
        </div>
        <Separator />
        <div className="flex h-5 items-center gap-4 text-sm">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </DemoPreview>
    </DemoPage>
  );
}
