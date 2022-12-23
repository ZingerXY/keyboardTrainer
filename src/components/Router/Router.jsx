import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Tasks from "../Tasks/Tasks";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/statistic"></Route>
        </Routes>
    )
}

export default Router