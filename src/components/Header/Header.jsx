import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Hidden,
  Drawer
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

const Header = props => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [colorIsChanged, setColorIsChanged] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const headerColorChange = () => {
      const { classes, color, changeColorOnScroll } = props;
      const windowsScrollTop = window.pageYOffset;
      if (windowsScrollTop > changeColorOnScroll.height) {
        setColorIsChanged(true);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[color]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.color]);
      } else {
        setColorIsChanged(false);
        document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[color]);
        document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.color]);
      }
    };
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return () => {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", this.headerColorChange);
      }
    };
  }, [props]);
  const {
    classes,
    color,
    rightLinks,
    leftLinks,
    brand,
    brandBlack,
    fixed,
    absolute
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent =
    colorIsChanged && brandBlack ? (
      <img className={classes.brandImage} src={brandBlack} />
    ) : (
      <img className={classes.brandImage} src={brand} />
    );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Header.propTypes = {};

export default withStyles(headerStyle)(Header);
