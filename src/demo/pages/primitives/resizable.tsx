import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@blencm/ui';

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-48 rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm">Izquierda</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-sm">Derecha</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`;

export default function ResizableDemoPage() {
  return (
    <DemoPage
      title="Resizable"
      description="Paneles que el usuario puede redimensionar."
    >
      <DemoPreview code={code} className="h-48 p-0">
        <ResizablePanelGroup direction="horizontal" className="min-h-48 rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">
              Izquierda
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm">
              Derecha
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoPreview>
    </DemoPage>
  );
}
