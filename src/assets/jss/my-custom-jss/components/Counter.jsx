import CounterBg from "assets/img/counter-bg.png";
const CounterStyles = {
  Counter: {
    color: "#fff",
    fontWeight: "600",
    lineHeight: "1em",
    textAlign: "center",
    paddingTop: "20px"
  },
  Char: {
    backgroundSize: "contain",
    width: "50px",
    height: "64px",
    paddingTop: "25px",
    display: "inline-block",
    background: "url(" + CounterBg + ") top center no-repeat",
    marginRight: "5px",
    fontSize: "45px",
    position: "relative"
  },
  Stroke: {
    left: "8px",
    top: "31px",
    width: "34px",
    height: "2px",
    position: "absolute",
    background: "#000"
  }
};

export default CounterStyles;
