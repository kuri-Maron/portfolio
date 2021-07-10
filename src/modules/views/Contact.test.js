import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  const dummyResponse = Promise.resolve({
    ok: true,
    status: 200,
    json: () => {
      return {};
    },
  });
  // fetch APIのモック
  let mockFetch;

  beforeEach(() => {
    render(<Contact />);
    mockFetch = jest
      .spyOn(global, "fetch")
      .mockImplementation(() => dummyResponse);
  });

  afterEach(() => {
    mockFetch.mockRestore();
  });

  it("validation:必須入力のエラー", async () => {
    expect(screen.queryByText("必須入力です。")).toBeNull();
    await act(async () => fireEvent.submit(screen.getByRole("button")));
    expect(await screen.findAllByText("必須入力です。")).toHaveLength(3);
    expect(mockFetch).not.toBeCalled();

    // 下記では、エラーテキストが抽出できなかった（actとwaitForの違いがわからず）
    // fireEvent.submit(screen.getByRole("button"));
    // await waitFor(() => screen.debug());
  });

  it("validation:「名前」項目の最大文字数のエラー", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: "名前 *" }), {
      target: {
        value: "123456789X123456789X1",
      },
    });

    await act(async () => fireEvent.submit(screen.getByRole("button")));

    expect(
      await screen.findAllByText("２０文字以内で入力してください。")
    ).toHaveLength(1);
    expect(mockFetch).not.toBeCalled();
  });

  //   emailのtype属性による書式バリデーションがテストコード上では、期待通りの動作をしないためテストを無効化する
  xit("validation: 「email」項目のメールアドレス形式のエラー", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: "E-mail *" }), {
      target: {
        value: "hoge.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: "名前 *" }), {
      target: {
        value: "test name",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: "内容 *" }), {
      target: {
        value: "test contents",
      },
    });

    await act(async () => fireEvent.submit(screen.getByRole("button")));

    // type=email属性によるバリデーションができない（実機のブラウザだと、fetch（上位メソッドonSubmitは発火しない））
    expect(mockFetch).not.toBeCalled();
    expect(screen.getByRole("textbox", { name: "E-mail *" }).value).toBe(
      "hoge.com"
    );
  });

  //   正常に送信できる（fetchの呼び出しが１回になっている）
  it("正常にフォーム送信できる", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: "名前 *" }), {
      target: {
        value: "test name",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: "E-mail *" }), {
      target: {
        value: "kuridev.test@gmail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: "内容 *" }), {
      target: {
        value: `test
contents`,
      },
    });

    await act(async () => fireEvent.submit(screen.getByRole("button")));

    expect(mockFetch).toBeCalled();
    expect(screen.getByRole("textbox", { name: "名前 *" }).value).toBe("");
    expect(screen.getByRole("textbox", { name: "E-mail *" }).value).toBe("");
    expect(screen.getByRole("textbox", { name: "内容 *" }).value).toBe("");
    expect(screen.getByText("送信完了しました。")).toBeInTheDocument();
    // TODO: スナックバーが時間経過で非表示になるロジックまで検証できるとよい
  });
});
