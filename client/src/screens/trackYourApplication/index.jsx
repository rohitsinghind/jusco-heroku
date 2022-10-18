import React,{useState,useEffect} from 'react'
import axios from "axios";
import { styles } from './styles'
import { useNavigate } from 'react-router-dom';

import TrackOtpPopup from './components/otpPopup';

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TrackYourApplication(props) {

  let navigate = useNavigate();

    const mediaQuery = window.matchMedia("(max-width: 550px)");

    const [open, setOpen] = useState(false)

    const [id, setId] = useState("")

    const [response, setResponse] = useState("")
    const [otp, setOtp] = useState("");

    const submitHandler = async (e) => {
      // e.preventDefault();
      axios
        .post("/applicationDetails", {
          application_no:id
        })
        .then((res) => {
          if(res.data?.message==="Success"){
          // props.setUserData(res.data?.data)
          console.log(response)
          setResponse(res.data?.data)
          // setOpen(true);
          // generateOtp();
          //sendOtp();
            axios
              .post("/sms", {
                phone:res.data?.data?.mobile_no,
                message: `Your OTP for TSUISL Bulk Generation application is ${otp}`
              })
              .then((res) => {
                alert("OTP " + res.data?.message);
                setOpen(true)
              }); 
        }
        else{
          alert("User not found");
        }}); 
        
    };

    const generateOtp = () => {
      setOtp(Math.floor(100000 + Math.random() * 900000))
    };

    const otpVerified = () => {
      props.setUserData(response)
      navigate("/applicationStatus")
    };

    useEffect(() => {
      generateOtp()
    }, [])
    

    const sendOtp = async () => {
      axios
        .post("/sms", {
          phone:response?.mobile_no,
          message: `Your OTP for TSUISL Bulk Generation application is ${otp}`
        })
        .then((res) => {
          alert("OTP " + res.data?.message +" on +91-XXXXXX"+response?.mobile_no?.substring(response?.mobile_no?.length-4));
          setOpen(true)
        }); 
        
    };

    

  return (
    <>
    <TrackOtpPopup otpVerified={otpVerified} otp={otp} mobile={response?.mobile_no?.substring(response.mobile_no.length-4)} open={open} setOpen={setOpen}/>
    <Container maxWidth="xl" sx={styles.container}>
    <Paper sx={styles.paper} variant="outlined">
          <img
            style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
            src={require("../../assets/image/logo.png")}
            alt=""
            srcset=""
          />
          <Typography sx={styles.textLogo}>Bulk Generation System</Typography>
          <Typography sx={styles.loginText}>Track Your Application</Typography>
          <TextField
            id="username"
            type="text"
            label="Enter Application No."
            placeholder="Application No."
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            sx={styles.inputField}
          />
          <Button
            variant="contained"
            sx={styles.submitBtn}
            onClick={submitHandler}
          >
            Submit
          </Button>
          </Paper>
    </Container>
    </>
  )
}
