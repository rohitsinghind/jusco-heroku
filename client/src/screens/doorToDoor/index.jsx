import React from "react";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import {AllData} from "./allData"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
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

const data = []

export default function DoorToDoor() {

    const mediaQuery = window.matchMedia("(max-width: 650px)");

    let navigate = useNavigate();
    return (
      <>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />

        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Door-to-Door Authority  Dashboard
        </Typography>
        <TableContainer component={Paper}>
          <div className="line"></div>
          <FilterListIcon /> Sort
          <Table sx={{ minWidth: "700" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sl.No</StyledTableCell>
                <StyledTableCell align="right">Application Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Mobile No.</StyledTableCell>
                <StyledTableCell align="right">Area</StyledTableCell>
                <StyledTableCell align="right">
                  Entry/Application Date
                </StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllData.application.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.area}</StyledTableCell>
                  <StyledTableCell align="right">{row.gstNo}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.expiration}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => {
                        navigate("/doorToDoorVerification");
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
        </Container>
      </>
    );
  }
  