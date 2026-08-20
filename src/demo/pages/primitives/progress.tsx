import * as React from "react";

import { Progress } from "@/components/progress";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { Progress } from '@blencm/ui';

export function ProgressDemo() {
  return <Progress value={33} />;
}`;

export default function ProgressDemoPage() {
  const [value, setValue] = React.useState(33);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setValue((current) => (current >= 100 ? 10 : current + 10));
    }, 1200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <DemoPage title="Progress" description="Barra de progreso determinada.">
      <DemoPreview code={code} className="max-w-md">
        <Progress value={value} />
      </DemoPreview>
    </DemoPage>
  );
}
