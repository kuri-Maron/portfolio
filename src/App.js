// cssファイルは、'styled-components'で代替可能ぽい
import "./App.css";
import withRoot from "./modules/withRoot";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

import Top from "./modules/views/Top";
import About from "./modules/views/About";
import Works from "./modules/views/Works";
import Skill from "./modules/views/Skill";
import Contact from "./modules/views/Contact";
import Section from "./modules/components/Section";
import AppBar from "./modules/views/AppBar";
import BottomNavigation from "./modules/views/BottomNav";
import * as sectionName from "./modules/SectionNameConstants";

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
      <Top />
      {/* TODO: HOCで実装したい */}
      <Section sectionName={sectionName.ABOUT} isBlack>
        <About />
      </Section>
      <Section sectionName={sectionName.WORKS}>
        <Works />
      </Section>
      <Section sectionName={sectionName.SKILL} isBlack>
        <Skill />
      </Section>
      <Section sectionName={sectionName.CONTACT} minHeight="100vh">
        <Contact />
      </Section>
    </div>
  );
}

export default withRoot(App);
