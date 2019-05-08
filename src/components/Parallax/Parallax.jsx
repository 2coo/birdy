import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import parallaxStyle from "assets/jss/material-kit-react/components/parallaxStyle.jsx";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = -20 + window.pageYOffset / 3;
    this.state = {
      // transform: "translate3d(0," + windowScrollTop + "px,0)"
      backgroundPositionY: windowScrollTop + "px"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = -20 + window.pageYOffset / 3;
    this.setState({
      // transform: "translate3d(0," + windowScrollTop + "px,0)"
      backgroundPositionY: windowScrollTop + "px"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = -20 + window.pageYOffset / 3;
    this.setState({
      // transform: "translate3d(0," + windowScrollTop + "px,0)"
      backgroundPositionY: windowScrollTop + "px"
    });
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);
