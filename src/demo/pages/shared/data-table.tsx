import * as React from "react";

import { DataTable, type DataTableColumnDef } from "@/shared/data-table";
import { useCopy } from "../../i18n/copy";
import { DemoPage, DemoPreview } from "../../layout/DemoPage";

type Project = {
  id: number;
  name: string;
  owner: string;
  status: string;
};

export default function DataTableDemoPage() {
  const t = useCopy({
    en: {
      id: "ID",
      project: "Project",
      owner: "Owner",
      status: "Status",
      statusActive: "Active",
      statusPaused: "Paused",
      statusCompleted: "Completed",
      projectWebsite: "Website Redesign",
      projectMobile: "Mobile App",
      projectDesign: "Design System",
      projectApi: "API Gateway",
      projectBilling: "Billing",
      projectDocs: "Docs",
      rowsPerPage: "Rows per page",
      page: "Page",
      of: "of",
      rowsSelected: "row(s) selected",
      records: "records",
      all: "All",
      internalScroll: "Internal scrolling",
    },
  });

  const columns: DataTableColumnDef<Project>[] = [
    { accessorKey: "id", header: t.id },
    { accessorKey: "name", header: t.project },
    { accessorKey: "owner", header: t.owner },
    { accessorKey: "status", header: t.status },
  ];

  const projects: Project[] = [
    { id: 1, name: t.projectWebsite, owner: "Jane Cooper", status: t.statusActive },
    { id: 2, name: t.projectMobile, owner: "Wade Warren", status: t.statusPaused },
    { id: 3, name: t.projectDesign, owner: "Esther Howard", status: t.statusCompleted },
    { id: 4, name: t.projectApi, owner: "Robert Fox", status: t.statusActive },
    { id: 5, name: t.projectBilling, owner: "Jenny Wilson", status: t.statusPaused },
    { id: 6, name: t.projectDocs, owner: "Kristin Watson", status: t.statusCompleted },
  ];

  const data: Project[] = Array.from({ length: 30 }, (_, index) => ({
    ...projects[index % projects.length],
    id: index + 1,
  }));

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const [internalScroll, setInternalScroll] = React.useState(false);

  const code = `import * as React from 'react';
import { DataTable, type DataTableColumnDef } from '@blencm/ui';

type Project = {
  id: number;
  name: string;
  owner: string;
  status: string;
};

const columns: DataTableColumnDef<Project>[] = [
  { accessorKey: 'id', header: '${t.id}' },
  { accessorKey: 'name', header: '${t.project}' },
  { accessorKey: 'owner', header: '${t.owner}' },
  { accessorKey: 'status', header: '${t.status}' }
];

const projects: Project[] = [
  { id: 1, name: '${t.projectWebsite}', owner: 'Jane Cooper', status: '${t.statusActive}' },
  { id: 2, name: '${t.projectMobile}', owner: 'Wade Warren', status: '${t.statusPaused}' }
];

const data: Project[] = Array.from({ length: 30 }, (_, index) => ({
  ...projects[index % projects.length],
  id: index + 1
}));

export function DataTableDemo() {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);

  return (
    <DataTable
      columns={columns}
      data={data}
      paginationMode="client"
      internalScroll={false}
      showAllOption
      allRowsLabel="${t.all}"
      pageSizeOptions={[5, 10, 20, 50]}
      page={page}
      perPage={perPage}
      totalRows={data.length}
      onPageChange={setPage}
      onPageSizeChange={(size) => {
        setPerPage(size);
        setPage(1);
      }}
      template="clean"
      stickyHeader
      rowPerPageLabel="${t.rowsPerPage}"
      pageLabel="${t.page}"
      ofLabel="${t.of}"
      rowsSelectedLabel="${t.rowsSelected}"
      totalLabel="${t.records}"
    />
  );
}`;

  return (
    <DemoPage title="DataTable">
      <DemoPreview code={code} className="p-3 sm:p-4">
        <label className="mb-4 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={internalScroll}
            onChange={(event) => setInternalScroll(event.target.checked)}
          />
          {t.internalScroll}
        </label>
        <DataTable
          columns={columns}
          data={data}
          paginationMode="client"
          internalScroll={internalScroll}
          showAllOption
          allRowsLabel={t.all}
          pageSizeOptions={[5, 10, 20, 50]}
          page={page}
          perPage={perPage}
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
          rowPerPageLabel={t.rowsPerPage}
          pageLabel={t.page}
          ofLabel={t.of}
          rowsSelectedLabel={t.rowsSelected}
          totalLabel={t.records}
        />
      </DemoPreview>
    </DemoPage>
  );
}
