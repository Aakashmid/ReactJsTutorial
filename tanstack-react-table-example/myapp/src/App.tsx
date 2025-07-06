import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { createColumnHelper } from "@tanstack/react-table";
import Table, { type Show } from "./components/Table";
import GeneresCell from "./components/GeneresCell";

function App() {
  const [data, setData] = useState<Show[]>();
  const columnHelper = createColumnHelper<Show>();
  //define our table headers and data
  const columns = useMemo(
    () => [
      //create a header group:
      columnHelper.group({
        id: "tv_show",
        header: () => <span>TV Show</span>,
        //now define all columns within this group
        columns: [
          columnHelper.accessor("show.name", {
            header: "Name",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("show.type", {
            header: "Type",
            cell: (info) => info.getValue(),
          }),
        ],
      }),
      //create another group:
      columnHelper.group({
        id: "details",
        header: () => <span> Details</span>,
        columns: [
          columnHelper.accessor("show.language", {
            header: "Language",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("show.genres", {
            header: "Genres",
            cell: (info) => <GeneresCell genres={info.getValue()} />,
          }),
          columnHelper.accessor("show.runtime", {
            header: "Runtime",
            cell: (info) => info.getValue(),
          }),
          columnHelper.accessor("show.status", {
            header: "Status",
            cell: (info) => info.getValue(),
          }),
        ],
      }),
    ],
    [],
  );



  //fetch data from the API
  const fetchData = async () => {
    const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <>{data &&
    <div className="table-wrapper flex justify-center pt-20">
      <Table columns={columns} data={data} />
    </div>
  }</>;
}

export default App;