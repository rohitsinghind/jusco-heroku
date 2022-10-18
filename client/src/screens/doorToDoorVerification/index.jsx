import React from "react";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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

export default function DoorToDoorVerification() {

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
        
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Personal Info</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
              </Box>

              {mediaQuery.matches ? <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Id</Typography>
                <Typography sx={styles.fieldData}>1232342</Typography>
              </Box>:""
              }

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Mobile Number</Typography>
                <Typography sx={styles.fieldData}>9876543210</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Area</Typography>
                <Typography sx={styles.fieldData}>
                Baridih
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Date</Typography>
                <Typography sx={styles.fieldData}>12/01/2023	
</Typography>
              </Box>
            </div>
            {mediaQuery.matches ? "":
            <div>
              <Typography sx={styles.dashboardText}>.</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Id</Typography>
                <Typography sx={styles.fieldData}>1232342</Typography>
              </Box>
            </div>
          }
          </Box>
        </Paper>

        <Button variant="contained">Capture Image</Button>
        </Container>
      </>
    );
  }
  