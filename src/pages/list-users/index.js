import React from "react";
import { useTable } from "react-table";
import { MdEdit, MdClear } from "react-icons/md";
import { Pagination } from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function ListUsers({ history }) {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Ações",
      accessor: "action",
    },
  ];

  const data = [
    {
      name: "Renan",
      email: "renan@email.com",
      action: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <MdEdit size={20} />
          <MdClear size={20} />
        </div>
      ),
    },
    {
      name: "Renan",
      email: "renan@email.com",
      action: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <MdEdit size={20} />
          <MdClear size={20} />
        </div>
      ),
    },
    {
      name: "Renan",
      email: "renan@email.com",
      action: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <MdEdit size={20} />
          <MdClear size={20} />
        </div>
      ),
    },
  ];

  async function handleSubmit() {
    history.push("/registration");
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <table {...getTableProps()} width={500}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 1px #000",
                    borderTop: "solid 1px #000",
                    borderLeft: "solid 1px #000",
                    borderRight: "solid 1px #000",
                    background: "#CCCCCC",
                    color: "#000",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} width={500} style={{ textAlign: "center" }}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        borderBottom: "solid 1px #000",
                        borderTop: "solid 1px #000",
                        borderLeft: "solid 1px #000",
                        borderRight: "solid 1px #000",
                        color: "#000",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      <Pagination
        activePage={1}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        // onChange={this.handlePageChange.bind(this)}
      />
    </div>
  );
}

export default ListUsers;
