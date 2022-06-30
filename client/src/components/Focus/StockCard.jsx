import React, { useState } from "react";
import { WatchList } from "../../data/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StockCard = (props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ 
        minWidth: 288,
        backgroundColor: "white"
      }}
       size="small">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="left">Stock</TableCell>
            <TableCell align="left">Price&nbsp;(USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {WatchList.map((row) => (
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
              <TableCell align="left">${row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockCard;
