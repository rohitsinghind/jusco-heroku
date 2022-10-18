export const styles = {
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        py:"20px",
        position:"relative",
        background:"#F0F2F7"
    },
    imgLogo:{
        width:"50%",
        marginBottom:"20px",
    },
    imgLogoMobile:{
        width:"90%",
        marginBottom:"20px",
    },
   
    head:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"28px",
        color:"#2D2D2D",
        '@media (max-width: 650px)': {
            fontSize:"28px",
          },
    },
    dashboardText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"22px",
        color:"#5D5D5D",
        mb:"15px",
        mt:"30px",
        alignSelf:"center",
    },
    inputField:{
        width:"500px",
        my:"10px",
        ml:"1rem",
        '@media (max-width: 1070px)': {
            width:"300px",
            '@media (max-width: 650px)': {
                width:"90%",
              },
          },
    },
    inputFieldSm:{
        width:"165px",
        my:"10px",
        ml:"1rem",
        '@media (max-width: 1070px)': {
            width:"120px",
            '@media (max-width: 650px)': {
                width:"30%",
              },
          },
    },
    inputFieldSm2:{
        width:"410px",
        my:"10px",
        ml:"1rem",
        '@media (max-width: 1070px)': {
            width:"230px",
            '@media (max-width: 650px)': {
                width:"90%",
              },
          },
    },
    flex:{
        display:"flex",
        justifyContent:"start",
        width:"93%",
    },
    inputFieldRO:{
        width:"500px",
        background:"#ebebeb",
        my:"10px",
        ml:"1rem",
        '@media (max-width: 1070px)': {
            width:"300px",
            '@media (max-width: 650px)': {
                width:"90%",
              },
          },
    },
    submitBtn:{
        background:"#1b84e7",
        mt:"40px",
    },
    signupText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"25px",
        color:"#5D5D5D",
        mb:"10px",
        mt:"35px",
        width:"100%"
    },
    row:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        '@media (max-width: 650px)': {
            width:"100%",
            flexDirection:"column"
          },
    },
    gstUploadRow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"500px",
        '@media (max-width: 1070px)': {
            width:"300px",
            '@media (max-width: 650px)': {
                width:"80%",
              },
          },
    },
    RadioBtns:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap: "30px"
        
    },
    inputBtnText:{
        fontFamily: "'Open Sans', sans-serif",
        fontSize:"18px",
        color:"#1D1D1D",
        mt:"15px",
        pl:"20px"
    },
    inputBtn:{
       marginLeft:"20px",
       marginTop:"20px"
    },
    topScrollBtn:{
        position:"absolute",
        bottom:"20px",
        right:"30px",
        background:"#ebebeb"
    },
    radioGroup:{
        display:"flex"
    },
    fieldContainer:{
        margin:"10px",
        padding:"10px",
    },
    info:{
        color:"#7B1FA2",
        margin:"20px",
        fontSize:"15px"
    }
  };