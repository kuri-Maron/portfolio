import { Box, Slide } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Top.css";

const useStyle = makeStyles((theme) => ({
  top: {
    boxSizing: "content-box",
    height: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: "65px",
      height: "calc(100vh - 65px)",
    },
  },
  topText: {
    fontSize: "4vw",
    animation: `$bound 0.8s 1s 1.5`,
  },
  "@keyframes bound": {
    "0%,100%": { transform: "translateY(0) scale(1)" },
    "30%": { transform: "translateY(-25%)" },
    "50%": { transform: "scale(1)" },
    "90%": { top: 0, transform: "translateY(0) scale(1.05,0.8)" },
  },
}));

const Top = () => {
  const classes = useStyle();
  return (
    <Box className={classes.top}>
      {/* TODO: バウンディングのアニメーションを実装する */}
      <Slide direction="down" in={true} timeout={1000}>
        <p className={classes.topText}>Shun Kurihara's portfolio;</p>
      </Slide>
    </Box>
  );
};

export default Top;
