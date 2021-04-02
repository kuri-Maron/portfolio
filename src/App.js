import "./App.css";
import withRoot from "./modules/withRoot";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Top from "./modules/components/Top";
import Section from "./modules/components/Section";
import AppBar from "./modules/components/AppBar";

import About from "./modules/components/About";
import SampleComp from "./modules/SampleComp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // fontFamily: "'Roboto Mono', monospace",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      {/* <Container style={bgcColor}> */}
      {/* <Container disableGutters mx={100} style={{ backgroundColor: "yellow" }}> */}
      <Top />
      {/* <Box color="primary" bgcolor="pink"> */}
      <Section sectionName="About">
        <About />
      </Section>
      <Box
        id="tmpBox"
        color="secondary.main"
        bgcolor="warning.light"
        height="1000px"
      >
        box!
      </Box>
      <Box
        id="tmpBox"
        color="white"
        bgcolor="info.light"
        height="1000px"
        my={3}
      >
        box2
      </Box>
      {/* </Container> */}
    </div>
  );
}

export default withRoot(App);
