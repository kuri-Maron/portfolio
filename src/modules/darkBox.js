import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// 共通化しなくてもできるかも。
const useStylesDarkBox = makeStyles((theme) => ({
  darkBox: {
    //   backgroundColor:
    borderBottomColor: lightGreen[500],
  },
}));
