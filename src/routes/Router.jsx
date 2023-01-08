import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream:src/components/Router/Router.jsx
import Home from "../Home/Home";
import Tasks from "../Tasks/Tasks";
import Statistics from "../Statistics/Statistics";
import Rating from "../Rating/Rating";
=======
import Home from "./Home/Home";
import Tasks from "./Tasks/Tasks";
import Statistics from "./Statistics/Statistics";
import Rating from "./Rating/Rating";
import Registration from "./Registration/Registration";
import Authorization from "./Authorization/Authorization";
>>>>>>> Stashed changes:src/routes/Router.jsx

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/stats/*" element={<Statistics/>}></Route>
            <Route path="/rating" element={<Rating />}></Route>
        </Routes>
    )
}

export default Router
