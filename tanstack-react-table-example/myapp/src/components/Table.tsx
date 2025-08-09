import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable, type GroupColumnDef } from "@tanstack/react-table";
import Searchbar from "./SearchBar";
import { useState } from "react";

export type Show = {
  show: {
    status: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    runtime: number;
  };
};

// now create types for props for this Table component
type TableProps<TData> = {
  data: TData[];
  columns: GroupColumnDef<TData>[];
};

export default function Table({ columns, data }: TableProps<Show>) {
  //use the useReact table Hook to build our table:
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {},
    state: {
      globalFilter, //specify our global filter here
    },
    onGlobalFilterChange: setGlobalFilter, //if the filter changes, change the hook value
    globalFilterFn: "includesString", //type of filtering
    getFilteredRowModel: getFilteredRowModel(), //row model to filter the table
  });
  // Table component logic and UI come here
  return (
    <div>
      <div className="">
        <Searchbar
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="Search all columns..."
        />
      </div>
      <div className="table-container">
        <table className="w-screen min-h-screen">
          <thead className="">
            {/*use the getHeaderGRoup function to render headers:*/}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-lg">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {/*Now render the cells*/}
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="text-lg ">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-5 py-1 border ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


/*

data 
columns def 



*/ 