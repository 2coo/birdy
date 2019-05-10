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
    width: "81px",
    height: "103px",
    paddingTop: "44px",
    display: "inline-block",
    background: "url(" + CounterBg + ") top center no-repeat",
    marginRight: "5px",
    fontSize: "70px",
    position: "relative"
  },
  Stroke: {
    left: "13px",
    top: "50px",
    width: "55px",
    height: "2px",
    position: "absolute",
    background: "#000"
  }
};

export default CounterStyles;
