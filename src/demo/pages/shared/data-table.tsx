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
    },
    es: {
      id: "ID",
      project: "Proyecto",
      owner: "Responsable",
      status: "Estado",
      statusActive: "Activo",
      statusPaused: "Pausado",
      statusCompleted: "Completado",
      projectWebsite: "Rediseño web",
      projectMobile: "App móvil",
      projectDesign: "Sistema de diseño",
      projectApi: "API Gateway",
      projectBilling: "Facturación",
      projectDocs: "Docs",
      rowsPerPage: "Filas por página",
      page: "Página",
      of: "de",
      rowsSelected: "fila(s) seleccionada(s)",
      records: "registros",
    },
  });

  const columns: DataTableColumnDef<Project>[] = [
    { accessorKey: "id", header: t.id },
    { accessorKey: "name", header: t.project },
    { accessorKey: "owner", header: t.owner },
    { accessorKey: "status", header: t.status },
  ];

  const data: Project[] = [
    { id: 1, name: t.projectWebsite, owner: "Jane Cooper", status: t.statusActive },
    { id: 2, name: t.projectMobile, owner: "Wade Warren", status: t.statusPaused },
    { id: 3, name: t.projectDesign, owner: "Esther Howard", status: t.statusCompleted },
    { id: 4, name: t.projectApi, owner: "Robert Fox", status: t.statusActive },
    { id: 5, name: t.projectBilling, owner: "Jenny Wilson", status: t.statusPaused },
    { id: 6, name: t.projectDocs, owner: "Kristin Watson", status: t.statusCompleted },
  ];

  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(5);
  const pageCount = Math.ceil(data.length / perPage);
  const visibleRows = data.slice((page - 1) * perPage, page * perPage);

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

const data: Project[] = [
  { id: 1, name: '${t.projectWebsite}', owner: 'Jane Cooper', status: '${t.statusActive}' },
  { id: 2, name: '${t.projectMobile}', owner: 'Wade Warren', status: '${t.statusPaused}' }
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
