import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/"  element={<Home />}>
            </Route>
            <Route path="/statistic"></Route>
        </Routes>
    )
}

export default Router