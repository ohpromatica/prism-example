import React from "react";

type TableProps = {
  tableTitle?: string;
  columns: any[];
  rows: any[];
};

function Table({ tableTitle, columns, rows }: TableProps) {
  const tableRows = rows.map((tableData) => (
    <tr>
      {Object.keys(tableData).map((key) => (
        <td className="p-2 text-sm bg-gray-100 border border-gray-400">
          {tableData[key]}
        </td>
      ))}
    </tr>
  ));

  const tableColumns = columns.map((tableData) => (
    <th className="p-2 text-sm text-left bg-gray-200 border border-gray-500 w-28">
      {tableData}
    </th>
  ));

  return (
    <>
      {tableTitle ? (
        <p className="text-sm text-gray-500">{tableTitle}</p>
      ) : null}
      <table>
        <tr>{tableColumns}</tr>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}

export default Table;
