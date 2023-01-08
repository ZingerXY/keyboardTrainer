import React from "react";
import { KeyboardWrapper } from "../KeyboardWrapper";
import './Home.scss'
import WarningDisplay from "../WarningDisplay/WarningDisplay"

const Home = () => {
  return <div className="home-page">
    <WarningDisplay />
    <KeyboardWrapper />
  </div>
}

export default Home