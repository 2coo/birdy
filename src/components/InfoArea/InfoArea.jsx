import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, vertical, iconName, iconColor } = props;
  let iconWrapper = null;
  let iconClasses = null;
  let iconComponent = null;
  if (props.icon && !props.proof_image) {
    iconWrapper = classNames({
      [classes.iconWrapper]: true,
      [classes.iconWrapperVertical]: vertical
    });
    iconClasses = classNames({
      [classes.icon]: true,
      [classes.iconVertical]: vertical
    });

    iconComponent = (
      <div className={iconWrapper} style={{ fontSize: "70px" }}>
        <props.icon
          fontSize="inherit"
          icon={iconName}
          iconColor={iconColor}
          className={iconClasses}
        />
      </div>
    );
  }
  let imageComponent = null;
  if (props.proof_image) {
    imageComponent = (
      <div>
        <img src={props.proof_image} />
      </div>
    );
  }
  return (
    <div className={classes.infoArea}>
      {iconComponent}
      {imageComponent}
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default withStyles(infoStyle)(InfoArea);
