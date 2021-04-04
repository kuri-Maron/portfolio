import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import imgPortfolioSite from "../../assets/portfolioSite.png";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
}));

const Works = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <p>hoge</p>
      <Grid container spacing={2}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="サイトのイメージ画像"
              image={imgPortfolioSite}
              title="ポートフォリオサイトのトップページ"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ポートフォリオサイト
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="textSecondary"
                component="p"
              >
                本サイトです。React,
                AWSを使ってみたいという思いから作成しました。
                テストやCI/CDも一応触りました...
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                React/AWS/Docker/GitHub actions/
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              startIcon={<GitHubIcon />}
              className={classes.button}
            >
              GitHub
            </Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default Works;
