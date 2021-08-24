import React from "react";
import { render, screen } from "@testing-library/react";
import Top from "./Top";

// WebGL関連で正常にテストできないので無効化
xit("Topコンポーネントの基本的な要素をテスト", () => {
  render(<Top />);

  screen.debug();
});
