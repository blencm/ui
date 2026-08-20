import { Skeleton } from "@/components/skeleton";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

export default function SkeletonDemoPage() {
  const code = `import { Skeleton } from '@blencm/ui';

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  );
}`;

  return (
    <DemoPage title="Skeleton">
      <DemoPreview code={code} className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-28" />
        </div>
      </DemoPreview>
    </DemoPage>
  );
}
