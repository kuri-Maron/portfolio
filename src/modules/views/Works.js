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
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {" "}
          <CardApp
            cardName={cardInfo.cardName}
            text={cardInfo.text}
            useTech={cardInfo.useTech}
            imgPortfolioSite={cardInfo.img}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardApp
            cardName={cardInfo.cardName}
            text={cardInfo.text}
            useTech={cardInfo.useTech}
            imgPortfolioSite={cardInfo.img}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Works;
