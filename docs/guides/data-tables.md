# Tables & pagination

Typed columns, local and API pagination, visual templates and scroll behavior.

## Client pagination

Pass the complete dataset and paginationMode="client". The component slices it locally. Without controlled page/perPage props, the initial state is page 1 with 10 records per page.


```tsx
import { DataTable, type DataTableColumnDef } from '@blencm/ui';

type Project = { id: number; name: string; status: string };
const columns: DataTableColumnDef<Project>[] = [
  { accessorKey: 'name', header: 'Project' },
  { accessorKey: 'status', header: 'Status' },
  { id: 'actions', header: 'Actions', cell: ({ row }) => (
    <a href={'/projects/' + row.original.id}>Open project</a>
  ) },
];

export function Projects({ projects }: { projects: Project[] }) {
  return <DataTable columns={columns} data={projects}
    paginationMode="client" internalScroll={false}
    showAllOption pageSizeOptions={[10, 20, 50]} />;
}
```

## API pagination

Manual mode is the default. Pass only the fetched page as data, the total count and the page count. The table requests page changes through callbacks; your application must fetch the records.

The following component uses an injected loader, ignores responses from obsolete requests, renders a loading skeleton and handles failures. A real loader can wrap your API client.


```tsx
import { useEffect, useState } from 'react';
import { DataTable, DataTableSkeleton, type DataTableColumnDef } from '@blencm/ui';

type Project = { id: number; name: string };
type Result = { rows: Project[]; total: number };
type Loader = (page: number, perPage: number) => Promise<Result>;
const columns: DataTableColumnDef<Project>[] = [{ accessorKey: 'name', header: 'Project' }];

export function RemoteProjects({ load }: { load: Loader }) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [result, setResult] = useState<Result>({ rows: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    load(page, perPage).then(data => {
      if (active) setResult(data);
    }).catch(() => {
      if (active) setError('Unable to load projects.');
    }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [load, page, perPage]);

  return <section aria-label="Projects" aria-busy={loading}>
    {error ? <p role="alert">{error}</p> : loading
      ? <DataTableSkeleton columnCount={1} rowCount={perPage} />
      : <DataTable columns={columns} data={result.rows}
          paginationMode="manual" page={page} perPage={perPage}
          pageCount={Math.ceil(result.total / perPage)} totalRows={result.total}
          onPageChange={setPage}
          onPageSizeChange={size => { setPerPage(size); setPage(1); }}
          internalScroll={false} />}
  </section>;
}
```

## The All option and controlled state

showAllOption adds an option whose value is the numeric total record count, with a minimum of 1. It does not emit a special string or Infinity. Selecting it also requests page 1.

In manual mode, your API must supply the requested number of records. Without totalRows the All option is omitted when pageCount is greater than 1. Enable it only when the application can load the complete result set.

Keep a loader callback stable with useCallback or a module-level function. After filtering or deleting records, reset or clamp controlled page state so your next API request remains valid.

## Appearance, slots and scrolling

Templates are neo, glass, compact, minimal, clean, elevated, grid and cards. accent accepts primary, emerald, indigo, rose, amber or zinc. accentColor takes precedence and accepts a CSS color.

internalScroll defaults to true for DataTable and false for Table. Set it to false to remove the internal viewport and let the table grow with its current page; heightClassName is ignored in that mode. stickyHeader defaults to true, while headerScroll lets it scroll away.

| Slots | Purpose |
| --- | --- |
| root, table, thead, theadSticky, trHead, th | Container, table and column header styling. |
| tbody, tr, trClickable, td | Rows, clickable rows and cells. |
| footer, footerInner, metaWrap, controlsWrap | Pagination footer layout. |
| pageSizeLabel, pageSizeTrigger, pageLabel, navButton | Pagination text and controls. |


```tsx
import { DataTable, type DataTableColumnDef } from '@blencm/ui';

type Project = { id: number; name: string };
const columns: DataTableColumnDef<Project>[] = [{ accessorKey: 'name', header: 'Project' }];

export function CompactProjects({ projects }: { projects: Project[] }) {
  return <DataTable columns={columns} data={projects} paginationMode="client"
  template="compact" accent="indigo" animate={false}
  internalScroll heightClassName="h-[420px]" stickyHeader
  classNames={{ th: 'normal-case text-sm', td: 'py-2', root: 'rounded-lg' }}
  emptyData="No matching projects" />;
}
```

## Filtering, selection and lower-level controls

DataTable exposes pagination, column rendering and row clicks. It does not expose controlled sorting, filters, row selection or an external table instance. Filter the supplied array or request API results in your application.

isRowsSelected controls the selection summary; it does not insert selection checkboxes. dataTableFeatures and DataTableFeatures describe the internal TanStack feature set.

PaginationSection calculates 1-based page buttons from totalPosts/postsPerPage. It does not fetch or slice records. The Pagination primitives allow fully custom controls.

- Use DataTableColumnDef<T> from the package for columns; it includes the library feature type.
- Use cell renderers for accessible links and buttons. onClick on a row alone is not a keyboard interaction.
- Translate rowPerPageLabel, pageLabel, ofLabel, rowsSelectedLabel, totalLabel and allRowsLabel through props.

## Related components

- [DataTable](https://ui.blencm.com/data-table)
- [Table](https://ui.blencm.com/table)
- [DataTableSkeleton](https://ui.blencm.com/data-table-skeleton)
- [PaginationSection](https://ui.blencm.com/pagination-section)

