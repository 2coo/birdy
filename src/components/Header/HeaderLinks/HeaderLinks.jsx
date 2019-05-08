/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { List, Hidden } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import FontAwesomeIcon from "components/FontAwesomeIcon/FontAwesomeIcon";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/teams"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          HOME
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          COURSES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          FEES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          ABOUT US
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          BLOG
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          CONTACT US
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" target="_blank" className={classes.navLink}>
          <FontAwesomeIcon icon="fas fa-fingerprint" iconColor="inherit" />
          LOGIN
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
