import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: "solid",
    borderBottomColor: theme.palette.secondary.main,
    // borderBottomColor: lightGreen[500],
  },
  toolbar: {
    // justifyContent: "space-between",
    // justifyContent: "space-around",
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
    // TODO: Linkの遷移で位置がずれるのに対策するなら、toolbarと同じスタイル(自分でスタイル上書きしたほうが簡単)の空のdivを入れる
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link
          activeClass={classes.active}
          to="About"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            About
          </Typography>
        </Link>
        <Link
          activeClass={classes.active}
          to="Works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            Works
          </Typography>
        </Link>
        <Link
          activeClass={classes.active}
          to="Skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            Skill
          </Typography>
        </Link>
        <Link
          activeClass={classes.active}
          to="Contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Typography variant="h6" className={classes.barText}>
            Contact
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
