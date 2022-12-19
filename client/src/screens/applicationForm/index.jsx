import React, { useState, useRef, useEffect } from "react";
import Iframe from "react-iframe";
import SignaturePad from "react-signature-canvas";
import { styles } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import OtpPopup from "./components/otpPopup";
import PrivacyPolicyPopup from "./components/privacyPolicyPopup";
import TncPopup from "./components/tncPopup";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FormLabel } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function ApplicationForm() {
  let navigate = useNavigate();

  const divForScroll = useRef(null);

  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [open, setOpen] = useState(false); //for otp popup
  const [tncPopupOpen, setTncPopupOpen] = useState(false);

  const [salutation, setSalutaion] = useState("");
  const [doctype1, setDoctype1] = useState("");
  const [doctype2, setDoctype2] = useState("");
  const [doctype3, setDoctype3] = useState("");
  const [areaBa, setAreaBa] = useState("");
  const [areaPa, setAreaPa] = useState("");

  const [docFile1, setDocFile1] = useState("");
  const [docFile2, setDocFile2] = useState("");
  const [docFile3, setDocFile3] = useState("");

  const [language, setLanguage] = useState("English");

  const [signature, setSignature] = useState("");

  const [creds, setCreds] = useState({
    Fname: "",
    Lname: "",
    mobile: "",
    cmobile: "",
    email: "",
    cemail: "",
    designation: "",
    bp_no: "",
    doc1No: "",
    doc2No: "",
    doc3No: "",
    nameBa: "",
    streetHouseNoBa: "",
    postalCodeBa: "",
    cityBa: "Jamshedpur",
    regionBa: "Jharkhand",
    countryBa: "India",
    qty: "",
    remarks: "",
    Longitude: "0",
    Latitude: "0",
  });

  const [areasBa, setAreasBa] = useState([])
  const [LocalitiesBa, setLocalitiesBa] = useState([])
  const [zones, setZones] = useState([])
  const [zoneIdBa, setZoneIdBa] = useState("")
  const [areaIdBa, setAreaIdBa] = useState("")

  const [areasPa, setAreasPa] = useState([])
  const [LocalitiesPa, setLocalitiesPa] = useState([])
  const [zoneIdPa, setZoneIdPa] = useState("")
  const [areaIdPa, setAreaIdPa] = useState("")

  const [zoneBa, setZoneBa] = useState("")
  const [zonePa, setZonePa] = useState("")
  const [localityBa, setLocalityBa] = useState("")
  const [localityPa, setLocalityPa] = useState("")

  const [val, setVal] = useState({
    namePa: "",
    streetHouseNoPa: "",
    postalCodePa: "",
    cityPa: "Jamshedpur",
    regionPa: "Jharkhand",
    countryPa: "India",
  });

  const [btn, setBtn] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const [otp, setOtp] = useState("");

  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const handleChange2 = (key) => {
    key.preventDefault();
    setVal({ ...val, [key.target.id]: key.target.value });
  };

  const  matchValue = (key) => {
    key.preventDefault();
    setVal({
      namePa: creds.nameBa,
      streetHouseNoPa: creds.streetHouseNoBa,
      postalCodePa: creds.postalCodeBa,
      cityPa: creds.cityBa,
      regionPa: creds.regionBa,
      countryPa: creds.countryBa,
    });
    //setAreasPa(areasPa)
    //setLocalitiesPa(LocalitiesBa)
    // setZoneIdPa(zoneIdBa)
    // setAreaIdPa(areaIdBa)
    setAreaPa(areaBa.toString());
    setZonePa(zoneBa);
    setLocalityPa(localityBa.toString())
  };

  // const handleDoc1Change = (e) => {
  //   const file = e.target.files[0];
  //   const Reader = new FileReader();
  //   Reader.readAsDataURL(file);
  //   Reader.onload = () => {
  //     if (Reader.readyState === 2) {
  //       setDocFile1(Reader.result);
  //     }
  //   };
  // };




  const fetchAreaBa = async (e) => {
    axios.post("/getApi",{
      url:`https://tsapplications.in/api/v1/data/areas/${zoneIdBa}`
    }).then((res)=>{setAreasBa(res.data);setAreasPa(res.data)})
  }
  const fetchAreaPa = async (e) => {
    axios.post("/getApi",{
      url:"https://tsapplications.in/api/v1/data/areas/Z0002"
    }).then((res)=>{setAreasPa(res.data)})
  }
  const fetchZones = async (e) => {
    axios.post("/getApi",{
      url:"https://tsapplications.in/api/v1/data/zones"
    }).then((res)=>{setZones(res.data)})
  }

  const fetchLocalityBa = async (e) => {
    axios.post("/getApi",{
      url:`https://tsapplications.in/api/v1/data/locations/${areaIdBa}`
    }).then((res)=>{setLocalitiesBa(res.data);setLocalitiesPa(res.data)})
  }
  const fetchLocalityPa = async (e) => {
    axios.post("/getApi",{
      url:"https://tsapplications.in/api/v1/data/areas/Z0002"
    }).then((res)=>{setLocalitiesPa(res.data)})
  }

  useEffect(() => {
    if(zoneIdBa){
    fetchAreaBa();
    }
  }, [zoneIdBa,zoneBa])

  useEffect(() => {
    if(areaIdBa){
      fetchLocalityBa();
    }
  }, [areaIdBa,areaBa])

  useEffect(() => {
    if(zoneIdPa){
    fetchAreaPa();
    }
  }, [zoneIdPa,zonePa])

  useEffect(() => {
    if(areaIdPa){
      fetchLocalityPa();
    }
  }, [areaIdPa,areaPa])
  

  const submitHandler = async (e) => {
    // e.preventDefault();
    axios
      .post("/createApplication", {
        salutation: salutation,
        Fname: creds.Fname,
        Lname: creds.Lname,
        mobile: creds.mobile.substring(creds.mobile.length - 10),
        email: creds.email,
        designation: creds.designation,
        doctype1,
        bp_no:creds.bp_no,
        doc1No: creds.doc1No,
        docFile1: "",
        doctype2,
        doc2No: creds.doc2No,
        docFile2: "",
        doctype3,
        doc3No: creds.doc3No,
        docFile3: "",
        nameBa: creds.nameBa,
        streetHouseNoBa: creds.streetHouseNoBa,
        zoneBa,
        areaBa,
        localityBa,
        postalCodeBa: creds.postalCodeBa,
        cityBa: creds.cityBa,
        regionBa: creds.regionBa,
        countryBa: creds.countryBa,
        namePa: val.namePa,
        streetHouseNoPa: val.streetHouseNoPa,
        postalCodePa: val.postalCodePa,
        cityPa: val.cityPa,
        regionPa: val.regionPa,
        countryPa: val.countryPa,
        zonePa,
        areaPa,
        localityPa,
        qty: creds.qty,
        remarks: creds.remarks,
        longitude: creds.Longitude,
        latitude: creds.Latitude,
        customer_category:
          doctype1 === 1 || doctype2 === 1 || doctype2 === 1
            ? 1
            : 2,
        docFile1: docFile1,
        docFile2: docFile2,
        docFile3: docFile3,
        medium_lang: language,
        signature_acknowledgement: signature,
      })
      .then((res) => {
        console.log(res.data);
        // alert(res.data?.message)
        navigate("/trackYourApplication");
      });

    // setOpen(true);
  };

 

  let sigPad = useRef({});
  let data = "";

  function clear() {
    sigPad.current.clear();
  }

  function show() {
    sigPad.current.fromDataURL(data);
  }

  function save() {
    data = sigPad.current.toDataURL();

    console.log(data);
    setSignature(data); //yha error aa rha
    console.log(signature); ///yha per ye save nhi ho rha
    alert("Signature Saved");

    show();
  }



  const mediaQuery = window.matchMedia("(max-width: 650px)");

  const generateOtp = () => {
    setOtp(Math.floor(100000 + Math.random() * 900000));
  };

  const sendOtp = async () => {
    // axios
    //   .post("/sms", {
    //     phone: creds.mobile.substring(creds.mobile.length - 10),
    //     message: `Your OTP for TSUISL Bulk Generation application is ${otp}`,
    //   })
    //   .then((res) => {
    //     alert("OTP " + res.data?.message);
    //     setOpen(true);
    //   });
    setOpen(true);
  };

  useEffect(() => {
    generateOtp();
    fetchZones();
  }, []);

  return (
    <>


      <PrivacyPolicyPopup
        open={privacyPolicyOpen}
        setOpen={setPrivacyPolicyOpen}
        setBtn={setBtn2}
      />
      <TncPopup setOpen={setTncPopupOpen} open={tncPopupOpen} setBtn={setBtn} />
      <div ref={divForScroll}></div>
      <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>
          New Customer Application Form
        </Typography>
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Typography sx={styles.signupText}>Personal Info</Typography>
          <Box sx={styles.row}>
            <div style={mediaQuery.matches ? styles.flex : styles}>
              <FormControl size="small" sx={styles.inputFieldSm} fullWidth>
                <InputLabel id="salutation">{"Salutation"}</InputLabel>
                <Select
                  labelId="salutation"
                  id="salutation"
                  value={salutation}
                  label="Salutation"
                  onChange={(e) => {
                    setSalutaion(e.target.value);
                  }}
                >
                  <MenuItem value={"Mr"}>Mr.</MenuItem>
                  <MenuItem value={"Miss"}>Miss</MenuItem>
                  <MenuItem value={"Mrs"}>Mrs.</MenuItem>
                  <MenuItem value={"Dr"}>Dr.</MenuItem>
                  <MenuItem value={"Er"}>Er.</MenuItem>
                </Select>
              </FormControl>
              <TextField
              required
                size="small"
                id="Fname"
                type="text"
                label="First Name"
                placeholder="First Name"
                value={creds.Fname || ""}
                onChange={handleChange}
                sx={styles.inputFieldSm2}
              />
            </div>
            <TextField
            required
              size="small"
              id="Lname"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              value={creds.Lname || ""}
              onChange={handleChange}
              sx={styles.inputFieldSm2}
            />
          </Box>
          <Box sx={styles.row}>
            <TextField
            required
              size="small"
              error={creds.mobile !== creds.cmobile}
              id="mobile"
              type="number"
              label="Mobile Number"
              placeholder="Mobile Number"
              value={creds.mobile || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />

            <TextField
            required
              size="small"
              error={creds.mobile !== creds.cmobile}
              id="cmobile"
              type="number"
              label="Confirm Mobile Number"
              placeholder="Confirm Mobile Number"
              value={creds.cmobile || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>

          <Box sx={styles.row}>
            <TextField
            required
              size="small"
              error={creds.email !== creds.cemail}
              id="email"
              type="email"
              label="email id"
              placeholder="email id"
              value={creds.email || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />

            <TextField
            required
              size="small"
              error={creds.email !== creds.cemail}
              id="cemail"
              type="text"
              label="Confirm email id"
              placeholder="Confirm email id"
              value={creds.cemail || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>

          <Box sx={styles.row}>
            <TextField
              size="small"
              id="designation"
              type="text"
              label="Designation"
              placeholder="Designation"
              value={creds.designation || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />

            <TextField
              size="small"
              id="bpNo"
              type="text"
              label="BP No."
              placeholder="BP No."
              value={creds.bpNo || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>
          <Box sx={styles.row}>
            {/* <Typography
              onClick={() => {
                setPrivacyPolicyOpen(true);
              }}
              sx={styles.info}
            >
              Privacy Policy goes here
            </Typography> */}
            <div
              onClick={() => {
                setPrivacyPolicyOpen(true);
              }}
              style={{ display: "flex", justifyContent: "start", width: "70%" }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                     checked={btn2}
                    // onChange={()=>
                    // {if(btn==true){
                    //     setBtn(false)
                    //     }
                    //   else{
                    //     setBtn(true)
                    //   }}}
                    />
                  }
                  label="Privacy Policy"
                />
              </FormGroup>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Typography sx={styles.signupText}>Documents Details</Typography>
          <Box sx={styles.row}>
            <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="Document">{"Documet Type"}</InputLabel>
              <Select
                labelId="Document"
                id="Document"
                value={doctype1}
                label="Documet Type"
                onChange={(e) => {
                  setDoctype1(e.target.value);
                }}
              >
                <MenuItem value={1}>GSTIN</MenuItem>
                <MenuItem value={2}>Vendor ID Card</MenuItem>
                <MenuItem value={3}>Trade License</MenuItem>
              </Select>
            </FormControl>
            <Box sx={styles.inputField}></Box>
          </Box>
          <Box sx={styles.row}>
            <TextField
            required
              size="small"
              id="doc1No"
              type="text"
              label="Document No."
              placeholder="Document No."
              value={creds.doc1No || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <Box sx={styles.gstUploadRow}>
              <Typography sx={styles.inputBtnText}>
                Upload your Document
              </Typography>
              <input
              required
                style={styles.inputBtn}
                type={"file"}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const Reader = new FileReader();
                  Reader.readAsDataURL(file);
                  Reader.onload = () => {
                    if (Reader.readyState === 2) {
                      setDocFile1(Reader.result);
                    }
                  };
                }}
              />
            </Box>
          </Box>

          <Typography sx={styles.signupText}>
            {/* Documents Details */}
          </Typography>
          <Box sx={styles.row}>
            <FormControl size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="Document">{"Documet Type"}</InputLabel>
              <Select
                labelId="Document"
                id="Document"
                value={doctype2}
                label="Documet Type"
                onChange={(e) => {
                  setDoctype2(e.target.value);
                }}
              >
                <MenuItem value={1}>GSTIN</MenuItem>
                <MenuItem value={2}>Vendor ID Card</MenuItem>
                <MenuItem value={3}>Trade License</MenuItem>
                <MenuItem value={4}>Electricity Bill</MenuItem>
                <MenuItem value={5}>Aadhaar</MenuItem>
              </Select>
            </FormControl>
            <Box sx={styles.inputField}></Box>
          </Box>
          <Box sx={styles.row}>
            <TextField
              size="small"
              id="doc2No"
              type="text"
              label="Document No."
              placeholder="Document No."
              value={creds.doc2No || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <Box sx={styles.gstUploadRow}>
              <Typography sx={styles.inputBtnText}>
                Upload your Document
              </Typography>
              <input
                style={styles.inputBtn}
                type={"file"}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const Reader = new FileReader();
                  Reader.readAsDataURL(file);
                  Reader.onload = () => {
                    if (Reader.readyState === 2) {
                      setDocFile2(Reader.result);
                    }
                  };
                }}
              />
            </Box>
          </Box>

          <Typography sx={styles.signupText}>
            {/* Documents Details */}
          </Typography>
          <Box sx={styles.row}>
            <FormControl size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="Document">{"Documet Type"}</InputLabel>
              <Select
                labelId="Document"
                id="Document"
                value={doctype3}
                label="Documet Type"
                onChange={(e) => {
                  setDoctype3(e.target.value);
                }}
              >
                <MenuItem value={1}>GSTIN</MenuItem>
                <MenuItem value={2}>Vendor ID Card</MenuItem>
                <MenuItem value={3}>Trade License</MenuItem>
                <MenuItem value={4}>Electricity Bill</MenuItem>
                <MenuItem value={5}>Aadhaar</MenuItem>
              </Select>
            </FormControl>
            <Box sx={styles.inputField}></Box>
          </Box>
          <Box sx={styles.row}>
            <TextField
              size="small"
              id="doc3No"
              type="text"
              label="Document No."
              placeholder="Document No."
              value={creds.doc3No || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <Box sx={styles.gstUploadRow}>
              <Typography sx={styles.inputBtnText}>
                Upload your Document
              </Typography>
              <input
                style={styles.inputBtn}
                type={"file"}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const Reader = new FileReader();
                  Reader.readAsDataURL(file);
                  Reader.onload = () => {
                    if (Reader.readyState === 2) {
                      setDocFile3(Reader.result);
                    }
                  };
                }}
              />
            </Box>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Typography sx={styles.signupText}>Billing Address</Typography>
          <Box sx={styles.row}>
            <TextField
            required
              size="small"
              id="nameBa"
              type="text"
              label="Establishment Name"
              placeholder="Establishment Name"
              value={creds.nameBa || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <TextField
            required
              size="small"
              id="streetHouseNoBa"
              type="text"
              label="Street/House Number"
              placeholder="Street/House Number"
              value={creds.streetHouseNoBa || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>

          <Box sx={styles.row}>
            
            <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="zoneBa">{"Zone"}</InputLabel>
             
              <Select
                labelId="zoneBa"
                id="zoneBa"
                value={zoneBa}
                label="Zone"
                onChange={(e) => {
                  setZoneBa(e.target.value);
                  setZoneIdBa(zones.filter((e)=>{if(e.name===zoneBa){return e}})[0].zone_id);
                }}>
                {
                  zones.map((e)=>{
                    return <MenuItem value={e?.name}>{e?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>

            
            <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="areaBa">{"Area"}</InputLabel>
             
              <Select
                labelId="areaBa"
                id="areaBa"
                value={areaBa}
                label="Area"
                onChange={(e) => {
                  setAreaBa(e.target.value);
                  setAreaIdBa(areasBa.filter((e)=>{if(e.name===areaBa){return e}})[0]?.area_id);
                }}>
                {
                  areasBa.map((ar)=>{
                    return <MenuItem value={ar?.name}>{ar?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Box>

          <Box sx={styles.row}>
             <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="localityBa">{"Locality"}</InputLabel>
             
              <Select
                labelId="localityBa"
                id="localityBa"
                value={localityBa}
                label="Area"
                onChange={(e) => {
                  setLocalityBa(e.target.value);
                  
                }}>
                {
                  LocalitiesBa.map((e)=>{
                    return <MenuItem value={e?.name}>{e?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
            <TextField
            required
              size="small"
              id="postalCodeBa"
              type="number"
              label="Postal Code"
              placeholder="Postal Code"
              value={creds.postalCodeBa || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>
          <Box sx={styles.row}>
            <TextField
              size="small"
              id="cityBa"
              type="text"
              label="City"
              placeholder="Jamshedpur"
              value={creds.cityBa || "Jamshedpur"}
              onChange={handleChange}
              sx={styles.inputFieldRO}
            />
            <TextField
              size="small"
              id="Region"
              type="text"
              label="Region"
              placeholder="Jharkhand"
              value="Jharkhand"
              onChange={handleChange}
              sx={styles.inputFieldRO}
            />
          </Box>

          <Box sx={styles.row}>
            <TextField
              size="small"
              id="countryBa"
              type="text"
              label="Country"
              placeholder="India"
              value={creds.countryBa || "India"}
              onChange={handleChange}
              sx={styles.inputFieldRO}
            />
            <Box sx={styles.inputField}></Box>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Typography sx={styles.signupText}>Garbage Pickup Address</Typography>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={matchValue} />}
              label="Address same as Billing Address"
            />
            {console.log()}
          </FormGroup>

          <Box sx={styles.row}>
            <TextField
            required
              size="small"
              id="namePa"
              type="text"
              label="Establishment Name"
              placeholder="Establishment Name"
              value={val.namePa || ""}
              onChange={handleChange2}
              sx={styles.inputField}
            />

            <TextField
            required
              size="small"
              id="streetHouseNoPa"
              type="text"
              label="Street/House Number"
              placeholder="Street/House Number"
              value={val.streetHouseNoPa || ""}
              onChange={handleChange2}
              sx={styles.inputField}
            />
          </Box>

          <Box sx={styles.row}>
          <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="zonePa">{"Zone"}</InputLabel>
             
              <Select
                labelId="zonePa"
                id="zonePa"
                value={zonePa}
                label="Zone"
                onChange={(e) => {
                  setZonePa(e.target.value);
                  setZoneIdPa(zones.filter((e)=>{if(e.name===zonePa){return e}})[0].zone_id);
                }}>
                {
                  zones.map((e)=>{
                    return <MenuItem value={e?.name}>{e?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>

            
            <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="areaPa">{"Area"}</InputLabel>
             
              <Select
                labelId="areaPa"
                id="areaPa"
                defaultValue=""
                value={areaPa}
                label="Area"
                onChange={(e) => {
                  setAreaPa(e.target.value);
                  setAreaIdPa(areasPa.filter((e)=>{if(e.name===areaPa){return e}})[0]?.area_id);
                }}>
                {
                  areasPa.map((ar)=>{
                    return <MenuItem value={ar?.name}>{ar?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Box>

          <Box sx={styles.row}>
             <FormControl required size="small" sx={styles.inputField} fullWidth>
              <InputLabel id="localityPa">{"Locality"}</InputLabel>
             
              <Select
                labelId="localityPa"
                id="localityPa"
                defaultValue=""
                value={localityPa}
                label="Area"
                onChange={(e) => {
                  setLocalityPa(e.target.value);
                  
                }}>
                {
                  LocalitiesPa.map((e)=>{
                    return <MenuItem value={e?.name}>{e?.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
            <TextField
            required
              size="small"
              id="postalCodePa"
              type="number"
              label="Postal Code"
              placeholder="Postal Code"
              value={val.postalCodePa || ""}
              onChange={handleChange2}
              sx={styles.inputField}
            />
          </Box>

          <Box sx={styles.row}>
            <TextField
              size="small"
              id="cityPa"
              type="text"
              label="City"
              placeholder="Jamshedpur"
              value={val.cityPa || "Jamshedpur"}
              onChange={handleChange2}
              sx={styles.inputFieldRO}
            />
            <TextField
              size="small"
              id="regionPa"
              type="text"
              label="Region"
              placeholder="Jharkhand"
              value={val.regionPa || "Jharkhand"}
              onChange={handleChange2}
              sx={styles.inputFieldRO}
            />
          </Box>
          <Box sx={styles.row}>
            <TextField
              size="small"
              id="country"
              type="text"
              label="Country"
              placeholder="India"
              value={val.countryPa || "India"}
              onChange={handleChange2}
              sx={styles.inputFieldRO}
            />
            <Box sx={styles.inputField}></Box>
          </Box>
        </Paper>
        {/* <Box sx={styles.row}>
                <TextField
                          size="small"
                id="Longitude"
                type="text"
                label="Longitude"
                placeholder="22.804565"
                value={val.Longitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           <TextField
                    size="small"
                id="Latitude"
                type="text"
                label="Latitude"
                placeholder="86.202873"
                value={val.Latitude || ''}
                onChange={handleChange}
                sx={styles.inputField}
            />
           </Box>
            <Typography  sx={styles.signupText}>Select On Map</Typography>
           <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d86.17577080000002!3d22.7840284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659242270720!5m2!1sen!2sin"
            width={mediaQuery.matches?"90%":"70%"}
            height="450px"
            id="map"
            className="myClassname"
            display="initial"
            position="relative"
            allow = "fullscreen"
            />

            

<FormControl>
  <FormLabel id="Frequency" sx={styles.signupText}>Frequency of Collection per day</FormLabel>
  <RadioGroup
    row
    sx = {styles.radioGroup}
    aria-labelledby="Frequency of Collection per day"
    defaultValue="Once"
    name="frequency"
  >
    <FormControlLabel value="Once" control={<Radio />} label="Once" />
    <FormControlLabel value="Twice" control={<Radio />} label="Twice" />
  </RadioGroup>
</FormControl>

<FormControl>
  <FormLabel id="acknowledgement" sx={styles.signupText}>Mode of acknowledgement of pick ups</FormLabel>
  <RadioGroup
    row
    sx = {styles.radioGroup}
    aria-labelledby="Mode of acknowledgement of pick ups"
    defaultValue="QR Code Scanning"
    name="mode"
  >
    <FormControlLabel value="QR Code Scanning" control={<Radio />} label="QR Code Scanning" />
    <FormControlLabel value="Signature on Mobile" control={<Radio />} label="Signature on Mobile" />
  </RadioGroup>
</FormControl> */}
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <TextField
              size="small"
              id="qty"
              type="text"
              label="Approx. daily quantity of wastage"
              placeholder="Approx. daily quantity of wastage"
              value={creds.qty || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <TextField
              size="small"
              id="remarks"
              type="text"
              label="Remarks"
              placeholder="Remarks"
              value={creds.remarks || ""}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>
          <Box sx={styles.row}>
            <FormControl sx={{ m: 2, ml: 4 }}>
              <FormLabel id="language" sx={styles.head2}>
                Medium of communication
              </FormLabel>
              <RadioGroup
                row
                sx={styles.radioGroup}
                aria-labelledby="Medium of communication"
                defaultValue="English"
                name="language"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                <FormControlLabel
                  value="English"
                  control={<Radio />}
                  label="English"
                />
                <FormControlLabel
                  value="Hindi"
                  control={<Radio />}
                  label="Hindi"
                />
              </RadioGroup>
            </FormControl>
            <Box sx={styles.inputField}></Box>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Typography sx={styles.signupText}>Select Location</Typography>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d86.17577080000002!3d22.7840284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659242270720!5m2!1sen!2sin"
            width="100%"
            height="450px"
            id="map"
            className="myClassname"
            display="initial"
            position="relative"
            allow="fullscreen"
          />
          <Box sx={styles.inputrow}>
            <TextField
              // InputProps={{
              //   readOnly: true,
              // }}
              id="Longitude"
              type="text"
              label="Longitude"
              value={creds.Longitude}
              onChange={handleChange}
              sx={styles.inputField}
            />
            <TextField
              // InputProps={{
              //   readOnly: true,
              // }}
              id="Latitude"
              type="text"
              label="Latitude"
              value={creds.Latitude}
              onChange={handleChange}
              sx={styles.inputField}
            />
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <SignaturePad ref={sigPad} />
          <div className="controls">
            <button onClick={clear} className="clear">
              Clear
            </button>
            <button onClick={save} className="save">
              Save
            </button>
          </div>
        </Paper>

        <div
          onClick={() => {
            setTncPopupOpen(true);
          }}
          style={{ display: "flex", justifyContent: "start", width: "70%" }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={btn}
                  // onChange={()=>
                  // {if(btn==true){
                  //     setBtn(false)
                  //     }
                  //   else{
                  //     setBtn(true)
                  //   }}}
                />
              }
              label="I accept the terms and conditions"
            />
          </FormGroup>
        </div>
        <Button
          variant="contained"
          sx={styles.submitBtn}
          onClick={sendOtp}
          disabled={
            !btn ||
            creds.cmobile !== creds.mobile ||
            creds.cemail !== creds.email
          }
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

      <OtpPopup
        otp={otp}
        submitHandler={submitHandler}
        phone={creds.mobile.substring(creds.mobile.length - 10)}
        email={creds.email}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
