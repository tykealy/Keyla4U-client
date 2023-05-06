import React from "react";
import styles from "../styles/Home.module.css";
import LoginDialog from "../components/parent/LoginDialog";
import RegisterDialog from "../components/parent/RegisterDialog";
import { Button } from "@mui/material";
export default function Home() {
  const [open, setOpen] = React.useState(false);

  function onClose() {
    setOpen(false);
  }
  function handleLogin() {
    setOpen(true);
  }

  return (
    <div className={styles.container}>
      {/* <LoginDialog
        open={open}
        title="Login Form"
        onClose={onClose}
        pl="tykeaboyloy@gmail.com"
      /> */}
      <RegisterDialog open={open} title="Sign up Form" onClose={onClose} />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
