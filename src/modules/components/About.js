import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "13vh",
    paddingBottom: "13vh",

    display: "flex",
    justifyContent: "center",
  },
  topic: {
    textDecoration: "underline white",
    marginBottom: "10vh",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    // <Box bgcolor="primary.main" color="white">
    <Box
      id="about"
      bgcolor="primary.main"
      color="white"
      className={classes.box}
    >
      <Typography variant="h3" className={classes.topic}>
        About
      </Typography>
    </Box>
  );
};

export default About;
