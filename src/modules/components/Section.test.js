import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "./Section";

it("セクションネームと子要素のレンダリングをテスト", () => {
  render(
    <Section sectionName="testComp">
      <p>Children element.</p>
    </Section>
  );

  expect(
    screen.getByRole("heading", { name: /testcomp/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/XXXchildren element./i)).toBeInTheDocument();
});
