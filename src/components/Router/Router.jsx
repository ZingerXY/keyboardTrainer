import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";

const Router = () => {
    return (
        <Routes>
            <Route path="/"  element={<Home />}>
            </Route>
            <Route path="/statistics" element={<Statistics/>}></Route>
        </Routes>
    )
}

export default Router