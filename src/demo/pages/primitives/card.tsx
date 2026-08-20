import { Badge } from "@/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function CardDemoPage() {
  const t = useCopy({
    en: {
      title: "Starter Kit",
      badge: "New",
      description: "A simple card example.",
      content: "Use Card to group a title, badge, and supporting description.",
    },
    es: {
      title: "Starter Kit",
      badge: "New",
      description: "Un ejemplo simple de tarjeta.",
      content: "Usa Card para agrupar título, badge y descripción de apoyo.",
    },
  });
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
          ${t.title}
          <Badge>${t.badge}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        ${t.description}
      </CardContent>
    </Card>
  );
}`;

  return (
    <DemoPage title="Card">
      <DemoPreview code={code}>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-4">
              {t.title}
              <Badge>{t.badge}</Badge>
            </CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            {t.content}
          </CardContent>
        </Card>
      </DemoPreview>
    </DemoPage>
  );
}
