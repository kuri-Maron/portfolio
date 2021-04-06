import { Container, Grid } from "@material-ui/core";
import React from "react";
import imgPortfolioSite from "../../assets/portfolioSite.png";

import CardApp from "../components/CardApp";

const cardInfo = {
  cardName: "ポートフォリオサイト",
  text: `本サイトです。React, AWSを使ってみたいという思いから作成しました。
  テストやCI/CDも一応触りました...`,
  useTech: "React/AWS/Docker/GitHub actions/",
  img: imgPortfolioSite,
};

const Works = () => {
  // console.log(cardInfo.img);
  return (
    <Container maxWidth="sm">
      <p>hoge</p>
      <Grid container spacing={2}>
        <CardApp
          cardName={cardInfo.cardName}
          text={cardInfo.text}
          useTech={cardInfo.useTech}
          imgPortfolioSite={cardInfo.img}
        />
      </Grid>
    </Container>
  );
};

export default Works;