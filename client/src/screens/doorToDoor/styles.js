export const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      py: "20px",
      position: "relative",
    },
    imgLogo: {
      width: "50%",
      marginBottom: "20px",
    },
    imgLogoMobile: {
      width: "90%",
      marginBottom: "20px",
    },
    head: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "28px",
      color: "#2D2D2D",
      "@media (max-width: 650px)": {
        fontSize: "28px",
      },
    },
    dashboardText: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "25px",
      color: "#5D5D5D",
      mb: "20px",
      mt: "35px",
      alignSelf: "center",
    },
    tabItemContainer: {
      width: "100%",
      paddingBottom: ".5rem",
      borderBottom: "solid black 0.5px",
      display: "flex",
      flexWrap: "nowrap",
    },
    tabItem: {
      marginRight: ".3rem",
      borderRadius: "0px",
      width: "25%",
      display: "flex",
      justifyContent: "flex-start",
      fontSize: ".7rem",
    },
    table: {
      width: "100%",
    },
  };
  