import React, { useState } from "react";
import axios from "axios";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

import LoginOtpPopup from "./otpPopup";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";

export default function CustomersLogin() {
  const [userId, setUserId] = useState("");

  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    // const login = await axios.post("http://localhost:3001/login", creds).then((res) => {
    //   localStorage.setItem("adminToken", res.data?.token);
    //   console.log(res.data);

    // {res.data?.flag ? navigate(res.data?.data?.role == "hod"?"/hodDashboard":res.data?.data?.role == "depot_manager"?"/depoManagerDashboard":"/AccountManagerDashboard") : alert(res.data?.message)}
    // });
    setOpen(true);
  };

  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>
      <LoginOtpPopup
        // otpVerified={otpVerified}
        // otp={otp}
        // mobile={response?.mobile_no?.substring(response.mobile_no.length - 4)}
        open={open}
        setOpen={setOpen}
      />
      <Stack direction="row" sx={styles.adminBtn} spacing={2}>
        <Button
          onClick={() => {
            navigate("/admin");
          }}
          variant="text"
        >
          admin
        </Button>
      </Stack>
      <Container maxWidth="xl" sx={styles.container}>
        <Paper sx={styles.paper} variant="outlined">
          <img
            style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
            src={require("../../assets/image/logo.png")}
            alt=""
            srcset=""
          />
          <Typography sx={styles.textLogo}>Bulk Generation System</Typography>
          <Typography sx={styles.loginText}>Customer's Login</Typography>
          <TextField
            id="username"
            type="text"
            label="Enter your Username"
            placeholder="Username"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            sx={styles.inputField}
          />
          <Button
            variant="contained"
            sx={styles.loginBtn}
            onClick={loginHandler}
          >
            Log in
          </Button>
          <Divider sx={styles.divider} />
          <Typography sx={styles.forgotPwdText}>
            Forgot your password?
          </Typography>
          <Box sx={styles.flex}>
            <Typography
              onClick={() => {
                navigate("/application");
              }}
              sx={styles.signupText}
            >
              Don't have an account?
            </Typography>
            <Typography
              onClick={() => {
                navigate("/application");
              }}
              sx={styles.signupBtn}
            >
              Signup here
            </Typography>
          </Box>
          <Typography
            onClick={() => {
              navigate("/trackYourApplication");
            }}
            sx={styles.trackAppText}
          >
            Track Your Application
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
