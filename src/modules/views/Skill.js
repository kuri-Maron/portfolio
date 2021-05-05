import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  column: {
    columnCount: 2,
    // textAlign: "center",
  },
  li: {
    padding: "5px 0px",
  },
  p: {
    marginLeft: "20px",
  },
}));

const Skill = () => {
  const classes = useStyle();
  return (
    <Container maxWidth="sm">
      <Box ml={3}>
        <p className={classes.p}>実務経験は、ABAPのみです。</p>
        <ul className={classes.column}>
          <li className={classes.li}>ABAP(SAP)</li>
          <li className={classes.li}>javascript</li>
          <li className={classes.li}>React</li>
          <li className={classes.li}>Vue</li>
          <li className={classes.li}>HTML/CSS</li>
          <li className={classes.li}>Flutter(dart)</li>
          <li className={classes.li}>Firebase</li>
          <li className={classes.li}>AWS</li>
          <li className={classes.li}>Docker</li>
          <li className={classes.li}>GitHub actions</li>
          <li className={classes.li}>JAVA</li>
          <li className={classes.li}>C</li>
        </ul>
      </Box>
    </Container>
  );
};

export default Skill;
