import "./App.css";
import withRoot from "./modules/withRoot";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Top from "./modules/views/Top";
import Section from "./modules/components/Section";
import AppBar from "./modules/views/AppBar";

import About from "./modules/views/About";
import Works from "./modules/views/Works";
import Skill from "./modules/views/Skill";
import Contact from "./modules/views/Contact";

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
      <Section sectionName="About" isBlack>
        <About />
      </Section>
      <Section sectionName="Works">
        <Works />
      </Section>
      <Section sectionName="Skill" isBlack>
        <Skill />
      </Section>
      <Section sectionName="Contact">
        <Contact />
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
