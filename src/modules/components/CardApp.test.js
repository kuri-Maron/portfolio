import React from "react";
import { render, screen } from "@testing-library/react";
import CardApp from "./CardApp";
import imgPortfolioSite from "../../assets/portfolioSite.png";

it("テキストとクリック時のリンク先のテスト", () => {
  render(
    <CardApp
      cardName="testCardName"
      text="testカード説明テキスト"
      useTech="Test/C/Java"
      img={imgPortfolioSite}
      appURL="https://www.google.com/?hl=ja"
      githubURL="https://github.com/"
    />
  );

  // カードに必要な文言が表示されているか
  expect(
    screen.getByRole("link", {
      name:
        "サイトのイメージ画像 testCardName testカード説明テキスト Test/C/Java",
    })
  ).toBeInTheDocument();

  //  カードに意図したリンク先URLが設定されているか
  expect(
    screen.getByRole("link", {
      name:
        "サイトのイメージ画像 testCardName testカード説明テキスト Test/C/Java",
    })
  ).toHaveAttribute("href", "https://www.google.com/?hl=ja");

  //   カードのgithubボタンにリンク先URLが設定されているか
  expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
    "href",
    "https://github.com/"
  );
});
