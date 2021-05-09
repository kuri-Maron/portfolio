import { Box, Slide } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Top.css";

import imgBlackCat from "../../assets/blackCat_noneTail.png";
import { Stage } from "@inlet/react-pixi";
import CatTail from "../components/CatTail";

const useStyle = makeStyles((theme) => ({
  top: {
    position: "relative",
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
  catBox: {
    position: "absolute",
    right: "10vw",
    bottom: "5vh",
  },
  blackCat: {
    position: "absolute",
  },
  blackCatTail: {
    position: "absolute",
    left: "51%",
    top: "50%",
    // bottom: "5%",
    // opacity: "0",
    // backgroundColor: "transparent",
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
      {/* <Stage
        width={200}
        height={100}
        options={{ autoDensity: true, backgroundColor: 0xffffcc }}
      >
        <CatTail />
      </Stage> */}
      <Box
        height="100px"
        width="100px"
        // bgcolor="pink"
        className={classes.catBox}
      >
        <img
          src={imgBlackCat}
          alt="black cat"
          height="100%"
          width="100%"
          className={classes.blackCat}
        />
        <Stage
          width={100}
          height={50}
          // options={{ autoDensity: true, backgroundColor: 0xfff }}
          // options={{ autoDensity: true, backgroundColor: 0xffffcc }}
          options={{ autoDensity: true, backgroundAlpha: 0 }}
          className={classes.blackCatTail}
        >
          <CatTail />
        </Stage>
        {/* <img
          src={imgBlackCatTail}
          alt="black cat tail"
          width="50%"
          className={classes.blackCatTail}
        /> */}
      </Box>
    </Box>
  );
};

export default Top;
