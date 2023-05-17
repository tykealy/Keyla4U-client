import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/parent/MainNavigation";
export default function Home() {
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  //check if the user is logged in
  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) == null
      ? setLoggedIn(false)
      : setLoggedIn(true);
  }, []);

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
  return (
    <div className={styles.container}>
      <MainNavigation />
    </div>
  );
}
