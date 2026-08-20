import { DataTableSkeleton } from "@/shared/data-table-skeleton";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import { DataTableSkeleton } from '@blencm/ui';

export function DataTableSkeletonDemo() {
  return <DataTableSkeleton columnCount={4} rowCount={5} />;
}`;

export default function DataTableSkeletonDemoPage() {
  return (
    <DemoPage title="DataTableSkeleton">
      <DemoPreview code={code}>
        <DataTableSkeleton columnCount={4} rowCount={5} />
      </DemoPreview>
    </DemoPage>
  );
}
