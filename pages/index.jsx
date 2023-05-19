import React from "react";
import styles from "../styles/Home.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilStates } from "../state/state";
export default function Home() {
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  function onClose() {
    setOpenLogin(false);
    setSignup(false);
  }
  function handleLogin() {
    setOpenLogin(true);
  }
  function handleLogout() {
    localStorage.removeItem("user");
    setLoggedIn(false);
  }
  return <div className={styles.container}></div>;
}
