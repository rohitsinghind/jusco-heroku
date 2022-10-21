import React, { useState, useRef } from "react";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import Iframe from "react-iframe";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Checkbox, FormLabel } from "@mui/material";
import UsrSign from "../signaturePad";
export default function ApplicationDetails({ applicantData }) {

  let navigate = useNavigate()

  const mediaQuery = window.matchMedia("(max-width: 650px)");

  const [freq, setFreq] = useState("");
  const [category, setCategory] = useState("")
  const [mobileAck, setMobileAck] = useState(false)
  const [area, setArea] = useState("")
  const [rate, setRate] = useState("")


  const [creds, setCreds] = useState({
    Longitude: "1",
    Latitude: "",
    area: "",
    rate: "",
  });

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/sendToHod", {
        applicantId: applicantData.id,
        token: localStorage.getItem("adminToken"),
        freq,category,mobileAck,area,rate
      })
      .then((res) => alert(res.data?.message));
      // navigate("/depoManagerDashboard")
  };

  const divForScroll = useRef(null);

  return (
    <>
      <div ref={divForScroll}></div>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Application Details</Typography>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Personal Info</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.salutation +
                    ". " +
                    applicantData.first_name +
                    " " +
                    applicantData.last_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Mobile Number</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.mobile_no}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Email</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.email_id}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Designation</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.designation}
                </Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}>GSTIN Details</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>GSTIN</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.document_no_1}
                </Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Billing Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_estb_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_street}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_city}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_region}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_country}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_postal_code}
                </Typography>
              </Box>
            </div>

            <div>
              <Typography sx={styles.dashboardText}>Pickup Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_estb_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_street}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_city}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_region}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_country}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_postal_code}
                </Typography>
              </Box>
            </div>
          </Box>
        </Paper>
        {/* <Box sx={styles.row}>
          <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Depot Area</Typography>
          <Typography sx={styles.fieldData}>Kashidih</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Frequency</Typography>
          <Typography sx={styles.fieldData}>Once</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Acknowledgement</Typography>
          <Typography sx={styles.fieldData}>Signature on Mobile Device</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Rate/ Pickup</Typography>
          <Typography sx={styles.fieldData}>₹15.00</Typography>
        </Box>
        </div>
        <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}></Typography>
          <Typography sx={styles.fieldData}></Typography>
        </Box>
        </div>
        </Box> */}

        <Typography sx={styles.head2}>Select Location</Typography>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d86.17577080000002!3d22.7840284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659242270720!5m2!1sen!2sin"
          width={mediaQuery.matches ? "90%" : "70%"}
          height="450px"
          id="map"
          className="myClassname"
          display="initial"
          position="relative"
          allow="fullscreen"
        />
        <Box sx={styles.inputrow}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="Longitude"
            type="text"
            label="Longitude"
            value="22.804565"
            onChange={handleChange}
            sx={styles.inputField}
          />
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="Latitude"
            type="text"
            label="Latitude"
            value="86.202873"
            onChange={handleChange}
            sx={styles.inputField}
          />
        </Box>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <div>
            <FormControl>
              <FormLabel id="Frequency" sx={styles.head2}>
                Frequency of Collection per day
              </FormLabel>
              <RadioGroup
                row
                sx={styles.radioGroup}
                aria-labelledby="Frequency of Collection per day"
                defaultValue="Once"
                name="frequency"
                value={freq}
                onChange={(e) => {
                  setFreq(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Once"
                  control={<Radio />}
                  label="Once"
                />
                <FormControlLabel
                  value="Twice"
                  control={<Radio />}
                  label="Twice"
                />
                <FormControlLabel
                  value="onCall"
                  control={<Radio />}
                  label="On Call"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel id="acknowledgement" sx={styles.head2}>
                Mode of acknowledgement of pick ups
              </FormLabel>
              <RadioGroup
                row
                sx={styles.radioGroup}
                aria-labelledby="Mode of acknowledgement of pick ups"
                defaultValue="QR Code Scanning"
                name="mode"
              >
                <FormControlLabel
                  value="QR Code Scanning"
                  control={<Radio />}
                  label="QR Code Scanning"
                />
                <FormControlLabel
                  value="Signature on Mobile"
                  control={<Checkbox 
                    checked = {mobileAck}
                    onClick = {()=>{setMobileAck(!mobileAck)}}
                  />}
                  label="Signature on Mobile"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <br />
          <div>
            <FormControl>
              <FormLabel id="Frequency" sx={styles.head2}>
                Customer Category{" "}
              </FormLabel>
              <RadioGroup
                row
                sx={styles.radioGroup}
                aria-labelledby="Frequency of Collection per day"
                defaultValue="Once"
                name="frequency"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <FormControlLabel value="B2B" control={<Radio />} label="B2B" />
                <FormControlLabel value="B2C" control={<Radio />} label="B2C" />
              </RadioGroup>
            </FormControl>

            <br />

            {/* <FormControl>
  <FormLabel id="Frequency" sx={styles.head2}>Priority of the customer</FormLabel>
  <RadioGroup
    row
    sx = {styles.radioGroup}
    aria-labelledby="Frequency of Collection per day"
    defaultValue="Once"
    name="frequency"
  >
    <FormControlLabel value="LOW" control={<Radio />} label="LOW" />
    <FormControlLabel value="MEDIUM" control={<Radio />} label="MEDIUM" />
    <FormControlLabel value="HIGH" control={<Radio />} label="HIGH" />
  </RadioGroup>
</FormControl> */}
            <br />
            <Box sx={styles.inputrow}>
              <FormControl sx={styles.inputField} fullWidth>
                <InputLabel id="Area">Depot</InputLabel>
                <Select
                  labelId="area"
                  id="area"
                  value={area}
                  label="Depot"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                >
                  <MenuItem value={"RD"}>Ramdasbhatta</MenuItem>
                  <MenuItem value={"KSD"}>Kashidih</MenuItem>
                  <MenuItem value={"NT"}>Northern Town</MenuItem>
                  <MenuItem value={"BRD"}>Baridih</MenuItem>
                  <MenuItem value={"BRM"}>Burmamines</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={styles.inputField} fullWidth>
                <InputLabel id="rate">Rate/ Pickup</InputLabel>
                <Select
                  labelId="rate"
                  id="rate"
                  value={rate}
                  label="Rate/ Pickup"
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                >
                  <MenuItem value={"10"}>10.00</MenuItem>
                  <MenuItem value={"15"}>15.00</MenuItem>
                  <MenuItem value={"20"}>20.00</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </Paper>
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <UsrSign />
          </Box>
        </Paper>
        <Button
          variant="contained"
          sx={styles.submitBtn}
          onClick={submitHandler}
        >
          Submit Application
        </Button>
        <IconButton
          onClick={() => {
            divForScroll.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={styles.topScrollBtn}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </>
  );
}
