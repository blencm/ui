import { Button } from "@/components/Button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function TooltipDemoPage() {
  const t = useCopy({
    en: { trigger: "Hover", content: "Additional information" },
    es: { trigger: "Hover", content: "Información adicional" },
  });

  const code = `import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@blencm/ui';

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">${t.trigger}</Button>
        </TooltipTrigger>
        <TooltipContent>${t.content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`;

  return (
    <DemoPage title="Tooltip">
      <DemoPreview code={code}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{t.trigger}</Button>
            </TooltipTrigger>
            <TooltipContent>{t.content}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DemoPreview>
    </DemoPage>
  );
}
