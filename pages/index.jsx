import React from "react";
import styles from "../styles/Home.module.css";
import LoginDialog from "../components/parent/LoginDialog";
import RegisterDialog from "../components/parent/RegisterDialog";
import ModButton from "../components/presentation/ModButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilStates } from "../state/state";
import AboutUs from "../components/presentation/AboutUs";
import ContactUsForm from "../components/presentation/ContactUsForm";
export default function Home() {
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const signup = useRecoilValue(signupState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  function onClose() {
    setOpenLogin(false);
  }
  function handleLogin() {
    setOpenLogin(true);
  }
  function handleLogout() {
    localStorage.removeItem("user");
    setLoggedIn(false);
  }
  return (
    <div className={styles.container}>
      <LoginDialog open={openLogin} onClose={onClose} />
      <RegisterDialog open={signup} title="Sign up Form" onClose={onClose} />
      {!loggedIn ? (
        <ModButton onClick={handleLogin} buttonTitle="Login" />
      ) : (
        <ModButton onClick={handleLogout} buttonTitle="Logout" />
      )}
      {/* <ContactUsForm/> */}
      <AboutUs/>
    </div>
  );
}
