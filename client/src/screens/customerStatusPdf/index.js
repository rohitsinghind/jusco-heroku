import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "#2D2D2D",
    },
    container: {
        // margin: 10,
        // padding: 10,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    container2: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"85%"
    },
    container3: {
        display:"flex",
        flexDirection:"row",
        alignItems:"initial",
        justifyContent:"flex-start",
    },
    container4: {
      display:"flex",
      flexDirection:"row",
      alignItems:"initial",
      justifyContent:"flex-start",
      marginTop:"10px"
  },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    logo: {
        width: 350, 
        marginTop:"20px" 
      },
    text1:{
        fontSize:"22px",
        marginTop:"20px",
    },
    text2:{
        fontSize:"18px",
        marginTop:"15px",
    },
    text3:{
        fontSize:"12px",
        marginTop:"7px",
        width: 120, 
        color:"#1D1D1D"
    },
    text4:{
        fontSize:"12px",
        marginTop:"7px",
        width: 130,  
        color:"#4D4D4D",
    },
    text5:{
        fontSize:"15px",
        marginTop:"30px",
        marginBottom:"5px",
        width: 250, 
        color:"#1D1D1D"
    },
    text7:{
      fontSize:"12px",
      marginTop:"60px",
      marginLeft:"40px",
      marginBottom:"5px",
      color:"#1D1D1D"
  },
  text8:{
    fontSize:"12px",
    marginLeft:"40px",
    width: 30, 
    color:"#1D1D1D"
},
text9:{
  fontSize:"12px",
  width:487,
  color:"#1D1D1D"
},
  });
  
  // Create Document Component
  function ApplicationFormPdf(props) {

    console.log(props.userData)

    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.container}>
            <Image
                style={styles.logo}
                src={require("../../assets/image/logo.png")}
                />
              <Text style={styles.text1}>Bulk Generation System</Text>
              <Text style={styles.text2}>New Application</Text>
              <Text style={styles.text5}></Text>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Application No.</Text>
                    <Text style={styles.text4}>{props.userData?.application_no}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Application Date</Text>
                    <Text style={styles.text4}></Text>
                </View>
            </View>

            
            <View style={styles.container2}>
                <View style={styles.container3}>
                <Text style={styles.text5}>Personal Info</Text>
                </View>
                <View style={styles.container3}>
                <Text style={styles.text5}>Document Details</Text>      
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Name</Text>
                    <Text style={styles.text4}>{props.userData?.salutation+". "+props.userData?.first_name+" "+props.userData?.last_name}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>GSTIN</Text>
                    <Text style={styles.text4}>{props.userData?.document_no_1}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Mobile</Text>
                    <Text style={styles.text4}>{props.userData?.mobile_no}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>E-mail ID</Text>
                    <Text style={styles.text4}> {props.userData?.email_id}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Designation</Text>
                    <Text style={styles.text4}>{props.userData?.designation}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                <Text style={styles.text5}>Billing Address</Text>
                </View>
                <View style={styles.container3}>
                <Text style={styles.text5}>Pickup Address</Text>      
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Name</Text>
                    <Text style={styles.text4}>{props.userData?.billing_estb_name}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Name</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_estb_name}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Street/ House No.</Text>
                    <Text style={styles.text4}>{props.userData?.billing_street}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Street/ House No.</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_street}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>City</Text>
                    <Text style={styles.text4}>{props.userData?.billing_city}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>City</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_city}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Region</Text>
                    <Text style={styles.text4}>{props.userData?.billing_region}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Region</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_region}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Country</Text>
                    <Text style={styles.text4}>{props.userData?.billing_country}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Country</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_country}</Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Postal Code</Text>
                    <Text style={styles.text4}>{props.userData?.billing_postal_code}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Postal Code</Text>
                    <Text style={styles.text4}>{props.userData?.pickup_postal_code}</Text>
              </View>
            </View>

            <View style={{marginTop:"50px"}}></View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Waste Quantity (appx.)</Text>
                    <Text style={styles.text4}>{props.userData?.daily_wastage} kgs</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Remarks</Text>
                    <Text style={styles.text4}>{props.userData?.remarks}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Depot Area</Text>
                    <Text style={styles.text4}>{props.userData?.area}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Frequency</Text>
                    <Text style={styles.text4}>{props.userData?.freq}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Acknowledgement</Text>
                    <Text style={styles.text4}></Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.text3}>Rate/ Pickup</Text>
                    <Text style={styles.text4}>₹ {props.userData?.rate}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.text3}></Text>
                    <Text style={styles.text4}></Text>
              </View>
            </View>

            </View>


            <Text  break style={styles.text7}>You have agreed to the following Terms & Conditions.</Text>

            <View style={styles.container4}>
              <Text style={styles.text8}>a) </Text>
              <Text style={styles.text9}>You agree that you are applying for collection of wet waste and dry waste from your establishment by TSUIL</Text>
            </View>

            <View style={styles.container4}>
              <Text style={styles.text8}>b) </Text>
              <View>
              <Text style={styles.text9}>You agree that the address and contact number provided by you in this application form would be used to
              </Text>
              <Text style={styles.text9}>-	contact you or your representative to schedule a visit to your garbage pickup address by TSUIL officer
              </Text>
              <Text style={styles.text9}>-	provide and discuss further details of this service to you
              </Text>
              </View>
            </View>

            <View style={styles.container4}>
              <Text style={styles.text8}>c) </Text>
              <Text style={styles.text9}>The Document(s) uploaded by you in this application would be used to verify the establishment in case any verifications are required by TSUIL at any stage of this service</Text>
            </View>

            <View style={styles.container4}>
              <Text style={styles.text8}>d) </Text>
              <Text style={styles.text9}>If you don’t agree to the Terms and Conditions of the application above, please do not proceed further to submit the page. You may reach out to 0657-xxxxxxx for an officer to contact you.</Text>
            </View>

            <Text style={styles.text7}>You have agreed to the following Privacy Policy.</Text>

            <View style={styles.container4}>
              <Text style={styles.text8}>a) </Text>
              <Text style={styles.text9}></Text>
            </View>

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default ApplicationFormPdf;