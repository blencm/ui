import { Button } from "@/components/Button/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

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
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Información adicional</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`;

export default function TooltipDemoPage() {
  return (
    <DemoPage title="Tooltip" description="Texto de ayuda al pasar el cursor.">
      <DemoPreview code={code}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>Información adicional</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DemoPreview>
    </DemoPage>
  );
}
