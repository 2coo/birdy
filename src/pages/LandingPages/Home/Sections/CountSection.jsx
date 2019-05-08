import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import countSectionStyles from "assets/jss/my-custom-jss/CountSection.jsx";
import Grid from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import JetLogo from "assets/img/jet-logo.png";

const CountSection = props => {
  const { classes } = props;
  return (
    <div className={classes.CountSection}>
      <Grid>
        <GridItem lg={7} md={7} sm={12}>
          <h3>Prepare to succeed in the IELTS test</h3>
          <div>
            With detailed lessons, tips, full practice tests and answers, IELTS
            Online has everything you need to prepare for the IELTS test.
          </div>
        </GridItem>
        <GridItem lg={3} md={3} sm={12}>
          A program developed
          <img src={JetLogo} alt="by Macquarie University" />
        </GridItem>
      </Grid>
    </div>
  );
};

CountSection.propTypes = {};

export default withStyles(countSectionStyles)(CountSection);
