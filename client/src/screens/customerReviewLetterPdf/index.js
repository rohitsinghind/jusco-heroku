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
      paddingTop:"40px",
      backgroundColor: "white",
      color: "#2D2D2D",
    },
    container: {
      display:"flex",
      flexDirection:"row",
      alignItems:"initial",
      justifyContent:"flex-start",
      marginTop:"5px",
      marginLeft:"20px"
  },
  container2:{
    marginTop:"30px",
      display:"flex",
      flexDirection:"row",
      alignItems:"initial",
      justifyContent:"space-between",
  },
  container3:{
      display:"flex",
      flexDirection:"row",
      alignItems:"initial",
      justifyContent:"space-between",
      marginLeft:"40px",
      marginRight:"40px"
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
        fontSize:"10.5px",
        color:"#1D1D1D",
        width: 200, 
        marginLeft:"40px",
        marginTop:"5px"
    },
    text2:{
        fontSize:"10.5px",
        width:200,
        color:"#1D1D1D"
    },
    text3:{
        fontSize:"10.5px",
        marginTop:"7px",
        width: 120, 
        color:"#1D1D1D"
    },
    text4:{
        fontSize:"10.5px",
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
      fontSize:"10.5px",
      marginLeft:"40px",
      marginRight:"40px",
      marginBottom:"5px",
      color:"#1D1D1D"
  },
  text8:{
    fontSize:"10.5px",
    marginLeft:"40px",
    width: 30, 
    color:"#1D1D1D"
},
text9:{
  fontSize:"10.5px",
  width:460,
  color:"#1D1D1D"
},
box:{
  border: "1px",
  marginRight:"40px",
  padding:"15px"
},
box2:{
  border: "1px",
  padding:"5px",
  fontSize:"10.5px",
  color:"#1D1D1D",
  width:"10%"
},
box3:{
  border: "1px",
  padding:"5px",
  fontSize:"10.5px",
  color:"#1D1D1D",
  width:"35%",
},
box4:{
  border: "1px",
  padding:"5px",
  fontSize:"10.5px",
  color:"#1D1D1D",
  width:"55%",
},
  });
  
  // Create Document Component
  function CustomerReviewLetterPdf(props) {

    console.log(props.userData)

    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>

          <Text style={styles.text1}>{props.userData?.billing_estb_name}</Text>
          <Text style={styles.text1}>{props.userData?.billing_street}, {props.userData?.billing_city}, {props.userData?.billing_region}, - {props.userData?.billing_postal_code}</Text>

          <View style={{marginTop:"20px"}}></View>

          <Text style={styles.text1}>{props.userData?.application_no}</Text>
          <Text style={styles.text1}>Dt: </Text>

          <View style={{marginTop:"25px"}}></View>

          <Text style={styles.text7}>Reg: Collection and Disposal of wet waste and dry waste on Chargeable Basis in line with SWM Rules 2016.</Text>

          <View style={{marginTop:"25px"}}></View>

          <Text style={styles.text7}>In accordance with SWM Rules 2016 laid down under Govt. of India and pollution control board Jharkhand improper disposal of solid waste is strictly prohibited and need to segregate at source itself into wet and dry waste. Hence it is the responsibility of waste generator to segregate at source.</Text>

          <Text style={styles.text7}>Moreover improper disposal of garbage give rise to various health hazards, in-sanitation and unhygienic condition and a potential source of mosquito and fly breeding. In order to avoid in-sanitation and other health hazards in the locality and compliance of SWM Rules 2016, proper disposal of wet waste and dry waste is essential which is provided by us on chargeable basis in line with SWM Rules 2016. Charges which are applicable are in line with notification of GOJ - 1470 dated 15th March 2016.</Text>

          
      <View style={{margin:"10px 0px"}}>
          <View style={styles.container3}>
            <Text style={styles.box2}>S.No.</Text>
            <Text style={styles.box3}>Description</Text>
            <Text style={styles.box4}>Rate (Rs.)</Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.box2}>1</Text>
            <Text style={styles.box3}>Collection of wet waste and dry waste from your establishment.</Text>
            <Text style={styles.box4}>₹ {props.userData?.rate}/- + GST 18% per month.</Text>
          </View>
        </View>
            <Text style={styles.text7}>Following points may also be taken into consideration as per norms</Text>

            <View style={styles.container}>
              <Text style={styles.text8}>1. </Text>
              <Text style={styles.text9}>Service charge is subject to change and will be enhanced by 10% based on notification from GOJ.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>2. </Text>
              <Text style={styles.text9}>Bill shall be raised if service renders more than a week days during starting month.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>3. </Text>
              <Text style={styles.text9}>Limitation for collection of garbage in a trip is up to 30 Kgs & any access of it shall be assumed as bulk generator category II and rates will be applicable as per notification mentioned above.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>4. </Text>
              <Text style={styles.text9}>Segregated waste (Wet and Dry) shall be collected from Door Step/Main gate and transported by our authorised waste collector at schedule time given by the dept. Please note if waste is not segregated at source said material shall not be collected by our representative.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>5. </Text>
              <Text style={styles.text9}>Payment has to be made on monthly basis within five days of the receipt of bill. </Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>6. </Text>
              <Text style={styles.text9}>All payments related to aforesaid service is to be made by crossed account payee cheque/      demand draft drawn in favour of “Tata Steel Utilities And Infrastructure Services Limited”, Payable at Jamshedpur.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>7. </Text>
              <Text style={styles.text9}>Providing IOT solution for garbage removal.</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.text8}>8. </Text>
              <View>
              <Text style={styles.text9}>For creation of customer code kindly provide the following documents: </Text>
              <View style={{marginLeft:"10px", marginTop:"5px"}}>
              <Text style={styles.text9}>•	Name and phone No. of authorised person,
              </Text>
              <Text style={styles.text9}>•	Copy of GST,
              </Text>
              <Text style={styles.text9}>•	Copy of Trade License.
              </Text>
              </View>
              </View>
            </View>

            <View style={styles.container2}>
              <View>
                <Text style={styles.text1}>Thanking You,</Text>
                <View style={{marginTop:"10px"}}></View>
                <Text style={styles.text1}>Yours Faithfully</Text>
                <View style={{marginTop:"55px"}}></View>
                <Text style={styles.text1}>Chief Divisional Manager</Text>
                <Text style={styles.text1}>Public Health Service</Text>
              </View>

              <View style={styles.box}>
              <Text style={styles.text2}>Above mentioned rates, terms and conditions have been accepted by us.</Text>
              <View style={{marginTop:"60px"}}></View>
              <Text style={styles.text2}>{props.userData?.billing_estb_name}</Text>
            </View>
            </View>

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default CustomerReviewLetterPdf;