import React, { useEffect } from "react";
import classNames from "classnames";
import { loadCSS } from "fg-loadcss/src/loadCSS";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import FontAwesomeIcon from "components/FontAwesomeIcon/FontAwesomeIcon";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

const ProductSection = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
          </GridItem>
        </GridContainer> */}
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Everything you need in one place"
              description="Don't stress out over finding practice tests, study notes or learning the exam format. You get everything you need to succeed, accessible online, anywhere, anytime. Online has been carefully designed and developed, so you won't miss out on any hints, tips or knowledge needed to get a good score."
              iconName="fas fa-dove"
              iconColor="inherit"
              icon={FontAwesomeIcon}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Simulate exam conditions"
              description="Studying for the IELTS test involves more than just reading and writing. Our IELTS preparation courses include practical activities in listening and speaking, allowing you to listen to audio samples and record your own speaking that can be submitted for assessment by qualified IELTS Tutors. Answer the questions by choosing onscreen, or typing your answers within the course."
              iconName="fas fa-object-ungroup"
              iconColor="inherit"
              icon={FontAwesomeIcon}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(productStyle)(ProductSection);
