import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import * as sectionName from "../SectionNameConstants";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: "solid",
    borderBottomColor: theme.palette.secondary.main,
  },
  toolbar: {
    justifyContent: "space-evenly",
  },

  barText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  active: {
    color: theme.palette.secondary.main,
  },
}));

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* TODO: まとめれるporpsはまとめたい */}
        <Link
          activeClass={classes.active}
          to={sectionName.ABOUT}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            {sectionName.ABOUT}
          </Typography>
        </Link>

        <Link
          activeClass={classes.active}
          to={sectionName.WORKS}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            {sectionName.WORKS}
          </Typography>
        </Link>

        <Link
          activeClass={classes.active}
          to={sectionName.SKILL}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            {sectionName.SKILL}
          </Typography>
        </Link>

        <Link
          activeClass={classes.active}
          to={sectionName.CONTACT}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            {sectionName.CONTACT}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
