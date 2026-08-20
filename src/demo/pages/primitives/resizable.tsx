import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ResizableDemoPage() {
  const t = useCopy({
    en: { left: "Left", right: "Right" },
    es: { left: "Izquierda", right: "Derecha" },
  });

  const code = `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@blencm/ui';

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-48 rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm">${t.left}</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm">${t.right}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`;

  return (
    <DemoPage title="Resizable">
      <DemoPreview code={code} className="h-48 p-0">
        <ResizablePanelGroup direction="horizontal" className="min-h-48 rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">
              {t.left}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">
              {t.right}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoPreview>
    </DemoPage>
  );
}
