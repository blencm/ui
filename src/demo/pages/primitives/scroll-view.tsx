import { ScrollView } from "@/components/scroll-view";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const fillCode = `import { ScrollView } from '@blencm/ui';

export function ScrollViewFillDemo() {
  return (
    <div className="flex h-72 flex-col rounded-xl border">
      <div className="border-b px-3 py-2 text-sm font-medium">Header</div>
      <ScrollView fit="fill" className="px-3 py-2">
        {Array.from({ length: 24 }).map((_, index) => (
          <p key={index} className="text-sm leading-7">
            Row {index + 1}
          </p>
        ))}
      </ScrollView>
    </div>
  );
}`;

const contentCode = `import { ScrollView } from '@blencm/ui';

export function ScrollViewContentDemo() {
  return (
    <ScrollView fit="content" maxHeight={220} className="rounded-xl border px-3 py-2">
      {Array.from({ length: 16 }).map((_, index) => (
        <p key={index} className="text-sm leading-7">
          Item {index + 1}
        </p>
      ))}
    </ScrollView>
  );
}`;

const bothCode = `import { ScrollView } from '@blencm/ui';

export function ScrollViewBothDemo() {
  return (
    <ScrollView
      fit="content"
      orientation="both"
      maxHeight={180}
      className="rounded-xl border"
    >
      <div className="w-[48rem] p-3">
        <p className="text-sm leading-7">
          Horizontal and vertical overflow in the same view.
        </p>
        {Array.from({ length: 12 }).map((_, index) => (
          <p key={index} className="text-sm leading-7 whitespace-nowrap">
            Wide row {index + 1} — the view fills the parent and scrolls only when needed.
          </p>
        ))}
      </div>
    </ScrollView>
  );
}`;

function Rows({ count, label }: { count: number; label: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <p key={index} className="text-sm leading-7">
          {label} {index + 1}
        </p>
      ))}
    </>
  );
}

export default function ScrollViewDemoPage() {
  return (
    <DemoPage
      title="ScrollView"
      description="Adaptive scroll container. Use fill inside flex layouts, content with a max height, or both axes."
    >
      <DemoPreview title="Fill remaining space" code={fillCode}>
        <div className="flex h-72 flex-col rounded-xl border">
          <div className="border-b px-3 py-2 text-sm font-medium">Header</div>
          <ScrollView fit="fill" className="px-3 py-2">
            <Rows count={24} label="Row" />
          </ScrollView>
        </div>
      </DemoPreview>

      <DemoPreview title="Content until max height" code={contentCode} className="pt-4">
        <ScrollView
          fit="content"
          maxHeight={220}
          className="rounded-xl border px-3 py-2"
        >
          <Rows count={16} label="Item" />
        </ScrollView>
      </DemoPreview>

      <DemoPreview title="Both axes" code={bothCode} className="pt-4">
        <ScrollView
          fit="content"
          orientation="both"
          maxHeight={180}
          className="rounded-xl border"
        >
          <div className="w-[48rem] p-3">
            <p className="text-sm leading-7">
              Horizontal and vertical overflow in the same view.
            </p>
            <Rows count={12} label="Wide row" />
          </div>
        </ScrollView>
      </DemoPreview>
    </DemoPage>
  );
}
