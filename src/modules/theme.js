import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { lightGreen, grey } from "@material-ui/core/colors";
// import { green, grey, red } from "@material-ui/core/colors";
// import { green, red } from "@material-ui/core/colors";

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      // main: "#757575",
      main: grey[900],
    },
    secondary: {
      // main: "#ff3366",
      main: lightGreen[500],
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace, sans-serif",
    fontSize: 12,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', 'Work Sans', sans-serif",
  },
});

// const fontHeader = {
//   color: rawTheme.palette.text.primary,
//   fontWeight: rawTheme.typography.fontWeightMedium,
//   fontFamily: rawTheme.typography.fontFamilySecondary,
//   textTransform: "uppercase",
// };

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    // fontHeader,
  },
};

export default responsiveFontSizes(theme);
