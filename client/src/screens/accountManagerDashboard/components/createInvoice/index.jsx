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

export default function CreateInvoice() {
  const [ID, setID] = useState("");
  const [old, setOld] = useState("");

  const mediaQuery = window.matchMedia("(max-width: 550px)");
  //OTP varification left
  return (
    <>
      <Stack direction="row" sx={styles.adminBtn} spacing={2}></Stack>
      <Container maxWidth="xl" sx={styles.container}>
        <Paper sx={styles.paper} variant="outlined">
          <Typography sx={styles.textLogo}>Create Invoice</Typography>
          <Typography sx={styles.loginText}>
           Enter Customer Id
          </Typography>
          <br />< br/>
          <input 
          style={styles.input}
            type="text"
            placeholder="Enter customer Id"
            onChange={(k) => {
              console.log(k.target.value);
              setID(k.target.value);
            }}
          />
<br />
          <Button
            variant="contained"
            sx={styles.loginBtn}
            onClick={async () => {
              setOld("invoice Created");
              console.log(ID);
             axios.post("/createInvoice",{id:ID}).then(res=>alert(res.data.message))
            }}
          >
           Create
          </Button>
          <Divider sx={styles.divider} />

          <Box sx={styles.flex}>
            <Typography sx={styles.signupText}>{old}</Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
