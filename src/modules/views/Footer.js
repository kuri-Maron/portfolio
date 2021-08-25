import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles({
  footer: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 60,
    },
  },
  p: {
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.p}>&copy; 2021 Shun Kurihara</p>
    </footer>
  );
};

export default Footer;
