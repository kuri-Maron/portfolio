import { Box } from "@material-ui/core";
import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <Box className="top">
      {/* TODO: バウンディングのアニメーションを実装する */}
      <p className="top-text">Shun Kurihara's portfolio;</p>
    </Box>
  );
};

export default Top;
