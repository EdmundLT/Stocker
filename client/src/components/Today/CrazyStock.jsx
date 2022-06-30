import React, { useState } from "react";
import { CrazyStockList } from "../../data/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CrazyStock = (props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ 
        minWidth: 288,
        backgroundColor: "white"
      }}
       size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CrazyStockList.map((row) => (
            <TableRow
              key={row.symbol}
              sx={{
                backgroundColor: "grey",
                "& th": {
                  color: "rgba(96, 96, 96)",
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.percentage}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CrazyStock;
