import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

const columns = [
  { id: "icxName", label: "Name of ICX" },
  { id: "totalAssignmentE1", label: "Total Assignment E1" },
  { id: "signalingCircuits", label: "Signaling Circuits" },
  { id: "synchronizationCircuits", label: "Synchronization Circuits" },
  { id: "voiceCircuits", label: "Voice Circuits" },
  { id: "concurrentChannel", label: "Concurrent Channel" },
  { id: "freeChannel", label: "Free Channel" },
  { id: "usage", label: "Usage %" },
];

function createData(
  icxName,
  totalAssignmentE1,
  signalingCircuits,
  synchronizationCircuits,
  voiceCircuits,
  concurrentChannel,
  freeChannel,
  usage
) {
  return {
    icxName,
    totalAssignmentE1,
    signalingCircuits,
    synchronizationCircuits,
    voiceCircuits,
    concurrentChannel,
    freeChannel,
    usage,
  };
}

const rows = [
  createData("BANGLA", 10, 1, 10, 309, 0, 309, 0.0),
  createData("MNH", 25, 1, 25, 774, 0, 774, 0.0),
  createData("SUMMIT NWD", 18, 1, 18, 557, 0, 557, 0.0),
  createData("SUMMIT ISD", 1, 1, 1, 30, 2, 28, 6.67),
  createData("BTCL NWD", 2, 1, 1, 61, 0, 61, 0.0),
  createData("BTCL ISD", 2, 1, 1, 61, 0, 61, 0.0),
];

let total = {};

rows.forEach((row) => {
  Object.keys(row).forEach((key) => {
    if (total[key]) {
      total[key] += row[key];
    } else {
      total[key] = row[key];
    }
  });
});
total.icxName = "Sub Total";
total = Object.values(total);

export default function AnalyticsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cellBorderStyle = {
    border: "1px solid #DBDFE3",
    borderCollapse: "collapse",
  };

  const tableStyle = {
    borderCollapse: "collapse",
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={tableStyle}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    backgroundColor: "#0095AD",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    ...cellBorderStyle,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.icxName}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} sx={cellBorderStyle}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            <TableRow>
              {total.map((item, index) => (
                <TableCell key={index} sx={cellBorderStyle}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
            {
              color: "#0095AD",
              marginTop: "13px",
            },
        }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
