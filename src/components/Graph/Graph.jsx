import React, { useState } from "react";
import GraphStyles from './Graph.module.scss';
import TheGraph from "./TheGraph";
import {NavLink, useLocation} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {data as accuracyGraphData} from './graphData/accuracyGraph';
import {data as errorGraphData} from './graphData/errorGraph';
import {data as speedGraphData} from './graphData/speedGraph';

const Graph = () => {
    const location = useLocation()
    return (
    <div className={GraphStyles.statistics_draw}>
        <h1 className={GraphStyles.statistics_draw_header}>Графики</h1>
        <div className={GraphStyles.statistics_draw_part}>
                <div className={GraphStyles.statistics_draw_selection}>
                    <NavLink
                        className={({ isActive }) =>
                            `${GraphStyles.statistics_draw_btn} + ${isActive ? `${GraphStyles.opened}` : ''}`
                        }
                        to={location.pathname === '/stats' ? '' : 'speed'}
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
                        <Route path="/accuracy" element={
                            <TheGraph data={accuracyGraphData}/>
                        } />
                        <Route path="/errors" element={
                            <TheGraph data={errorGraphData}/>
                        } />
                        <Route path="/*" element={
                            <TheGraph data={speedGraphData}/>
                        } />
                    </Routes >
                    
                </div>
            </div>
        </div>
    )
}

export default Graph