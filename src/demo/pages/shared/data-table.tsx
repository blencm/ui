import * as React from "react";

import { DataTable, type DataTableColumnDef } from "@/shared/data-table";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

type Project = {
  id: number;
  name: string;
  owner: string;
  status: "Active" | "Paused" | "Completed";
};

const columns: DataTableColumnDef<Project>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Project" },
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "status", header: "Status" },
];

const data: Project[] = [
  { id: 1, name: "Website Redesign", owner: "Jane Cooper", status: "Active" },
  { id: 2, name: "Mobile App", owner: "Wade Warren", status: "Paused" },
  { id: 3, name: "Design System", owner: "Esther Howard", status: "Completed" },
  { id: 4, name: "API Gateway", owner: "Robert Fox", status: "Active" },
  { id: 5, name: "Billing", owner: "Jenny Wilson", status: "Paused" },
  { id: 6, name: "Docs", owner: "Kristin Watson", status: "Completed" },
];

const code = `import * as React from 'react';
import { DataTable, type DataTableColumnDef } from '@blencm/ui';

type Project = {
  id: number;
  name: string;
  owner: string;
  status: 'Active' | 'Paused' | 'Completed';
};

const columns: DataTableColumnDef<Project>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Project' },
  { accessorKey: 'owner', header: 'Owner' },
  { accessorKey: 'status', header: 'Status' }
];

const data: Project[] = [
  { id: 1, name: 'Website Redesign', owner: 'Jane Cooper', status: 'Active' },
  { id: 2, name: 'Mobile App', owner: 'Wade Warren', status: 'Paused' }
];

export function DataTableDemo() {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const pageCount = Math.ceil(data.length / perPage);
  const visibleRows = data.slice((page - 1) * perPage, page * perPage);

  return (
    <DataTable
      columns={columns}
      data={visibleRows}
      page={page}
      perPage={perPage}
      pageCount={pageCount}
      totalRows={data.length}
      onPageChange={setPage}
      onPageSizeChange={(size) => {
        setPerPage(size);
        setPage(1);
      }}
      template="neo"
      accent="primary"
      stickyHeader
    />
  );
}`;

export default function DataTableDemoPage() {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const pageCount = Math.ceil(data.length / perPage);
  const visibleRows = data.slice((page - 1) * perPage, page * perPage);

  return (
    <DemoPage
      title="DataTable"
      description="Tabla con paginación, templates y acentos sobre TanStack Table."
    >
      <DemoPreview code={code} className="p-3 sm:p-4">
        <DataTable
          columns={columns}
          data={visibleRows}
          page={page}
          perPage={perPage}
          pageCount={pageCount}
          totalRows={data.length}
          onPageChange={setPage}
          onPageSizeChange={(size) => {
            setPerPage(size);
            setPage(1);
          }}
          template="neo"
          accent="primary"
          stickyHeader
          animate
          heightClassName="h-[420px]"
        />
      </DemoPreview>
    </DemoPage>
  );
}
