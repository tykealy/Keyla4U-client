import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginDialog from "../components/parent/login-dialog";
import React from "react";
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
      <LoginDialog open={open} onClose={onClose} />

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
