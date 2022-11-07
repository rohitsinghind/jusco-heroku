import React, { useState } from "react";
import { styles } from "./styles";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function BillingManagerDashBoard() {
  var creds = { id: "" };
  const [allData, setAllData] = useState("");

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  //OTP varification left
  return (
    <>
      <Stack direction="row" sx={styles.adminBtn} spacing={2}></Stack>
      <Container maxWidth="xl" sx={styles.container}>
        <Paper sx={styles.paper} variant="outlined">
          <Typography sx={styles.textLogo}>
            Billing Manager Dashboard
          </Typography>
          <Typography sx={styles.loginText}>Enter customer Id</Typography>
          <TextField
            id="id"
            type="text"
            label="customer Id"
            placeholder="Customer Id"
            value={creds.id || ""}
            onChange={(key) => {
              creds.id = key.target.value;
            }}
            sx={styles.inputField}
          />

          <Button
            variant="contained"
            sx={styles.loginBtn}
            onClick={() => {
              axios.post(
                "/getApplications",
                {
                  application_no: creds.id,
                }.then((res) => {
                  setAllData(res.data);
                })
              );
            }}
          >
            Get Data
          </Button>
          <Divider sx={styles.divider} />

          <Box sx={styles.flex}>
            {/* <Typography sx={styles.signupText}>Message</Typography> */}
            {allData}
          </Box>
        </Paper>
      </Container>
    </>
  );
}
