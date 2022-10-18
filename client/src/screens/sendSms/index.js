import React,{useState} from "react";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Checkbox, FormLabel } from "@mui/material";

export default function SendSms() {

    const mediaQuery = window.matchMedia("(max-width: 650px)");

    const [creds, setCreds] = useState({mobile:"",})

    const handleChange = (key) => {
        key.preventDefault();
        setCreds({ ...creds, [key.target.id]: key.target.value });
      };

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
        <Paper variant="outlined" sx={styles.fieldContainer}>
        <Typography sx={styles.dashboardText}>Send SMS
        </Typography>
          <TextField
            id="mobile"
            type="number"
            label="Enter Mobile Number"
            placeholder="Enter Mobile Number"
            value={creds.mobile || ""}
            onChange={handleChange}
            sx={styles.inputField}
          />

        <FormControl>
              <FormLabel id="Frequency" sx={styles.head2}>
              choose language
              </FormLabel>
              <RadioGroup
                row
                sx={styles.radioGroup}
                aria-labelledby="choose language"
                defaultValue="english"
                name="frequency"
              >
                <FormControlLabel
                  value="english"
                  control={<Radio />}
                  label="English"
                />
                <FormControlLabel
                  value="hindi"
                  control={<Radio />}
                  label="Hindi"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>

            <Button sx={{mt:"20px"}} variant="contained">Send</Button>
            </Paper>
        </Container>
      </>
    );
  }
  