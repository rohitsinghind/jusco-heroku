import React, { useState } from "react";
import { styles } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
import Stack from "@mui/material/Stack";

export default function () {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const login = await axios.post("/login", creds).then((res) => {
      localStorage.setItem("adminToken", res.data?.token);
      const role = res.data.data.role;
      console.log(role)
      if (role == "hod") navigate("/hodDashboard");
      else if (role == "depot_manager") navigate("/depoManagerDashboard");
      else if (role == "d2d") navigate("/doorToDoorVerification");
      else if (role == "ac") navigate("/AccountManagerDashboard");
      else if (role == "fw") navigate("/fieldWorkerDashboard"); //ye krna hai
      else if (role == "billing_manager") navigate("/billingmanagerDashboard"); //ye krna hai
    });
  };

  

  const mediaQuery = window.matchMedia("(max-width: 550px)");

  return (
    <>
      <Stack direction="row" sx={styles.adminBtn} spacing={2}>
        <Button
          onClick={() => {
            navigate("/trackYourApplication");
          }}
          variant="text"
        >
          Track Your Application
        </Button>
        {/* <Button
        onClick={() => {
          navigate("/adminLogin");
        }}
        variant="text"
      >
        Admin
      </Button> */}
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
          <Typography sx={styles.loginText}>Log in to continue.</Typography>
          <TextField
            id="username"
            type="text"
            label="Enter your Username"
            placeholder="Username"
            value={creds.username || ""}
            onChange={handleChange}
            sx={styles.inputField}
          />
          <FormControl variant="outlined" sx={styles.inputField}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              placeholder="*****"
              type={showPassword ? "text" : "password"}
              value={creds.password || ""}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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
        </Paper>
      </Container>
    </>
  );
}
