import * as React from "react";

import { PaginationSection } from "@/shared/pagination-section";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

const code = `import * as React from 'react';
import { PaginationSection } from '@blencm/ui';

export function PaginationSectionDemo() {
  const [page, setPage] = React.useState(1);

  return (
    <PaginationSection
      totalPosts={42}
      postsPerPage={5}
      currentPage={page}
      setCurrentPage={setPage}
    />
  );
}`;

export default function PaginationSectionDemoPage() {
  const [page, setPage] = React.useState(1);

  return (
    <DemoPage title="PaginationSection">
      <DemoPreview code={code}>
        <PaginationSection
          totalPosts={42}
          postsPerPage={5}
          currentPage={page}
          setCurrentPage={setPage}
        />
      </DemoPreview>
    </DemoPage>
  );
}
