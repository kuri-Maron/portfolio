import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Grid, Container } from "@material-ui/core";
import { Divider, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  labelText: {
    fontWeight: "bold",
  },
  divider: {
    background: theme.palette.divider,
  },
  gridContainer: {
    margin: "10px",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1} className={classes.gridContainer}>
        <Grid item xs={10} sm={3}>
          <Typography variant="body1" className={classes.labelText}>
            名前
          </Typography>
          <Hidden smUp>
            <Divider classes={{ root: classes.divider }} />
          </Hidden>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Typography variant="body1">栗原　舜(Kurihara Shun)</Typography>
        </Grid>
        <Grid item xs={10} sm={3}>
          <Typography variant="body1" className={classes.labelText}>
            職業
          </Typography>
          <Hidden smUp>
            <Divider classes={{ root: classes.divider }} />
          </Hidden>
        </Grid>
        <Grid item xs={10} sm={8}>
          <Typography variant="body1">SIer(SAP:ERPパッケージ)</Typography>
        </Grid>
      </Grid>
      <Box width="95%" mt={5} mx={1}>
        {`今はSIerとして働いています。モダンな環境での開発に憧れて転職活動中です。フロントエンド(Vue,React)やFirebase、AWS、モバイル(Flutter)に興味があり勉強しています。 最近では、AWS Amplifyがアツいです！`}
      </Box>
    </Container>
  );
};

export default About;
