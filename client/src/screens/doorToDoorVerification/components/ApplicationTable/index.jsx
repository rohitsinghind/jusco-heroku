import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1b84e7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//Hey rohit i created a seperate table component so that we can easily use same table with diffferent data.. see index.jsx page of depo manager dashboard

// <ApplicationTable
//     data={All the data in the form of object}
//     link = {link for page you want to go after clicking action btn}
//     />

// function createData(name, mobile, email, area, gstNo,isReturn,expiration) {
//   return { name, mobile, email, area, gstNo,isReturn,expiration };
// }

export default function ApplicationTable({ data, actionLink, setApplicantData}) {
  let navigate = useNavigate();
  console.log(data)
  // console.log(actionLink);
  return (
    <>
      <TableContainer component={Paper}>
        <div className="line"></div>
        <FilterListIcon /> Sort
        <Table sx={{ minWidth: "700" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sl.No</StyledTableCell>
              <StyledTableCell align="center">Customer Id</StyledTableCell>
              <StyledTableCell align="center">Pick up address</StyledTableCell>
              <StyledTableCell align="center">Latitude</StyledTableCell>
              <StyledTableCell align="center">Longitude</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row,idx) => (
              <StyledTableRow key={row.application_no}>
                <StyledTableCell align="center">{idx+1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row?.customer_id}
                </StyledTableCell>
                <StyledTableCell align="center"> {row?.pickup_estb_name+" "+row?.pickup_estb_name+" "+row?.pickup_street+" "+row?.pickup_locality+" "+row?.pickup_city+" "+row?.pickup_region+" "+row?.pickup_postal_code}</StyledTableCell>
                <StyledTableCell align="center"> {row?.latitude}</StyledTableCell>
                <StyledTableCell align="center">{row?.longitude}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    onClick={() => {
                      setApplicantData(row)
                      navigate(actionLink);
                    }}
                    variant="text"
                  >
                    View
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
