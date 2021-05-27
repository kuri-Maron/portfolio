import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "14vh",
    paddingBottom: "13vh",
    // minHeight: "550px",
    // minHeight: "100vh",
    height: "100vh",
    maxHeight: "1100px",
    // display: "flex",
    // alignItems: "center",
    // flexWrap: "wrap",
  },
  topic: {
    // textDecoration: "underline white",
    textDecoration: "underline",
    // marginBottom: "10px",
    paddingBottom: "60px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Section = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Box
      ref={ref}
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
});

export default Section;
