import { AspectRatio } from "@/components/aspect-ratio";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { AspectRatio } from '@blencm/ui';

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcd7f4bd3c?w=800&q=80"
        alt="Demo"
        className="h-full w-full object-cover"
      />
    </AspectRatio>
  );
}`;

export default function AspectRatioDemoPage() {
  return (
    <DemoPage
      title="AspectRatio"
      description="Mantiene una proporción, útil para imágenes o embeds."
    >
      <DemoPreview code={code} className="max-w-md">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcd7f4bd3c?w=800&q=80"
            alt="Demo"
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      </DemoPreview>
    </DemoPage>
  );
}
