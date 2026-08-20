import { Button } from "@/components/Button/button";
import { useCopy } from "../../i18n/copy";
import { useLocale } from "../../i18n/locale";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function ButtonDemoPage() {
  const { m } = useLocale();
  const t = useCopy({
    en: { delete: "Delete", loading: "Loading" },
    es: { delete: "Eliminar", loading: "Cargando" },
  });
  const variantsCode = `import { Button } from '@blencm/ui';

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">${t.delete}</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="gradient">Gradient</Button>
      <Button loading>${t.loading}</Button>
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

  return (
    <DemoPage title="Button">
      <DemoPreview title={m.variants} className="flex flex-wrap gap-3" code={variantsCode}>
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">{t.delete}</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="gradient">Gradient</Button>
        <Button loading>{t.loading}</Button>
      </DemoPreview>
      <DemoPreview title={m.sizes} className="flex flex-wrap items-center gap-3" code={sizesCode}>
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="default">Default</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
      </DemoPreview>
    </DemoPage>
  );
}
