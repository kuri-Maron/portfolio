import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { green, grey } from "@material-ui/core/colors";

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      // main: lightGreen[500],
      main: green[800],
    },
    divider: "rgba(128, 128, 128, 0.7)",
    background: {
      placeholder: grey[200],
    },
  },
  typography: {
    fontFamily:
      "'Roboto Mono', 'Yu Gothic', '游ゴシック', YuGothic, '游ゴシック体', monospace, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontFamilySecondary: "'Roboto Condensed', 'Work Sans', sans-serif",
  },
});

export default responsiveFontSizes(rawTheme);

// const theme = {
//   ...rawTheme,
//   palette: {
//     ...rawTheme.palette,
//   },
//   typography: {
//     ...rawTheme.typography,
//     // fontHeader,
//   },
// };

// export default responsiveFontSizes(theme);
