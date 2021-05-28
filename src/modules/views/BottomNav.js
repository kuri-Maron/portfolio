import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import AppsIcon from "@material-ui/icons/Apps";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";
import * as sectionName from "../SectionNameConstants";

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

  // マウススクロールによる画面表示にアクティブにする
  const handleActive = (activeName) => {
    if (!doneScroll) {
      setNavValue(activeName);
    } else if (doneScroll && navValue === activeName) {
      setDoneScroll(false);
    }
  };

  // 対象要素までスクロール
  const scrollTo = (targetID) => {
    setDoneScroll(true);
    scroller.scrollTo(targetID, { duration: 500, smooth: true });
  };

  // ナビの選択値をセットし、スクロールの挙動を制御
  const clickActive = (activeName) => {
    setDoneScroll(true);
    setNavValue(activeName);
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
            to={sectionName.ABOUT}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive(sectionName.ABOUT)}
            onClick={() => clickActive(sectionName.ABOUT)}
          >
            About
          </Link>
        }
        value={sectionName.ABOUT}
        icon={<PersonIcon />}
        onClick={() => scrollTo(sectionName.ABOUT)}
      />
      <BottomNavigationAction
        label={
          <Link
            to={sectionName.WORKS}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive(sectionName.WORKS)}
            onClick={() => clickActive(sectionName.WORKS)}
          >
            Works
          </Link>
        }
        value={sectionName.WORKS}
        icon={<AppsIcon />}
        onClick={() => scrollTo(sectionName.WORKS)}
      />
      <BottomNavigationAction
        label={
          <Link
            to={sectionName.SKILL}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive(sectionName.SKILL)}
            onClick={() => clickActive(sectionName.SKILL)}
          >
            Skill
          </Link>
        }
        value={sectionName.SKILL}
        icon={<BuildIcon />}
        onClick={() => scrollTo(sectionName.SKILL)}
      />
      <BottomNavigationAction
        label={
          <Link
            to={sectionName.CONTACT}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleActive(sectionName.CONTACT)}
            onClick={() => clickActive(sectionName.CONTACT)}
          >
            Contact
          </Link>
        }
        value={sectionName.CONTACT}
        icon={<EmailIcon />}
        onClick={() => scrollTo(sectionName.CONTACT)}
      />
    </BottomNavigation>
  );
}
