import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Amplify, { API } from "aws-amplify";
// import awsExports from "./aws-exports";
import awsExports from "../../aws-exports";

import imgPortfolioSite from "../../assets/portfolioSite.png";

import CardApp from "../components/CardApp";

Amplify.configure(awsExports);

const cardInfo = {
  cardName: "ポートフォリオサイト",
  text: `本サイトです。React, AWSを使ってみたいという思いから作成しました。
  テストやCI/CDも一応触りました...`,
  useTech: "React/AWS/Docker/GitHub actions/",
  img: imgPortfolioSite,
  appURL: "https://www.notion.so/with-React-de12ff2d00204347ace5bc15ab943c22",
  githubURL: "https://github.com/kuri-Maron/portfolio",
};

const Works = () => {
  const fetchCardData = async () => {
    try {
      const itemData = await API.get("apiWorks", "/works/CardData");
      console.log(itemData);
    } catch (err) {
      console.log("error fetching items");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* TODO:下記、nodeはforEachなどで繰り返し表示できるように関数化させる */}
        <Grid item xs={12} sm={6}>
          <CardApp
            cardName={cardInfo.cardName}
            text={cardInfo.text}
            useTech={cardInfo.useTech}
            img={cardInfo.img}
            appURL={cardInfo.appURL}
            githubURL={cardInfo.githubURL}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardApp
            cardName={cardInfo.cardName}
            text={cardInfo.text}
            useTech={cardInfo.useTech}
            img={cardInfo.img}
            appURL={cardInfo.appURL}
            githubURL={cardInfo.githubURL}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Works;
