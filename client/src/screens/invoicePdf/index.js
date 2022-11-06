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
      // paddingTop:"40px",
      paddingHorizontal:"15px",
      backgroundColor: "white",
      color: "#2D2D2D",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      paddingBottom:"50px"
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
        fontSize:"12px",
        color:"#1D1D1D",
        width:"50%",
        textAlign:"right",
        marginRight:"40px"
    },
    text2:{
      fontSize:"12px",
      color:"#1D1D1D",
      width:"50%",
      textAlign:"left",
      marginLeft:"40px"
    },
    text3:{
      fontSize:"10.5px",
      color:"#1D1D1D",
    },
    text4:{
        fontSize:"10.5px",
        color:"#6D6D6D",
        // width:"200px"
    },
box:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  marginTop:"20px"
},
box2:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  width:"100%",
  marginTop:"20px"
},
box3:{
  width:"30%"
},
box4:{
  border: "1px",
  padding:"5px",
  fontSize:"10.5px",
  color:"#1D1D1D",
  width:"55%",
},
table:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  width:"100%",
  marginTop:"20px"
},
col:{
  // flex:1
},
cell:{
  border:"1px solid black",
  padding:"5.5px"
},
th:{
  fontSize:"10.5px",
  color:"#1D1D1D",
},
td:{
  fontSize:"10.5px",
  color:"#6D6D6D",
},
tr:{
  border:"1px solid black",
  padding:"5px",
  width:"100%"
}
  });
  
  // Create Document Component
  function InvoicePdf(props) {

    // console.log(props.userData)

    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size={841.89} style={styles.page}>

          <View style={styles.box}>
            <Text style={styles.text1}>Tata Steel Utilities and Infrastructure Services Limited</Text>
            <Text style={styles.text2}>Original for recipient</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text1}>TAX INVOICE</Text>
            <View style={styles.text2}>
              <Text>Invoice No. (GST) : CB2320102906</Text>
              <Text>Invoice Date: 13.09.2022</Text>
            </View>
          </View>
          


          <View style={styles.box2}>
            <View style={styles.box3}>
              <Text style={styles.text3}>Name and Address of Supplier</Text>
              <Text wrap={true} style={styles.text4}>Tata Steel Utilities and Infrastructure Services Limited (Formerly Jamshedpur Utilities and Services Company Limited) </Text>
              <Text wrap={true} style={styles.text3}>Add: JUSCO Town office premises, Sakchi Boulevard Road, Northern Town,</Text>
              <Text wrap={true} style={styles.text3}>Pin: 831001  City: Jamshedpur 20</Text>
              <Text wrap={true} style={styles.text3}>Billing Period Start  Date: 01.08.2022</Text>
              <Text wrap={true} style={styles.text3}>Billing Period End   Date: 31.08.2022</Text>
            </View>
             
            <View style={styles.box3}>
              <Text style={styles.text3}>Details of Recepient (Billed To) :</Text>
              <Text wrap={true} style={styles.text4}>DBMS KADMA HIGH SCHOOL, ROAD NO:23, FARM AREA KADMA JAMSHEDPUR 831005</Text>
              <Text style={styles.text3}>Customer Code : 101715</Text>
              <Text style={styles.text3}>E-mail ID : </Text>
              <Text style={styles.text3}>Phone : </Text>
            </View>

            <View style={styles.box3}>
              <Text style={styles.text3}>Details of Consignee (Shipped To) :</Text>
              <Text wrap={true} style={styles.text4}>DBMS KADMA HIGH SCHOOL, ROAD NO:23, FARM AREA KADMA JAMSHEDPUR 831005</Text>
              <Text style={styles.text3}>Customer Code : 101715</Text>
            </View>
          </View>


          <View style={styles.box2}>
            <View style={styles.box3}>
              <Text style={styles.text4}>State             : Jharkhand</Text>
              <Text style={styles.text4}>State Code   : 20</Text>
              <Text style={styles.text4}>GSTIN          : 20AABCJ3604P1ZR</Text>
              <Text style={styles.text3}>Header Text  : Garbage hauling job</Text>
            </View>
             
            <View style={styles.box3}>
            <Text style={styles.text4}>State                          : Jharkhand</Text>
              <Text style={styles.text4}>State Code                : 20</Text>
              <Text style={styles.text4}>GSTIN                       : </Text>
              <Text style={styles.text4}>PAN No.                     : </Text>
              <Text style={styles.text4}>Customer PO No.      : Nil</Text>
              <Text style={styles.text4}>Customer PO Dt.       : </Text>
              <Text style={styles.text4}>Type of Supply           : B2C</Text>
              <Text style={styles.text4}>GST TDS Applicable : N </Text>
            </View>

            <View style={styles.box3}>  
              <Text style={styles.text4}>State                          : Jharkhand</Text>
              <Text style={styles.text4}>State Code                : 20</Text>
              <Text style={styles.text4}>GSTIN                       : </Text>
              <Text style={styles.text3}>Place of Supply Text  : 20 Jharkhand</Text>
            </View>
          </View>


          <View style={styles.table}>
            <View style={styles.col}>
              <View style={styles.cell}>
                <Text style={styles.th}>SL </Text>
                <Text style={styles.th}>No.</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
                <Text style={styles.th}>Item Code With</Text>
                <Text style={styles.th}>Description of</Text>
                <Text style={styles.th}>Goods/Services</Text>
              </View>
              <View style={styles.cell}>
                <Text wrap={true} style={styles.td}>MISC19153</Text>
                <Text style={styles.td}>Garbage Hauling</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>Total:</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>HSN</Text>
                <Text style={styles.th}>Code</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>999424</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>QTY</Text>
                <Text style={styles.th}> </Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,000</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>UOM</Text>
                <Text style={styles.th}> </Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>TRP</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>Rate Per</Text>
                <Text style={styles.th}>Unit</Text>
                <Text style={styles.th}>(INR)</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,320.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
              </View>
            </View>


            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>Discount</Text>
                <Text style={styles.th}>(INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
              </View>
            </View>


            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>Value</Text>
                <Text style={styles.th}>(INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,320.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>Taxable</Text>
                <Text style={styles.th}>Val (INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,320.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>CGST</Text>
                <Text style={styles.th}>Rate</Text>
                <Text style={styles.th}>(%)</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>9.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>CGST</Text>
                <Text style={styles.th}>Amt (INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>118.80</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>118.80</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>SGST</Text>
                <Text style={styles.th}>Rate</Text>
                <Text style={styles.th}>(%)</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>9.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>SGST</Text>
                <Text style={styles.th}>Amt (INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>118.80</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>118.80</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>IGST</Text>
                <Text style={styles.th}>Rate</Text>
                <Text style={styles.th}>(%)</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}> </Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>IGST</Text>
                <Text style={styles.th}>Amt (INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>0.00</Text>
              </View>
            </View>

            <View style={styles.col}>
              <View style={styles.cell}>
              <Text style={styles.th}>Total Value</Text>
                <Text style={styles.th}>(INR)</Text>
                <Text style={styles.th}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,557.60</Text>
                <Text style={styles.td}> </Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.td}>1,557.60</Text>
              </View>
            </View>

          </View>

          <View style={styles.tr}>
            <Text style={styles.th}>Total Invoice Value ( in figures )       1,557.60</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td}>Total Invoice Value ( in Words ) : ONE THOUSAND FIVE HUNDRED FIFTY SEVEN Rupees SIXTY Paise</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td}>Whether Tax subject to reverse charge : NO</Text>
          </View>

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default InvoicePdf;