import { Box } from "@material-ui/core";
import React from "react";
import "./Top.css";

const top = () => {
  return (
    <Box className="top">
      {/* TODO: バウンディングのアニメーションを実装する */}
      <p>Shun Kurihara's portfolio;</p>
    </Box>
  );
};

export default top;
