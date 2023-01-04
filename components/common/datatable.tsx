import { Center, createStyles, Pagination, Stack, Table } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

type DataTableProps = {
  columns: {
    key: string;
    value: string;
  }[];

  rows: {
    href: string;
    columns: {
      key: string;
      value: string;
    }[];
  }[];

  rowsPerPage: number;
};

const useStyles = createStyles(() => ({
  tablerows: {
    cursor: 'pointer'
  }
}))

const DataTable = ({ columns, rows, rowsPerPage = 10 }: DataTableProps) => {
  const { classes } = useStyles();
  const [activePage, setPage] = useState(1);

  const headers = columns.map(({ key, value }) => (
    <th key={`header-${key}`}>{value}</th>
  ));

  const tablerows = rows
    .slice(activePage * rowsPerPage - rowsPerPage, activePage * rowsPerPage)
    .map(({ href, columns: rowColumns }, i) => (
      <Link key={`row-${i}`} legacyBehavior href={href}>
        <tr className={classes.tablerows}>
          {columns.map(({ key }, i) => (
            <td key={`row-${i}-${key}`}>
              {rowColumns.find((c) => c.key === key)?.value}
            </td>
          ))}
        </tr>
      </Link>
    ));

  const pagination =
    rows.length < rowsPerPage ? (
      <></>
    ) : (
      <Center>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={rows.length / rowsPerPage + 1}
        />
      </Center>
    );

  return (
    <Stack>
      <Table highlightOnHover>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{tablerows}</tbody>
      </Table>
      {pagination}
    </Stack>
  );
};

export default DataTable;
