import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import BrandLogo from "assets/img/birdy-logo.png";
import BrandLogo2 from "assets/img/birdy-logo-black.png";
import ProductSection from "./Sections/ProductSection";
const dashboardRoutes = [];
const Home = props => {
  const { classes, ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={BrandLogo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("assets/img/helloquence-61189-unsplash.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={11} sm={12}>
              <h1 className={classes.title}>
                More than 1.5 Million Students Have Said Hello to Stress-Free
                Studying
              </h1>
              <h4 className={classes.description}>
                <b>Start preparing for your next test!</b>
              </h4>
              <br />
              <GridContainer>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/ielts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GRE
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/gmat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GMAT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/toefl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TOEFL
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/sat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SAT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/act"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ACT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/praxis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Praxis
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/lsat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LSAT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/mcat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MCAT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/ielts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IELTS
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection />
            <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Home.propTypes = {};

export default withStyles(landingPageStyle)(Home);
