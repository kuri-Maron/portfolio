import { render, screen } from "@testing-library/react";
import App from "./App";

// WebGL関連で、正常にテスト実行できないので無効化する
xit("renders learn react link", () => {
  render(<App />);
  const titleElement = screen.getByText(/shun kurihara's portfolio/i);
  expect(titleElement).toBeInTheDocument();
});
