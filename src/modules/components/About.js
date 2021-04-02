import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";
import { Divider, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "13vh",
    paddingBottom: "13vh",

    // display: "flex",
    // justifyContent: "center",
    // textAlign: "center",
  },
  topic: {
    textDecoration: "underline white",
    marginBottom: "10vh",

    display: "flex",
    justifyContent: "center",
  },
  labelText: {
    fontWeight: "bold",
    // textDecoration: "underline white",
    // textUnderlineOffset: "auto",
  },
  divider: {
    // Theme Color, or use css color in quote
    background: theme.palette.divider,
  },
  gridContainer: {
    margin: "10px",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    // <Box bgcolor="primary.main" color="white">
    <Box
      id="about"
      bgcolor="primary.main"
      color="white"
      className={classes.box}
    >
      <Typography variant="h3" className={classes.topic}>
        About
      </Typography>
      <Container maxWidth="sm">
        <Grid container spacing={1} className={classes.gridContainer}>
          {/* <Grid item xs={2}></Grid> */}
          <Grid item xs={10} sm={3}>
            <Typography variant="body1" className={classes.labelText}>
              名前
            </Typography>
            <Hidden smUp>
              <Divider classes={{ root: classes.divider }} />
            </Hidden>
          </Grid>
          {/* <Divider
            orientation="vertical"
            flexItem
            classes={{ root: classes.divider }}
          /> */}
          {/* <Grid item xs={2} sm="auto"></Grid> */}
          <Grid item xs={10} sm={8}>
            <Typography variant="body1">栗原　舜(Kurihara Shun)</Typography>
          </Grid>
          {/* <Grid item xs={2}></Grid> */}
          <Grid item xs={10} sm={3}>
            <Typography variant="body1" className={classes.labelText}>
              職業
            </Typography>
            <Hidden smUp>
              <Divider classes={{ root: classes.divider }} />
            </Hidden>
          </Grid>
          {/* <Grid item xs={2} sm="auto"></Grid> */}
          <Grid item xs={10} sm={8}>
            <Typography variant="body1">SIer(SAP:ERPパッケージ)</Typography>
          </Grid>
        </Grid>
        <Box width="95%" mt={5}>
          高校時代からプログラミングを学び始め、今はSIerとして働いています。
          モダンな環境での開発に憧れて転職活動中です。
          フロントエンド(Vue,React)やFirebase,AWS,
          モバイル(Flutter)に興味があり学習中です。
        </Box>
      </Container>
    </Box>
  );
};

export default About;
