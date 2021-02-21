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
}));

const CustomAppBar = () => {
  const classes = useStyles();
  return (
    // TODO: Linkの遷移で位置がずれるのに対策するなら、toolbarと同じスタイル(自分でスタイル上書きしたほうが簡単)の空のdivを入れる
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link href="# " color="inherit" variant="h6">
          Top
        </Link>
        <Link href="#about" color="secondary" variant="h6">
          About
        </Link>
        <Link href="#tmpBox" color="inherit" variant="h6">
          Works
        </Link>
        <Link href="#tmpBox" color="inherit" variant="h6">
          Skill
        </Link>
        <Link href="#tmpBox" color="inherit" variant="h6">
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
