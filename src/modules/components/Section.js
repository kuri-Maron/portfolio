import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "13vh",
    paddingBottom: "13vh",
  },
  topic: {
    // textDecoration: "underline white",
    textDecoration: "underline",
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
      bgcolor={props.isBlack ? "primary.main" : ""}
      color={props.isBlack ? "white" : ""}
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
