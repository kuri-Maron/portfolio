import About from "./About_old";
import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Component } from "react";

// 実装イメージ
{
  /* <S children={"About"}>
    <About/>
</S> */
}

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "13vh",
    paddingBottom: "13vh",
  },
  topic: {
    textDecoration: "underline white",
    marginBottom: "10vh",
    display: "flex",
    justifyContent: "center",
  },
}));

const Section = (props) => {
  const classes = useStyles();
  return (
    <Box
      id={props.sectionName}
      bgcolor="primary.main"
      color="white"
      className={classes.box}
    >
      <Typography variant="h3" className={classes.topic}>
        {props.sectionName}
      </Typography>
      {props.children}
    </Box>
  );
};

export default Section;
