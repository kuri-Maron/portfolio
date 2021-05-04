import "./App.css";
import withRoot from "./modules/withRoot";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Top from "./modules/views/Top";
import Section from "./modules/components/Section";
import AppBar from "./modules/views/AppBar";

import { useInView } from "react-intersection-observer";

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
  const doDebug = () => {
    console.log(inViews);
    console.log(Object.keys(inViews));
    // console.log(Object.values(inViews));
  };
  const classes = useStyles();
  // entry使って、比率判定できるかも。
  const [refAbout, inAboutView] = useInView();
  const [refWorks, inWorksView] = useInView();
  const [refSkill, inSkillView] = useInView();
  const [refContact, inContactView] = useInView();
  // const [mainView, setMainView] = useState();
  const [inViews, setInViews] = useState([]);
  // const inViews = {
  //   About: inAboutView,
  //   Works: inWorksView,
  //   Skill: inSkillView,
  //   Contact: inContactView,
  // };

  // useEffect(() => {
  //   if (
  //     Object.values(inViews).filter((inView) => inView === true).length === 1
  //   ) {
  //     setMainView(
  //       Object.keys(inViews).filter((key) => inViews[key] === true)[0]
  //     );
  //   }
  // }, [inViews]);

  const handleClickMainView = (viewName) => {
    setInViews([viewName, ...inViews]);
  };

  const editInViews = (inView, viewName) => {
    if (inView === true) {
      setInViews([...inViews, viewName]);
    } else {
      // if (inViews.length > 1)
      setInViews([...inViews].filter((inView) => inView !== viewName));
    }
  };

  // About
  useEffect(() => {
    editInViews(inAboutView, "About");
  }, [inAboutView]);

  // Works
  useEffect(() => {
    editInViews(inWorksView, "Works");
  }, [inWorksView]);

  // Skill
  useEffect(() => {
    editInViews(inSkillView, "Skill");
  }, [inSkillView]);

  // Contact
  useEffect(() => {
    editInViews(inContactView, "Contact");
  }, [inContactView]);

  return (
    <div className={classes.root}>
      {/* <AppBar mainView={inViews[inViews.length - 1]} /> */}
      <AppBar mainView={inViews[0]} handleClickMainView={handleClickMainView} />
      {/* <Container style={bgcColor}> */}
      {/* <Container disableGutters mx={100} style={{ backgroundColor: "yellow" }}> */}
      <Top />
      <Button onClick={doDebug}>debug</Button>
      <Section sectionName="About" isBlack ref={refAbout}>
        <About />
      </Section>
      <Button onClick={doDebug}>debug</Button>
      <Section sectionName="Works" ref={refWorks}>
        <Works />
      </Section>
      <Button onClick={doDebug}>debug</Button>
      <Section sectionName="Skill" isBlack ref={refSkill}>
        <Skill />
      </Section>
      <Section sectionName="Contact" ref={refContact}>
        <Contact />
      </Section>
      <Button onClick={doDebug}>debug</Button>
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
