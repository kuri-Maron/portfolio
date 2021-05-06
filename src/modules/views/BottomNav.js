import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import AppsIcon from "@material-ui/icons/Apps";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";

import { lightGreen } from "@material-ui/core/colors";
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
      color: lightGreen[500],
    },
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  //   スクロールメソッド時に不要なイベント発火を制御
  const [doneScroll, setDoneScroll] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleActive = (activeName) => {
    if (doneScroll === false) {
      setValue(activeName);
    } else if (doneScroll === true && value === activeName) {
      setDoneScroll(false);
    }
  };

  const scrollTo = (targetID) => {
    setDoneScroll(true);
    scroller.scrollTo(targetID, { duration: 500, smooth: true });
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label={
          <Link to="About" spy={true} onSetActive={() => handleActive("About")}>
            About
          </Link>
        }
        value="About"
        icon={<PersonIcon />}
        onClick={() => scrollTo("About")}
      />
      <BottomNavigationAction
        label={
          <Link to="Works" spy={true} onSetActive={() => handleActive("Works")}>
            Works
          </Link>
        }
        value="Works"
        icon={<AppsIcon />}
        onClick={() => scrollTo("Works")}
      />
      <BottomNavigationAction
        label={
          <Link to="Skill" spy={true} onSetActive={() => handleActive("Skill")}>
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
