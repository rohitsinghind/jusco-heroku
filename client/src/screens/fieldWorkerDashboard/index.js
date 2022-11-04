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

export default function FieldWorkerDashboard() {
  const creds = { number: "" };

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  //OTP varification left
  return (
    <>
      <Stack direction="row" sx={styles.adminBtn} spacing={2}></Stack>
      <Container maxWidth="xl" sx={styles.container}>
        <Paper sx={styles.paper} variant="outlined">
          <Typography sx={styles.textLogo}>Field Worker Dashboard</Typography>
          <Typography sx={styles.loginText}>
            Enter customer Phone Number
          </Typography>
          <TextField
            id="number"
            type="text"
            label="Phone Number"
            placeholder="Number"
            value={creds.username || ""}
            onChange={(key) => {
              creds.number = key.target.value;
            }}
            sx={styles.inputField}
          />

          <Button
            variant="contained"
            sx={styles.loginBtn}
            onClick={() => {
              axios.post("/sms", {
                number: creds.number,
                message: "some message sent by field manager",
              });
            }}
          >
            Send Message
          </Button>
          <Divider sx={styles.divider} />

          <Box sx={styles.flex}>
            <Typography sx={styles.signupText}>Message</Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
