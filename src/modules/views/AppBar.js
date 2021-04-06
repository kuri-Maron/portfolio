import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: "solid",
    borderBottomColor: lightGreen[500],
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
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();
  return (
    // TODO: Linkの遷移で位置がずれるのに対策するなら、toolbarと同じスタイル(自分でスタイル上書きしたほうが簡単)の空のdivを入れる
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* <Link href="# " color="inherit" variant="h6">
          Top
        </Link> */}
        <Link
          href="#About"
          color="secondary"
          variant="h6"
          className={classes.barText}
        >
          About
        </Link>
        <Link
          href="#Works"
          color="inherit"
          variant="h6"
          className={classes.barText}
        >
          Works
        </Link>
        <Link
          href="#tmpBox"
          color="inherit"
          variant="h6"
          className={classes.barText}
        >
          Skill
        </Link>
        <Link
          href="#tmpBox"
          color="inherit"
          variant="h6"
          className={classes.barText}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
