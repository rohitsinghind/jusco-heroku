// import React from 'react'
import React, { useState } from "react";
import { styles } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const InvoicePage = ({ setInvoiceData }) => {
  let navigate = useNavigate();
  const [ids, setIds] = useState("");
  function handleChange(e) {
    setIds(e.target.value);
    console.log(ids);
  }
  function loginHandler() {
    console.log(ids);
    axios.post("/getInvoice", { id: ids }).then((res) => {
      setInvoiceData(res.data);
      navigate("/invoicePdf");
    });
  }
  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Paper sx={styles.paper} variant="outlined">
        <Typography sx={styles.textLogo}>See Your Invoice</Typography>

        <TextField
          id="id"
          type="text"
          label="Enter your invoice_id"
          placeholder="invoice_id"
          value={ids || ""}
          onChange={handleChange}
          sx={styles.inputField}
        />
        <Button variant="contained" sx={styles.loginBtn} onClick={loginHandler}>
          See Invoice
        </Button>
      </Paper>
    </Container>
  );
};

export default InvoicePage;
