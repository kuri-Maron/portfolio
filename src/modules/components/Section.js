import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme, props) => ({
  box: {
    paddingTop: "14vh",
    paddingBottom: "13vh",
    minHeight: (props) => (props.minHeight ? props.minHeight : "550px"),
  },
  topic: {
    textDecoration: "underline",
    paddingBottom: "60px",
    display: "flex",
    justifyContent: "center",
  },
}));

const Section = React.forwardRef((props, ref) => {
  const classes = useStyles(props);
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
