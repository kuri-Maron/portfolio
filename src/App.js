import "./App.css";
import withRoot from "./modules/withRoot";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Hidden } from "@material-ui/core";
import Top from "./modules/views/Top";
import Section from "./modules/components/Section";
import AppBar from "./modules/views/AppBar";
import BottomNavigation from "./modules/views/BottomNav";

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
      <Hidden smDown>
        <AppBar />
      </Hidden>
      <Hidden mdUp>
        <BottomNavigation />
      </Hidden>
      {/* <Container style={bgcColor}> */}
      {/* <Container disableGutters mx={100} style={{ backgroundColor: "yellow" }}> */}
      <Top />
      {/* TODO: HOCで実装したい */}
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
      {/* </Container> */}
    </div>
  );
}

export default withRoot(App);
