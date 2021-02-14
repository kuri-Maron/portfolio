// import logo from "./logo.svg";
// import './App.css';

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Top from "./components/Top";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// const bgcColor = {
//   // backgroundColor: "#ffff00",
//   backgroundColor: "red",
// };

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* TODO: Appbarをコンポーネント抽出する */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* <Container style={bgcColor}> */}
      {/* <Container disableGutters mx={100} style={{ backgroundColor: "yellow" }}> */}
      <Top />
      <Box color="success.main" bgcolor="primary.secondary">
        box!
      </Box>
      {/* </Container> */}
    </div>
  );
}

export default App;
