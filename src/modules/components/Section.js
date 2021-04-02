import About from "./About";
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
    <Box bgcolor="green">
      aaa {props.sectionName}
      {props.sampleComp()}
      <p>zzz</p>
      <p>{props.children}</p>
    </Box>
  );
};

export default Section;
