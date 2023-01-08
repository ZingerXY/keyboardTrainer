import React from "react";
import GraphStyles from './Graph.module.scss';
<<<<<<< Updated upstream:src/components/Graph/Graph.jsx
import TheGraph from "./TheGraph";
import { NavLink, Link } from "react-router-dom";
=======
import Graph from "./graph/Graph";
import {NavLink, useLocation} from "react-router-dom";
>>>>>>> Stashed changes:src/components/GraphComponent/GraphComponent.jsx
import { Route, Routes } from "react-router-dom";
import {data as accuracyGraphData} from './graph/graphsData/accuracyGraph';
import {data as errorGraphData} from './graph/graphsData/errorGraph';
import {data as speedGraphData} from './graph/graphsData/speedGraph';

<<<<<<< Updated upstream:src/components/Graph/Graph.jsx
const Graph = () => {

=======
const GraphComponent = () => {
    const location = useLocation()
>>>>>>> Stashed changes:src/components/GraphComponent/GraphComponent.jsx
    return (
    <div className={GraphStyles.statistics_draw}>
        <h1 className={GraphStyles.statistics_draw_header}>Графики</h1>
        <div className={GraphStyles.statistics_draw_part}>
                <div className={GraphStyles.statistics_draw_selection}>
                    <NavLink 
                        className={({ isActive }) =>
                            `${GraphStyles.statistics_draw_btn} + ${isActive ? `${GraphStyles.opened}` : ''}`
                        }
                        to={"/stats/speed"}
                    >
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Скорость
                        </span>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                            `${GraphStyles.statistics_draw_btn} + ${isActive ? `${GraphStyles.opened}` : ''}`
                        }
                        to={"/stats/accuracy"}
                    >
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Аккуратность
                        </span>
                    </NavLink>
                    <NavLink 
                        className={({ isActive }) =>
                            `${GraphStyles.statistics_draw_btn} + ${isActive ? `${GraphStyles.opened}` : ''}`
                        }
                        to={"/stats/errors"}
                    >
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Ошибки
                        </span>
                    </NavLink>
                </div>
                <div className={GraphStyles.statistics_draw_graph}>
                    <Routes>
                        <Route path="/speed" element={
                            <TheGraph data={speedGraphData}/>
                        } />
                        <Route path="/accuracy" element={
                            <Graph data={accuracyGraphData}/>
                        } />
                        <Route path="/errors" element={
                            <Graph data={errorGraphData}/>
                        } />
<<<<<<< Updated upstream:src/components/Graph/Graph.jsx
=======
                        <Route path="/*" element={
                            <Graph data={speedGraphData}/>
                        } />
>>>>>>> Stashed changes:src/components/GraphComponent/GraphComponent.jsx
                    </Routes >
                    
                </div>
            </div>
        </div>
    )
}

export default GraphComponent;