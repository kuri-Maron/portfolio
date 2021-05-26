import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import AppsIcon from "@material-ui/icons/Apps";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";

import { Link, scroller } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  test: { width: "100%", position: "fixed", bottom: 0 },
  root: {
    // flexGrow: 1,
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1100,
    backgroundColor: theme.palette.primary.main,
    borderTop: "solid",
    borderTopColor: theme.palette.secondary.main,
    "& .MuiBottomNavigationAction-root": {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    "& .Mui-selected": {
      // color: lightGreen[500],
      color: theme.palette.secondary.main,
    },
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [navValue, setNavValue] = React.useState();
  //   スクロールメソッド時に不要なイベント発火を制御
  const [doneScroll, setDoneScroll] = React.useState(false);

  // ボトムナビゲーションをクリック時に選択値をセットする
  const handleChange = (event, newValue) => {
    setNavValue(newValue);
  };

  //
  const handleActive = (activeName) => {
    if (!doneScroll) {
      setNavValue(activeName);
    } else if (doneScroll && navValue === activeName) {
      setDoneScroll(false);
    }
  };

  const scrollTo = (targetID) => {
    setDoneScroll(true);
    scroller.scrollTo(targetID, { duration: 500, smooth: true });
  };

  return (
    <BottomNavigation
      value={navValue}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label={
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive("About")}
          >
            About
          </Link>
        }
        value="About"
        icon={<PersonIcon />}
        onClick={() => scrollTo("About")}
      />
      <BottomNavigationAction
        label={
          <Link
            to="Works"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive("Works")}
          >
            Works
          </Link>
        }
        value="Works"
        icon={<AppsIcon />}
        onClick={() => scrollTo("Works")}
      />
      <BottomNavigationAction
        label={
          <Link
            to="Skill"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive("Skill")}
          >
            Skill
          </Link>
        }
        value="Skill"
        icon={<BuildIcon />}
        onClick={() => scrollTo("Skill")}
      />
      <BottomNavigationAction
        label={
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive("Contact")}
          >
            Contact
          </Link>
        }
        value="Contact"
        icon={<EmailIcon />}
        onClick={() => scrollTo("Contact")}
      />
    </BottomNavigation>
  );
}
