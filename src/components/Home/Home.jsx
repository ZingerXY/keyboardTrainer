import React from "react";
import RunningString from "../RunningString/RunningString";
import Keyboard from "../Keyboard/Keyboard";

const Home = () => {
    return (
        <div className="home-page">
            <RunningString />
            <Keyboard />
        </div>
    )
}

export default Home