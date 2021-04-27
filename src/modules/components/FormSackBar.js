import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const FormSnackbar = (props) => {
  // スネークバーの開閉state
  const [open2, setOpen2] = useState(false);
  // 初回レンダリングが完了済みかどうかフラグ
  const didMountRef = useRef(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen2(false);
    props.handleClose(); //  親コンポーネントの開閉フラグをfalse
  };

  useEffect(() => {
    if (didMountRef.current) {
      setOpen2(props.open);
    } else {
      didMountRef.current = true;
    }
  }, [props.open]);
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose}
        message="送信完了しました。"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default FormSnackbar;
