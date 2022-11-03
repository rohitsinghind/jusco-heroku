import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import CustomersLogin from "./screens/customersLogin";
import ApplicationForm from "./screens/applicationForm";
import AdminLogin from "./screens/customersLogin";
import CustomerDashboard from "./screens/customerDashboard";
import DepoManagerDashboard from "./screens/depoManagerDashboard";
import ApplicationDetails from "./screens/depoManagerDashboard/components/applicationDetails";
import CustomerApplicationStatus from "./screens/applicationStatus";
import HodDashboard from "./screens/hodDashboard";
import DoorToDoor from "./screens/doorToDoor";
import DoorToDoorVerification from "./screens/doorToDoorVerification";
import SendSms from "./screens/sendSms";
import TrackYourApplication from "./screens/trackYourApplication";
import HodApplicationDetails from "./screens/hodDashboard/components/applicationDetails";
import AccountManagerDashboard from "./screens/accountManagerDashboard";
import AccountsApplicationDetails from "./screens/accountManagerDashboard/components/applicationDetails";
import D2dApplicationDetails from "./screens/doorToDoorVerification/components/applicationDetails";
import CustomerReviewLetterPdf from "./screens/customerReviewLetterPdf";
import ApplicationFormPdf from "./screens/customerStatusPdf";

function App() {
  const [userData, setUserData] = useState("")
  const [applicantData, setApplicantData] = useState("")
  return (
    <>
      <div style={{ background: "#f0f2f7" }}>
        <Router>
          <Routes>
            <Route path="/" element={<CustomersLogin />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="/customerDashboard" element={<CustomerDashboard userData={userData}/>} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route
              path="/depoManagerDashboard"
              element={<DepoManagerDashboard setApplicantData={setApplicantData}/>}
            />
            <Route
              path="/applicationDetails"
              element={<ApplicationDetails applicantData={applicantData}/>}
            />
            <Route
              path="/hodApplicationDetails"
              element={<HodApplicationDetails applicantData={applicantData}/>}
            />
            <Route
              path="/accountsApplicationDetails"
              element={<AccountsApplicationDetails applicantData={applicantData}/>}
            />
            <Route
              path="/AccountManagerDashboard"
              element={<AccountManagerDashboard setApplicantData={setApplicantData}/>}
            />
            <Route
              path="/applicationStatus"
              element={<CustomerApplicationStatus userData={userData}/>}
            />
            <Route path="/hodDashboard" element={<HodDashboard setApplicantData={setApplicantData}/>} />
            <Route
              path="/hodDasAppDetails"
              element={<CustomerApplicationStatus rev={true} />}
            />
             {/* <Route
              path="/doorToDoor"
              element={<DoorToDoor/>}
            /> */}
            <Route
              path="/doorToDoorVerification"
              element={<DoorToDoorVerification setApplicantData={setApplicantData}/>}
            />
            <Route
              path="/d2dApplicationDetails"
              element={<D2dApplicationDetails applicantData={applicantData}/>}
            />
            <Route
              path="/sendSms"
              element={<SendSms/>}
            />
            <Route
              path="/trackYourApplication"
              element={<TrackYourApplication setUserData={setUserData}/>}
            />
            <Route
              path="/applicationFormPdf"
              element={<ApplicationFormPdf userData={userData}/>}
            />
            <Route
              path="/customerReviewLetterPdf"
              element={<CustomerReviewLetterPdf userData={userData}/>}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
