import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import Icon from "@material-ui/core/Icon";

const FontAwesome = props => {
  const { icon, iconColor, className, ...attr } = props;
  useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }, []);
  return (
    <div>
      <Icon
        className={classNames(className, icon)}
        color={iconColor}
        {...attr}
      />
    </div>
  );
};

FontAwesome.defaultProps = {
  iconColor: "grey"
};
FontAwesome.propTypes = {};
export default FontAwesome;
