import React from "react";
import styles from "../styles/Home.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { RecoilStates } from "../state/state";
import CardSlider from "../components/presentation/CardSlider";
import Hero from "../components/parent/Hero";
import Footer from "../components/parent/Footer";
import FeatureProperties from "../components/presentation/FeatureProperties";
export default function Home() {
  const { signupState, loginState, loggedInState } = RecoilStates;
  const [openLogin, setOpenLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const data = [
    {
      title: "football",
      description: "This is card 1",
      image: "Football.jpeg",
    },
    {
      title: "volleyball",
      description: "This is card 2",
      image: "Volleyball.jpeg",
    },
    { title: "golf", description: "This is card 3", image: "Golf.jpeg" },
    {
      title: "basketball",
      description: "This is card 4",
      image: "Basketball.jpeg",
    },
    { title: "tennis", description: "This is card 6", image: "Tennis.jpeg" },
  ];

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
      <Hero />
      <CardSlider data={data} />
      <br /> <br /> <br />
      <FeatureProperties />
      <Footer />
    </div>
  );
}
