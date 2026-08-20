import { ScrollView } from "@/components/scroll-view";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
  const t = useCopy({
    en: {
      fillTitle: "Fill remaining space",
      contentTitle: "Content until max height",
      bothTitle: "Both axes",
      header: "Header",
      row: "Row",
      item: "Item",
      overflow: "Horizontal and vertical overflow in the same view.",
      wideRow: "Wide row",
      wideRowHint:
        "the view fills the parent and scrolls only when needed.",
    },
    es: {
      fillTitle: "Rellenar el espacio restante",
      contentTitle: "Contenido hasta la altura máxima",
      bothTitle: "Ambos ejes",
      header: "Encabezado",
      row: "Fila",
      item: "Elemento",
      overflow: "Desbordamiento horizontal y vertical en la misma vista.",
      wideRow: "Fila ancha",
      wideRowHint: "la vista llena el padre y solo hace scroll cuando hace falta.",
    },
  });

  const fillCode = `import { ScrollView } from '@blencm/ui';

export function ScrollViewFillDemo() {
  return (
    <div className="flex h-72 flex-col rounded-xl border">
      <div className="border-b px-3 py-2 text-sm font-medium">${t.header}</div>
      <ScrollView fit="fill" className="px-3 py-2">
        {Array.from({ length: 24 }).map((_, index) => (
          <p key={index} className="text-sm leading-7">
            ${t.row} {index + 1}
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
          ${t.item} {index + 1}
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
          ${t.overflow}
        </p>
        {Array.from({ length: 12 }).map((_, index) => (
          <p key={index} className="text-sm leading-7 whitespace-nowrap">
            ${t.wideRow} {index + 1} — ${t.wideRowHint}
          </p>
        ))}
      </div>
    </ScrollView>
  );
}`;

  return (
    <DemoPage title="ScrollView">
      <DemoPreview title={t.fillTitle} code={fillCode}>
        <div className="flex h-72 flex-col rounded-xl border">
          <div className="border-b px-3 py-2 text-sm font-medium">{t.header}</div>
          <ScrollView fit="fill" className="px-3 py-2">
            <Rows count={24} label={t.row} />
          </ScrollView>
        </div>
      </DemoPreview>

      <DemoPreview title={t.contentTitle} code={contentCode} className="pt-4">
        <ScrollView
          fit="content"
          maxHeight={220}
          className="rounded-xl border px-3 py-2"
        >
          <Rows count={16} label={t.item} />
        </ScrollView>
      </DemoPreview>

      <DemoPreview title={t.bothTitle} code={bothCode} className="pt-4">
        <ScrollView
          fit="content"
          orientation="both"
          maxHeight={180}
          className="rounded-xl border"
        >
          <div className="w-[48rem] p-3">
            <p className="text-sm leading-7">{t.overflow}</p>
            <Rows count={12} label={t.wideRow} />
          </div>
        </ScrollView>
      </DemoPreview>
    </DemoPage>
  );
}
