import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/material-kit-react.jsx";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: "auto",
    height: "auto"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title: {
    ...title,
    fontSize: "30px"
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "20px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {}
};

export default infoStyle;
