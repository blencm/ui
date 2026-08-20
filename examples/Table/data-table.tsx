import React, { useState } from "react";
import {
  DataTable,
  type DataTableColumnDef,
} from "../../src/shared/data-table";

type User = {
  id: number;
  name: string;
  email: string;
};

const columns: DataTableColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Johnson", email: "sam@example.com" },
  { id: 4, name: "Alice Brown", email: "alice@example.com" },
  { id: 5, name: "Bob White", email: "bob@example.com" },
  { id: 6, name: "Charlie Black", email: "charlie@example.com" },
  { id: 7, name: "Diana Green", email: "diana@example.com" },
  { id: 8, name: "Eve Blue", email: "eve@example.com" },
  { id: 9, name: "Frank Yellow", email: "frank@example.com" },
  { id: 10, name: "Grace Red", email: "grace@example.com" },
];

const Example = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const paginatedData = data.slice((page - 1) * perPage, page * perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPerPage(newPageSize);
    setPage(1); // Reset to the first page when page size changes
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Data Table with Pagination</h1>
      <DataTable
        columns={columns}
        data={paginatedData}
        pageCount={Math.ceil(data.length / perPage)}
        page={page}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        rowPerPageLabel="Rows per page"
        pageLabel="Page"
        ofLabel="of"
        rowsSelectedLabel="rows selected"
        emptyData={<div>No data available</div>}
      />
    </div>
  );
};

export default Example;
