import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CounterStyles from "../../assets/jss/my-custom-jss/components/Counter";

const Counter = props => {
  const { classes } = props;
  const Count = props.string.split("").map((char, index) => {
    return (
      <span key={index} className={classes.Char}>
        {char}
        <div className={classes.Stroke} />
      </span>
    );
  });
  return <div className={classes.Counter}>{Count}</div>;
};

Counter.propTypes = {};

export default withStyles(CounterStyles)(Counter);
