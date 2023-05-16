import React from "react";
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/parent/MainNavigation";
export default function Home() {
  
  return (
    <div className={styles.container}>
      <MainNavigation />
    </div>
  );
}
