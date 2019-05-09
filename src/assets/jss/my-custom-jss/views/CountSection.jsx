const CountSectionStyles = theme => ({
  CountSection: {
    padding: "15px 0 0 0",
    [theme.breakpoints.down("sm")]: {
      "& h3": {
        textAlign: "center",
        fontSize: "20px"
      },
      "& .text-xs-center": {
        textAlign: "center"
      },
      "& .pd30": {
        paddingBottom: "30px"
      }
    }
  },
  contributer: {
    "& img": {
      width: "160px"
    },
    "& h4": {
      marginTop: "20px",
      fontSize: "17px"
    }
  }
});

export default CountSectionStyles;
