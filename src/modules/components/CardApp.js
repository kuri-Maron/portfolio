import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  makeStyles,
  CardActionArea,
  Divider,
} from "@material-ui/core";
import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
}));

const CardApp = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea
        href={props.appURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          alt="サイトのイメージ画像"
          image={props.img}
          title={props.cardName}
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardName}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {props.text}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {props.useTech}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          startIcon={<GitHubIcon />}
          className={classes.button}
          href={props.githubURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default CardApp;
