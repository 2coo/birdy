import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import countSectionStyles from "assets/jss/my-custom-jss/views/CountSection.jsx";
import Grid from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import JetLogo from "assets/img/jet-logo.png";
import Counter from "components/Counter/Counter";
import classNames from "classnames";
const CountSection = props => {
  const { classes } = props;
  return (
    <div className={classes.CountSection}>
      <Grid>
        <GridItem className="text-xs-center" lg={10} md={10} sm={12}>
          <h3>Prepare to succeed in the IELTS test</h3>
          <div className="pd30">
            With detailed lessons, tips, full practice tests and answers, IELTS
            Online has everything you need to prepare for the IELTS test.
          </div>
        </GridItem>
        <GridItem
          className={classNames(classes.contributer, "text-xs-center")}
          lg={2}
          md={2}
          sm={12}
        >
          <h4>A program developed</h4>
          <img src={JetLogo} alt="by Macquarie University" />
        </GridItem>
      </Grid>
    </div>
  );
};

CountSection.propTypes = {};

export default withStyles(countSectionStyles)(CountSection);
