import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "130px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  description: {
    marginTop: "85px",
    fontSize: "22px"
  },
  "@media (min-width: 320px) and (max-width: 1024px)": {
    title: {
      fontSize: "25px",
      textAlign: "center"
    },
    description: {
      textAlign: "center",
      marginTop: "30px",
      fontSize: "17px"
    },
    container: {
      paddingBottom: "350px"
    }
  },
  parallax_button: {
    marginTop: "10px",
    marginRight: "30px",
    fontSize: "20px",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  }
  // mainRaised: {
  //   margin: "-60px 30px 0px",
  //   borderRadius: "6px",
  //   boxShadow:
  //     "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  // }
};

export default landingPageStyle;
