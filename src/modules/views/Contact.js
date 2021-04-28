import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import FormSnackbar from "../components/FormSackBar";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

// フォームの初期値
const defaultValues = { name: "", Email: "", contents: "" };

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

  const onSubmit = (date) => {
    // TODO: メール送信APIを作成して、非同期通信処理を実装する。（テストもしたい）
    console.log(date);
  };

  const handleClose = () => {
    setOpenSbackbar(false);
  };

  useEffect(() => {
    // フォーム送信が成功したら、リセットしてスナックバー表示
    if (formState.isSubmitSuccessful) {
      reset();
      setOpenSbackbar(true);
    }
  }, [formState, reset]);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <p>
        何かありましたら、ご気軽にご連絡ください。
        <br />
        twitterでもご連絡お待ちしています。
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input defaultValue="test" {...register("example")} />
        <br />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br /> */}

        {/* <TextField
          fullWidth
          variant="filled"
          label="名前"
          inputRef={register("name2")}
        /> */}

        {/* <TextField
          label="タイトル(必須)"
          type="text"
          fullWidth
          margin="normal"
          inputRef={register("title")}
          error={Boolean(errors.title)}
          helperText={errors.title && "タイトルは20文字以内にして下さい。"}
        /> */}

        {/* <Controller
          render={({ field }) => (
            <TextField {...field} fullWidth variant="filled" label="名前" />
          )}
          name="TextField"
          control={control}
          rules={{ required: true }}
        /> */}

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
              error={Boolean(errors.Email)}
              helperText={errors.Email && errors.Email.message}
            />
          )}
          name="Email"
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

        {/* <TextField
          {...field}
          fullWidth
          variant="filled"
          label="内容"
          required
          error={Boolean(errors.contents)}
          helperText={errors.contents && errors.contents.message}
        /> */}

        {/* <Controller
          rules={{ required: "必須だと" }}
          render={({ field }) => {
            return <input {...field} />;
          }}
          defaultValue={""}
          control={control}
          name="test"
        /> */}

        <Button type="submit" variant="outlined" color="secondary">
          送信
        </Button>
      </form>
      <FormSnackbar open={Boolean(openSnackbar)} handleClose={handleClose} />
    </Container>
  );
};

export default Contact;
