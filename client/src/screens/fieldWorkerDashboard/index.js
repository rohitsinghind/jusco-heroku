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
  const [number, setNumber] = useState("");
  const [old, setOld] = useState("Message");

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
          <br />< br/>
          <input 
          style={styles.input}
            type="number"
            placeholder="Enter Phone Number"
            onChange={(k) => {
              console.log(k.target.value);
              setNumber(k.target.value);
            }}
          />
<br />
          <Button
            variant="contained"
            sx={styles.loginBtn}
            onClick={async () => {
              setOld("sent");
              console.log(number);
              const message =
                "to register with Bulk Gen please visit https://bulkgen.herokuapp.com/";
              const url = `http://prodnd.bulkssms.com/httpapi/smsapi?uname=RUDRAYATI&password=Rud@1122&sender=UPDATE&receiver=${number}&route=TA&msgtype=1&sms=${message}`;
              const s = await axios.get(url);
            }}
          >
            Send Message
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
