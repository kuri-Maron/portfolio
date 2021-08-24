import { Container, Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import React, { useEffect, useState } from "react";
import Amplify, { API, Storage } from "aws-amplify";
import awsExports from "../../aws-exports";
import CardApp from "../components/CardApp";

Amplify.configure(awsExports);

const Works = () => {
  const [cardData, setCardData] = useState();

  //  初回レンダリング時のみ
  useEffect(() => {
    // keyから画像URLを取得
    const fetchImg = async (imgKey) => {
      try {
        const img = await Storage.get(imgKey);
        return img;
      } catch (err) {
        console.error(err);
      }
    };

    // カードに表示するデータを取得
    const fetchCardData = async () => {
      try {
        // TODO: 命名が微妙
        const data = await API.get("apiWorks", "/works/CardData");
        // 画像のkeyから、S3の画像URLを取得
        const dataWithImg = await Promise.all(
          data.map(async (value) => {
            if (value.imgKey) {
              const img = await fetchImg(value.imgKey);
              return { ...value, img };
            }
          })
        );
        setCardData([...dataWithImg]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCardData();
  }, []);

  // レンダリング関数： api取得したデータの数だけ、カードを表示
  const displayCards = () => {
    // TODO: データのバリデーションはどこで実施すべきか？
    return cardData.map((data) => {
      return (
        <Grid item xs={12} sm={6} key={data.cardName}>
          {/* 展開代入でprops渡せるかも？ */}
          <CardApp
            cardName={data.cardName}
            text={data.text}
            useTech={data.useTech}
            img={data.img}
            appURL={data.appURL}
            githubURL={data.githubURL}
          />
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      {!cardData && <LinearProgress />}
      <Grid container spacing={3}>
        {cardData && displayCards()}
      </Grid>
    </Container>
  );
};

export default Works;
