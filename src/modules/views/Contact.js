import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
// import FormSnackbar from "../components/FormSackBar";
import FormSnackbar from "../components/FormSnackbar";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  submitButton: {
    // color: theme.palette.getContrastText(theme.palette.secondary.main),
    marginTop: theme.spacing(2),
  },
}));

// フォームの初期値
const defaultValues = { name: "", email: "", contents: "" };

const Contact = () => {
  const classes = useStyle();
  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({ defaultValues });

  // スナックバーの開閉フラグ
  const [openSnackbar, setOpenSbackbar] = useState(false);
  // const isResponseSuccessful = useRef(false);
  const [isResponseSuccessful, setIsResponseSuccessful] = useState(false);
  const onSubmit = async (data) => {
    // TODO: メール送信APIを作成して、非同期通信処理を実装する。（テストもしたい）
    console.log(data);
    console.log(JSON.stringify(data));
    const response = await fetch(
      "https://nfmtngds29.execute-api.ap-northeast-1.amazonaws.com/dev",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    console.log(response);
    console.log("api通信完了");
    if (response.ok) setIsResponseSuccessful(true);
    else alert("メール送信に失敗しました。");
  };

  const handleClose = () => {
    setOpenSbackbar(false);
    console.log("2スナックバーを閉じる");
  };

  useEffect(() => {
    console.log("メインEffect起動");
    // フォーム送信が成功したら、リセットしてスナックバー表示
    if (formState.isSubmitSuccessful && isResponseSuccessful) {
      // console.log(isResponseSuccessful);
      setOpenSbackbar(true);
      reset();
      // if (isResponseSuccessful) {
      // }
    }
  }, [formState, reset]);
  // }, [formState]);

  // useEffect(() => {
  //   console.log("formStateが変化したかも。");
  //   console.log(formState.isSubmitSuccessful);
  //   if (formState.isSubmitSuccessful) console.log("true時のみ");
  //   // setOpenSbackbar(true);
  // }, [formState]);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <p>{openSnackbar ? "true" : "false"} aaaa</p>
      <Button
        onClick={() => {
          setOpenSbackbar((bool) => !bool);
        }}
      >
        スナックバーの開閉
      </Button>
      <Button onClick={() => console.error("エラー出てますよ！")}>
        エラーログ出力
      </Button>
      <p>
        何かありましたら、ご気軽にご連絡ください。
        <br />
        twitterでもご連絡お待ちしています。
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="filled"
              label="名前 *"
              error={Boolean(errors.name)}
              helperText={errors.name && errors.name.message}
            />
          )}
          name="name"
          control={control}
          rules={{
            required: "必須入力です。",
            maxLength: {
              value: 20,
              message: "２０文字以内で入力してください。",
            },
          }}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              fullWidth
              variant="filled"
              label="E-mail *"
              error={Boolean(errors.email)}
              helperText={errors.email && errors.email.message}
            />
          )}
          name="email"
          control={control}
          rules={{ required: "必須入力です。" }}
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="filled"
              label="内容 *"
              multiline
              rows="5"
              error={Boolean(errors.contents)}
              helperText={errors.contents && errors.contents.message}
            />
          )}
          name="contents"
          control={control}
          rules={{
            required: "必須入力です。",
            maxLength: {
              value: 200,
              message: "200文字以内で入力してください。",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={classes.submitButton}
        >
          送信
        </Button>
      </form>
      <FormSnackbar
        open={Boolean(openSnackbar)}
        handleClose={handleClose}
        message={
          isResponseSuccessful.current
            ? "送信完了しました。"
            : "送信が失敗しました。"
        }
      />
    </Container>
  );
};

export default Contact;
