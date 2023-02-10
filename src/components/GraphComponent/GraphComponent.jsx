import React, { useEffect } from 'react';
import GraphStyles from './Graph.module.scss';
import Graph from "./graph/Graph";
import {NavLink, useLocation} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {data as accuracyGraphData} from './graph/graphsData/accuracyGraph';
import {data as errorGraphData} from './graph/graphsData/errorGraph';
import {data as speedGraphData} from './graph/graphsData/speedGraph';
import { useGetStatsData } from "../../hooks/useGetStatsData";

const GraphComponent = () => {
    const location = useLocation();
    const {loading, data} = useGetStatsData();

    return (
    <div className={GraphStyles.statistics_draw}>
        <h1 className={GraphStyles.statistics_draw_header}>Графики</h1>
        <div className={GraphStyles.statistics_draw_part}>
            <div className={GraphStyles.statistics_draw_selection}>
                <NavLink
                    className={({ isActive }) =>
                        `${GraphStyles.statistics_draw_btn} + ${isActive ? `${GraphStyles.opened}` : ''}`
                    }
                    to={location.pathname === '/stats' ? '' : '/stats/'}
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
                {
                    !loading ? 
                    <Routes>
                        <Route path="/accuracy" element={
                            <Graph
                                dataFromDB={data.map(value => value.Accuracy)}
                            />
                        } />
                        <Route path="/errors" element={
                            <Graph
                                dataFromDB={data.map(value => value.number_of_errors)}
                            />
                        } />
                        <Route path="/*" element={
                            <Graph
                                dataFromDB={data.map(value => value.dial_speeds)}
                            />
                        } />
                    </Routes > :
                    null
                }
                
            </div>
        </div>
    </div>
    )
}

export default GraphComponent;