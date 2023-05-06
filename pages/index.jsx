import React from "react";
import styles from "../styles/Home.module.css";
import LoginDialog from "../components/parent/LoginDialog";
import RegisterDialog from "../components/parent/RegisterDialog";
import ModButton from "../components/presentation/ModButton";
export default function Home() {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSingUp, setOpenSignUp] = React.useState(false);

  function onClose() {
    setOpenLogin(false);
    setOpenSignUp(false);
  }
  function handleLogin() {
    setOpenLogin(true);
  }
  function handleRegister() {
    setOpenSignUp(true);
  }
  return (
    <div className={styles.container}>
      <LoginDialog open={openLogin} onClose={onClose} />
      <RegisterDialog
        open={openSingUp}
        title="Sign up Form"
        onClose={onClose}
      />
      <ModButton onClick={handleLogin} buttonTitle="Sign Up" />
      <ModButton onClick={handleRegister} buttonTitle="Login" />
    </div>
  );
}
