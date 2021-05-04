import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: "solid",
    borderBottomColor: lightGreen[500],
  },
  toolbar: {
    // justifyContent: "space-between",
    // justifyContent: "space-around",
    justifyContent: "space-evenly",
  },

  barText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
}));

const CustomAppBar = (props) => {
  // const [mainView, setMainView] = useState();
  const classes = useStyles();

  // const doDebug = (foo, arg) => {
  //   console.log(`run code with arg: ${arg}`);
  //   console.log(foo);
  //   console.log(arg);
  // };

  // useEffect(() => {
  //   if (props.mainView.length >= 1) setMainView(props.mainView);
  // }, [props.mainView]);

  return (
    // TODO: Linkの遷移で位置がずれるのに対策するなら、toolbarと同じスタイル(自分でスタイル上書きしたほうが簡単)の空のdivを入れる
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* <Link href="# " color="inherit" variant="h6">
          Top
        </Link> */}
        {/* <Link
          href="#About"
          color={props.mainView === "About" ? "secondary" : "inherit"}
          variant="h6"
          className={classes.barText}
        > */}
        <Link
          href="#About"
          color={props.mainView === "About" ? "secondary" : "inherit"}
          variant="h6"
          className={classes.barText}
          onClick={() => props.handleClickMainView("About")}
        >
          About
        </Link>
        <Link
          href="#Works"
          color={props.mainView === "Works" ? "secondary" : "inherit"}
          variant="h6"
          className={classes.barText}
          onClick={() => props.handleClickMainView("Works")}
        >
          Works
        </Link>
        <Link
          href="#Skill"
          color={props.mainView === "Skill" ? "secondary" : "inherit"}
          variant="h6"
          className={classes.barText}
          onClick={() => props.handleClickMainView("Skill")}
        >
          Skill
        </Link>
        <Link
          href="#Contact"
          color={props.mainView === "Contact" ? "secondary" : "inherit"}
          variant="h6"
          className={classes.barText}
          onClick={() => props.handleClickMainView("Contact")}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
