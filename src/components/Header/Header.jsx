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
  Hidden,
  Drawer,
  List,
  ListItem
} from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

import HeaderLinks from "components/Header/HeaderLinks/HeaderLinks";

// flags
import mnFlag from "assets/img/mn.png";
import esFlag from "assets/img/es.gif";
import ruFlag from "assets/img/ru.gif";
import krFlag from "assets/img/kr.gif";
import idFlag from "assets/img/id.gif";
import cnFlag from "assets/img/cn.gif";
import jpFlag from "assets/img/jp.gif";

import withWidth from "@material-ui/core/withWidth";

const Header = props => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [colorIsChanged, setColorIsChanged] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const rightLinks = <HeaderLinks isColorChanged={colorIsChanged} />;
  const {
    classes,
    color,
    leftLinks,
    brand,
    brandBlack,
    changeColorOnScroll,
    width
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: !colorIsChanged,
    [classes.fixed]: colorIsChanged
  });
  const brandComponent = <img className={classes.brandImage} src={brand} />;

  useEffect(() => {
    const checkAndChange = () => {
      let windowsScrollTop = window.pageYOffset;
      if (width == "xs") {
        if (changeColorOnScroll.height < windowsScrollTop) {
          setColorIsChanged(true);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.remove(classes[color]);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.add(classes[changeColorOnScroll.color]);
        } else {
          setColorIsChanged(false);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.add(classes[color]);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.remove(classes[changeColorOnScroll.color]);
        }
      } else {
        if (
          windowsScrollTop > changeColorOnScroll.height &&
          windowsScrollTop < prevScrollPos
        ) {
          setColorIsChanged(true);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.remove(classes[color]);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.add(classes[changeColorOnScroll.color]);
        } else {
          setColorIsChanged(false);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.add(classes[color]);
          // document.body
          //   .getElementsByTagName("header")[1]
          //   .classList.remove(classes[changeColorOnScroll.color]);
        }
        setPrevScrollPos(windowsScrollTop);
      }
    };
    const headerColorChange = e => {
      checkAndChange();
      setTimeout(() => {
        if (window.pageYOffset < changeColorOnScroll.height) {
          checkAndChange();
        }
      }, 300);
    };
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return () => {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  }, [
    changeColorOnScroll,
    classes,
    color,
    prevScrollPos,
    props.changeColorOnScroll,
    width
  ]);

  return (
    <React.Fragment>
      <Hidden smDown implementation="css">
        <AppBar className={classes.topMenu} position="static" color="inherit">
          <Toolbar className={classes.container}>
            <div className={classes.flex}>
              <img className={classes.brandImage} src={brandBlack} />
            </div>
            <div className={classes.translatedLanguages}>
              <div>Translated pages:</div>
              <ul>
                <li>
                  <img src={mnFlag} />
                </li>
                <li>
                  <img src={esFlag} />
                </li>
                <li>
                  <img src={ruFlag} />
                </li>
                <li>
                  <img src={krFlag} />
                </li>
                <li>
                  <img src={idFlag} />
                </li>
                <li>
                  <img src={cnFlag} />
                </li>
                <li>
                  <img src={jpFlag} />
                </li>
              </ul>
            </div>
            <Button color="warning" target="_blank" className={classes.navLink}>
              ENROL NOW
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <Hidden mdUp implementation="css">
            <div className={classes.flex}>
              {leftLinks !== undefined ? (
                <Hidden smDown implementation="css">
                  {leftLinks}
                </Hidden>
              ) : (
                brandComponent
              )}
            </div>
          </Hidden>
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
    </React.Fragment>
  );
};

Header.propTypes = {};

export default withWidth()(withStyles(headerStyle)(Header));
