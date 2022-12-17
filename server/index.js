const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { urlencoded } = require("body-parser");
const cloudinary = require("cloudinary");
const path = require("path");
const axios = require("axios");

cloudinary.config({
  cloud_name: "dv4bjke87",
  api_key: "343127678422988",
  api_secret: "oy7inx7vMFzqYAFMjpYIz71U5RQ",
});

const { loginUser } = require("./routes/userLogin");
const { createApplication } = require("./routes/createApplication");
const { createUser } = require("./routes/userCreation");
const { applicationStatus } = require("./routes/applicationstatus");
const { changeStatus } = require("./routes/changeStatus");
const { getAllApplication } = require("./routes/getAllapplications");
const { sendToHod } = require("./routes/sentToHod");
const { sms } = require("./routes/sendMessage");
const { updateCustomerData } = require("./routes/updateCustomerData");
const { createInvoice } = require("./routes/createInvoice");
const { getInvoice } = require("./routes/getInvoice");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "server/config.env" });
}

const app = express();
const db = new PrismaClient();
var applicationNo = 0;

app.use(cors({ "access-control-allow-origin": "*" }));
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

//This is for registration of application of user
app.post("/createApplication", async (req, res) => {
  applicationNo++;
  console.log(applicationNo, req.body);
  const response = await createApplication(req.body, applicationNo);
  console.log("/createApplication");
  console.log(response);
  res.send(response);
});

//user to see his application status
app.post("/applicationDetails", async (req, res) => {
  console.log("/applicationDetails");
  const response = await applicationStatus(req.body);
  console.log(response);
  res.send(response);
});

//To send all applicant information to client
app.post("/getApplications", async (req, res) => {
  console.log("/getApplications");
  const applications = await getAllApplication(req.body);
  // console.log(applications);
  res.send(applications);
});

//For Creating new user
app.post("/createUser", async (req, res) => {
  console.log("creating User");
  const usrDetails = await createUser(req.body);
  console.log(usrDetails);
  console.log("User Created");
  console.log("Sending response....");
  res.send(usrDetails);
});

// This is for login of user
app.post("/login", async (req, res) => {
  const user = await loginUser(req.body);
  console.log(user);
  console.log(user.message);
  if (user.flag) {
    console.log(user.username, " user loggedin");
  }
  res.send(user);
});

//changing status of customer
app.post("/changeStatus", async (req, res) => {
  console.log("/changeStatus");
  const { applicantId, newStatus, token } = req.body;
  const response = await changeStatus(applicantId, newStatus, token);
  console.log(response);
  res.send(response);
});

//Sending Application to HOD
app.post("/sendToHod", async (req, res) => {
  console.log("/sendToHod");

  const response = await sendToHod(req.body);
  console.log(response);
  res.send(response);
});

//to send sms
// app.post("/sms", async (req, res) => {
//   const response = await sms(req.body);
//   res.send(response);
// });

//universal route to change Customer application data at any given point
//it takes applicantId + {an object containing key (as the database name : updated value)}
app.post("/updateCustomerData", async (req, res) => {
  const response = await updateCustomerData(req.body);
  res.send(response);
});

app.post("/createInvoice", async (req, res) => {
  const response = await createInvoice(req.body);
  res.send(response);
});

app.post("/getInvoice", async (req, res) => {
  const response = await getInvoice(req.body);
  res.send(response);
});

app.post("/getApi", async (req, res) => {
  const response = await axios.get(req.body);
  res.send(response);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`localhost:${process.env.PORT}`);
});
