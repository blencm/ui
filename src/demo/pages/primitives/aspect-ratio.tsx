import { AspectRatio } from "@/components/aspect-ratio";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function AspectRatioDemoPage() {
  const t = useCopy({
    en: { alt: "Demo" },
    es: { alt: "Demo" },
  });
  const code = `import { AspectRatio } from '@blencm/ui';

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
      <img
        src="https://picsum.photos/800/600"
        alt="${t.alt}"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  );
}`;

  return (
    <DemoPage title="AspectRatio">
      <DemoPreview code={code} className="max-w-md">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
          <img
            src="https://picsum.photos/800/600"
            alt={t.alt}
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </DemoPreview>
    </DemoPage>
  );
}
