import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Tasks from "./Tasks/Tasks";
import Rating from "./Rating/Rating";
import Statistics from "./Statistics/Statistics";
import Profile from "./Profile/Profile";
import {NotFound} from "./NotFound";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/stats/*" element={<Statistics/>}></Route>
            <Route path="/rating" element={<Rating />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default Router
