import { Badge } from "@/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@blencm/ui';

export function CardDemo() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-4">
          Starter Kit
          <Badge>New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Un ejemplo simple de tarjeta.
      </CardContent>
    </Card>
  );
}`;

export default function CardDemoPage() {
  return (
    <DemoPage title="Card" description="Contenedor con encabezado, contenido y pie.">
      <DemoPreview code={code}>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-4">
              Starter Kit
              <Badge>New</Badge>
            </CardTitle>
            <CardDescription>Un ejemplo simple de tarjeta.</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Usa Card para agrupar título, badge y descripción de apoyo.
          </CardContent>
        </Card>
      </DemoPreview>
    </DemoPage>
  );
}
