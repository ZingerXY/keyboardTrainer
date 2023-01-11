import React from "react";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import Style from "./Home.module.scss";
import WarningDisplay from "../../components/WarningDisplay/WarningDisplay"

const Home = () => {
  return <div className={`${Style["home-page"]}`}>
    <WarningDisplay />
    <KeyboardWrapper />
  </div>
}

export default Home