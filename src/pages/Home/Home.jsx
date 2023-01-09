import React from "react";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import './Home.scss'
import WarningDisplay from "../../components/WarningDisplay/WarningDisplay"

const Home = () => {
  return <div className="home-page">
    <WarningDisplay />
    <KeyboardWrapper />
  </div>
}

export default Home