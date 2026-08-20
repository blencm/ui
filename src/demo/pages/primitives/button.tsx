import { Button } from "@/components/Button/button";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const variantsCode = `import { Button } from '@blencm/ui';

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="gradient">Gradient</Button>
      <Button loading>Loading</Button>
    </div>
  );
}`;

const sizesCode = `import { Button } from '@blencm/ui';

export function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="default">Default</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  );
}`;

export default function ButtonDemoPage() {
  return (
    <DemoPage
      title="Button"
      description="Botón con variantes, tamaños y estado de carga."
    >
      <DemoPreview title="Variantes" className="flex flex-wrap gap-3" code={variantsCode}>
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="gradient">Gradient</Button>
        <Button loading>Loading</Button>
      </DemoPreview>
      <DemoPreview title="Tamaños" className="flex flex-wrap items-center gap-3" code={sizesCode}>
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="default">Default</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
      </DemoPreview>
    </DemoPage>
  );
}
