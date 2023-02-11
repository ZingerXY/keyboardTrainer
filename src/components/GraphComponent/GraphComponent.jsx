import React, { useEffect, useState } from 'react';
import GraphStyles from './Graph.module.scss';
import Graph from "./graph/Graph";
import {NavLink, useLocation} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useGetStatsData } from "../../hooks/useGetStatsData";
import Selector from '../Selector/Selector';
import { CircularProgress } from '@mui/material';

const GraphComponent = () => {
    const location = useLocation();
    const {loading, data} = useGetStatsData();
    const [datePeriod, setDatePeriod] = useState('За всё время');
    const [openedSelector, setOpenedSelector] = useState('');

    return (
    <div className={GraphStyles.statistics_draw}>
        <h1 className={GraphStyles.statistics_draw_header}>Графики</h1>
        <div className={GraphStyles.statistics_draw_part}>
            <div className={GraphStyles.selector_box}>
                <Selector
                    fields={['За всё время', 'За 3 месяца', 'За месяц']}
                    onClickFunction={setDatePeriod}
                    heading={datePeriod}
                    setOpenedSelector={setOpenedSelector}
                    name={'datePeriod'}
                    openedSelector={openedSelector}
                />
            </div>
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
                                dataFromDB={data}
                                name="Accuracy"
                                color='red'
                                datePeriod={datePeriod}
                            />
                        } />
                        <Route path="/errors" element={
                            <Graph
                                dataFromDB={data}
                                name='number_of_errors'
                                color='green'
                                datePeriod={datePeriod}
                            />
                        } />
                        <Route path="/*" element={
                            <Graph
                                dataFromDB={data}
                                name='dial_speeds'
                                color='blue'
                                datePeriod={datePeriod}
                            />
                        } />
                    </Routes > :
                    <CircularProgress style={{
                        color: '#006D4C'
                    }} />
                }
                
            </div>
        </div>
    </div>
    )
}

export default GraphComponent;